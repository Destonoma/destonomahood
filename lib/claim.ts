import { supabase } from "./supabase";

export async function createClaim(data: {
  name: string;
  twitter_username: string;
  telegram: string;
  wallet: string;
  referred_by?: string;
}) {
  // cek wallet sudah pernah claim atau belum
  const { data: existing } = await supabase
    .from("claims")
    .select("id")
    .eq("wallet", data.wallet)
    .maybeSingle();

  if (existing) {
    throw new Error("Wallet already claimed");
  }

  // cek referral code
  let refWallet: string | null = null;

  if (data.referred_by) {
    const { data: refUser } = await supabase
      .from("claims")
      .select("wallet")
      .eq(
  "pass_number",
  Number(data.referred_by.replace("DTM-", ""))
)
      .maybeSingle();

    if (!refUser) {
      throw new Error("Invalid Referral Code");
    }

    if (refUser.wallet === data.wallet) {
      throw new Error("You cannot use your own referral code");
    }

    refWallet = refUser.wallet;
  }

  // simpan claim
  const { data: claim, error } = await supabase
    .from("claims")
    .insert({
      name: data.name,
      twitter_username: data.twitter_username,
      telegram: data.telegram,
      wallet: data.wallet,
      referred_by: data.referred_by || null,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  // buat data quest pertama kali
  const { error: questError } = await supabase
    .from("user_quests")
    .upsert({
      wallet: data.wallet,
      xp: 0,
    });

  if (questError) {
    throw questError;
  }

  // bonus referral
  if (refWallet) {
    const { data: quest } = await supabase
      .from("user_quests")
      .select("xp")
      .eq("wallet", refWallet)
      .single();

    if (quest) {
      await supabase
        .from("user_quests")
        .update({
          xp: quest.xp + 1000,
        })
        .eq("wallet", refWallet);
    }
  }

  return claim;
}
import { supabase } from "./supabase";

export async function createClaim(data: {
  name: string;
  twitter_username: string;
  telegram: string;
  wallet: string;
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

  // simpan claim
  const { data: claim, error } = await supabase
    .from("claims")
    .insert({
      name: data.name,
      twitter_username: data.twitter_username,
      telegram: data.telegram,
      wallet: data.wallet,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return claim;
}

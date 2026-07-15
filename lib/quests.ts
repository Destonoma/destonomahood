import { supabase } from "./supabase";

export async function getQuest(wallet: string) {
  const { data, error } = await supabase
    .from("user_quests")
    .select("*")
    .eq("wallet", wallet)
    .single();

  if (error) throw error;

  return data;
}

export async function completeTask(
  wallet: string,
  task: "follow" | "like" | "repost" | "telegram",
  reward: number
) {
  const quest = await getQuest(wallet);

  if (!quest) return;

  const field = `${task}_done`;

  // jangan kasih reward dua kali
  if (quest[field as keyof typeof quest]) {
    return quest;
  }

  const { data, error } = await supabase
    .from("user_quests")
    .update({
      xp: quest.xp + reward,
      [field]: true,
    })
    .eq("wallet", wallet)
    .select()
    .single();

  if (error) throw error;

  return data;
}
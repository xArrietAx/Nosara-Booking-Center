import supabase from "../supabase";

export async function houses() {
  const { data, error } = await supabase.from("House").select("*");
  return { data, error };
}

export async function house(id) {
  const { data, error } = await supabase.from("House").select()
  .eq('id', id );
  return { data, error };
}


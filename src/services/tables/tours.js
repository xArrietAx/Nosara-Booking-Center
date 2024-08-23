import supabase from "../supabase";

export async function tours() {
  const { data, error } = await supabase.from("Tours").select("*");
  return { data, error };
}

export async function tour(id) {
  const { data, error } = await supabase.from("Tours").select()
  .eq('id', id );
  return { data, error };
}
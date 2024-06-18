import { NextResponse } from "next/server";
import supabase from "@/utils/Supabase";

export async function GET() {
  try {
    const { data, error } = await supabase.from("House").select("*").range(0, 5);

    if (error) {
      throw new Error()
    }

      return NextResponse.json({
        data,
        status: 200,
      });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message:"Failed to fetch", error }, { status:500 })
  }
}
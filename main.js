import { createClient } from "@supabase/supabase-js";
// Create a single supabase client for interacting with your database

const NEXT_PUBLIC_SUPABASE_URL = "https://fkehznywbuwylpnnoxki.supabase.co";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrZWh6bnl3YnV3eWxwbm5veGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNTgxMzEsImV4cCI6MjA2NjkzNDEzMX0.PlVUDRzMaNEuWwaEwX-_Ekwyjad3latNdxJe3ECEkJc";

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const testRead = async function () {
  const { data: test, error } = await supabase.from("test").select("*");
  console.log(test);
};

testRead();

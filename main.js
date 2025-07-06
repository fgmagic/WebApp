import { createClient } from "@supabase/supabase-js";
// Create a single supabase client for interacting with your database

const NEXT_PUBLIC_SUPABASE_URL = "https://fkehznywbuwylpnnoxki.supabase.co";
const NEXT_PUBLIC_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrZWh6bnl3YnV3eWxwbm5veGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNTgxMzEsImV4cCI6MjA2NjkzNDEzMX0.PlVUDRzMaNEuWwaEwX-_Ekwyjad3latNdxJe3ECEkJc";

const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Query seletors
const listItem = document.querySelector(".container");
const nameInsertItem = document.querySelector(".form-container");

const testRead = async function () {
  try {
    const { data: test, error } = await supabase.from("test").select("*");
    return await test;
  } catch (err) {
    console.error("Error:", err);
  }
};

const testWrite = async function (newName) {
  try {
    const { data, error } = await supabase
      .from("test")
      .insert([{ name: newName }])
      .select();
  } catch (err) {
    console.error("Error:", err);
  }
};

const init = async () => {
  try {
    const testData = await testRead();

    let text = "";

    testData.forEach((el) => {
      text += `<div class="row">
             <div class="item">${el.id}</div>
             <div class="item">${el.name}</div>
           </div>`;
    });

    listItem.insertAdjacentHTML("beforeend", text);
  } catch (err) {
    console.error("Error:", err);
  }
};

init();

//Event handlers

nameInsertItem.addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent form reload

  const input = nameInsertItem.querySelector("input[name='name']");
  const newName = input.value;

  await testWrite(newName);

  input.value = "";
});

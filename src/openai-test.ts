import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "dummy-key-for-test",
});

async function callOpenAI() {
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: "Say hello",
  });
  console.log(response.choices[0].text);
}

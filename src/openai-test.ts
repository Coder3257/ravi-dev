import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "dummy-key-for-test",
});

const openai = new OpenAIApi(configuration);

async function callOpenAI() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say hello",
  });
  console.log(response.data.choices[0].text);
}

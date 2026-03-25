import axios from "axios";

export const generateGeminiResponse = async (prompt) => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const payload = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  };

  const res = await axios.post(url, payload);
  return res.data.candidates[0].content.parts[0].text;
};

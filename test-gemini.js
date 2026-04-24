const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testGemini() {
  const apiKey = "AIzaSyAsWYTPt9BQcUepVkm9x-ixWUNrT7KF3I4";
  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    // Try a more standard model name or just hit an endpoint that verifies the key
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Hi");
    console.log("Gemini Response:", (await result.response).text());
    console.log("✅ API Key is working!");
  } catch (error) {
    if (error.message.includes("404")) {
       console.log("Attempting with gemini-pro...");
       try {
         const model = genAI.getGenerativeModel({ model: "gemini-pro" });
         const result = await model.generateContent("Hi");
         console.log("Gemini Response:", (await result.response).text());
         console.log("✅ API Key is working with gemini-pro!");
       } catch (innerError) {
         console.error("❌ API Key Error:", innerError.message);
       }
    } else {
      console.error("❌ API Key Error:", error.message);
    }
  }
}

testGemini();

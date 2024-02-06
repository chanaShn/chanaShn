const OpenAI = require('openai');

// הכנס את מפתח ה-API שלך כאן
const apiKey = 'chaniApi';

const openai = new OpenAI({ key: apiKey });

async function generateGreetings(selectedEvent, selectedGreetingType, selectedAtmosphere) {
  const prompt = `Generate three greetings for ${selectedEvent} events. Greetings should be ${selectedGreetingType}, with a ${selectedAtmosphere} atmosphere.`;

  try {
    const response = await openai.complete({
      prompt: prompt,
      max_tokens: 150,
      n: 3,
    });

    const greetings = response.choices.map(choice => choice.text.trim());
    return greetings;
  } catch (error) {
    console.error('Error generating greetings:', error);
    return [];
  }
}

// Example usage
const selectedEvent = 'birthday';  // Replace with the actual user's selection
const selectedGreetingType = 'song';  // Replace with the actual user's selection
const selectedAtmosphere = 'happy';  // Replace with the actual user's selection

generateGreetings(selectedEvent, selectedGreetingType, selectedAtmosphere)
  .then(greetings => {
    console.log('Generated Greetings:', greetings);
  });
  console.log('Selected Event:', selectedEvent);
  console.log('Selected Greeting Type:', selectedGreetingType);
  console.log('Selected Atmosphere:', selectedAtmosphere);
import OpenAI from 'openai';
import { UserAnswers, RecommendationResult } from '../types';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Only for demo purposes
});

export const getAIRecommendationFromOpenAI = async (answers: UserAnswers): Promise<RecommendationResult> => {
  try {
    const prompt = `
You are a compassionate mental health AI assistant. Based on the following user responses, provide a recommendation from these three options: "Meditation", "Talk to a Friend", or "Consult a Therapist".

User Information:
- Name: ${answers.name}
- Main Problem: ${answers.problem}
- Perceived Cause: ${answers.cause}
- People Involved: ${answers.involved}
- Current Emotions: ${answers.emotion}
- Severity Level: ${answers.severity}
- Duration: ${answers.duration}
- Daily Life Impact: ${answers.impact}
- Previous Help Attempts: ${answers.previousHelp}
- Goals: ${answers.goals}

Guidelines for recommendations:
- "Consult a Therapist": For severe mental health issues, trauma, persistent problems lasting months/years, suicidal thoughts, or when previous self-help hasn't worked
- "Talk to a Friend": For relationship issues, social conflicts, need for emotional support, or situations involving interpersonal relationships
- "Meditation": For stress, anxiety (mild to moderate), work pressure, sleep issues, or when seeking inner peace and mindfulness

Please respond with ONLY a JSON object in this exact format:
{
  "solution": "one of the three options",
  "confidence": number between 70-95,
  "reasoning": "brief explanation for the recommendation"
}
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful mental health assistant that provides thoughtful recommendations based on user responses."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content;
    if (!response) {
      throw new Error('No response from OpenAI');
    }

    // Parse the JSON response
    const result = JSON.parse(response);
    
    return {
      solution: result.solution as 'Meditation' | 'Talk to a Friend' | 'Consult a Therapist',
      confidence: result.confidence
    };

  } catch (error) {
    console.error('Error getting AI recommendation:', error);
    
    // Fallback to the existing rule-based system
    const { getAIRecommendation } = await import('../utils/aiRecommendation');
    return getAIRecommendation(answers);
  }
};
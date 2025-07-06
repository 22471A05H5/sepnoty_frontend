import { UserAnswers, RecommendationResult } from '../types';

export const getAIRecommendation = (answers: UserAnswers): RecommendationResult => {
  const { problem, cause, involved, emotion, severity, duration, impact, previousHelp, goals } = answers;
  
  // Convert inputs to lowercase for better matching
  const allText = `${problem} ${cause} ${involved} ${emotion} ${severity} ${duration} ${impact} ${previousHelp} ${goals}`.toLowerCase();
  
  // Keywords for different recommendation categories
  const therapyKeywords = [
    'depression', 'anxiety', 'panic', 'trauma', 'ptsd', 'suicide', 'self-harm', 
    'abuse', 'addiction', 'eating disorder', 'severe', 'crisis', 'therapy',
    'professional help', 'medication', 'mental health', 'bipolar', 'schizophrenia',
    'months', 'years', 'long time', 'chronic', 'persistent', 'overwhelming',
    'can\'t cope', 'unbearable', 'desperate', 'hopeless', 'therapy before',
    'counselor', 'psychiatrist', 'psychologist', 'medication', 'antidepressant'
  ];
  
  const friendKeywords = [
    'relationship', 'family', 'friends', 'social', 'work', 'colleague', 
    'partner', 'breakup', 'argument', 'conflict', 'misunderstanding',
    'loneliness', 'isolation', 'support', 'talk', 'advice', 'communication',
    'trust', 'betrayal', 'friendship', 'romantic', 'dating', 'marriage',
    'parents', 'siblings', 'workplace', 'boss', 'coworker', 'neighbor'
  ];
  
  const meditationKeywords = [
    'stress', 'overwhelmed', 'pressure', 'tired', 'exhausted', 'busy',
    'meditation', 'calm', 'peace', 'mindfulness', 'relaxation', 'breathing',
    'sleep', 'insomnia', 'concentration', 'focus', 'inner peace', 'balance',
    'work stress', 'deadlines', 'exams', 'performance', 'perfectionism',
    'racing thoughts', 'worry', 'tension', 'restless', 'agitated'
  ];
  
  // Calculate scores for each recommendation
  let therapyScore = 0;
  let friendScore = 0;
  let meditationScore = 0;
  
  // Check for therapy keywords
  therapyKeywords.forEach(keyword => {
    if (allText.includes(keyword)) {
      therapyScore += 3;
    }
  });
  
  // Check for friend keywords
  friendKeywords.forEach(keyword => {
    if (allText.includes(keyword)) {
      friendScore += 2;
    }
  });
  
  // Check for meditation keywords
  meditationKeywords.forEach(keyword => {
    if (allText.includes(keyword)) {
      meditationScore += 2;
    }
  });
  
  // Additional scoring based on severity and duration
  const severityText = severity.toLowerCase();
  const durationText = duration.toLowerCase();
  const impactText = impact.toLowerCase();
  const previousHelpText = previousHelp.toLowerCase();
  
  // High severity indicators
  if (severityText.includes('severe') || severityText.includes('extreme') || 
      severityText.includes('unbearable') || severityText.includes('10') ||
      severityText.includes('crisis') || severityText.includes('emergency')) {
    therapyScore += 5;
  }
  
  // Duration indicators
  if (durationText.includes('months') || durationText.includes('years') || 
      durationText.includes('long time') || durationText.includes('chronic')) {
    therapyScore += 4;
  }
  
  // Impact on daily life
  if (impactText.includes('can\'t work') || impactText.includes('can\'t sleep') ||
      impactText.includes('can\'t eat') || impactText.includes('everything') ||
      impactText.includes('completely') || impactText.includes('unable')) {
    therapyScore += 4;
  }
  
  // Previous professional help
  if (previousHelpText.includes('therapy') || previousHelpText.includes('counselor') ||
      previousHelpText.includes('psychiatrist') || previousHelpText.includes('medication')) {
    therapyScore += 3;
  }
  
  // Social isolation indicators
  if (allText.includes('alone') || allText.includes('isolated') || 
      allText.includes('no friends') || allText.includes('lonely')) {
    if (allText.includes('severe') || allText.includes('depression')) {
      therapyScore += 3;
    } else {
      friendScore += 4;
    }
  }
  
  // Relationship issues
  if (allText.includes('relationship') || allText.includes('family') || 
      allText.includes('partner') || allText.includes('friends')) {
    friendScore += 3;
  }
  
  // Stress and anxiety without severe symptoms
  if ((allText.includes('stress') || allText.includes('anxiety')) && 
      !allText.includes('severe') && !allText.includes('panic')) {
    meditationScore += 3;
  }
  
  // Work-related stress
  if (allText.includes('work') || allText.includes('job') || 
      allText.includes('career') || allText.includes('deadline')) {
    meditationScore += 2;
  }
  
  // Determine the best recommendation
  const maxScore = Math.max(therapyScore, friendScore, meditationScore);
  let solution: 'Meditation' | 'Talk to a Friend' | 'Consult a Therapist';
  
  if (maxScore === 0) {
    // Default to meditation if no keywords match
    solution = 'Meditation';
  } else if (therapyScore === maxScore) {
    solution = 'Consult a Therapist';
  } else if (friendScore === maxScore) {
    solution = 'Talk to a Friend';
  } else {
    solution = 'Meditation';
  }
  
  // Calculate confidence based on score difference and total score
  const totalScore = therapyScore + friendScore + meditationScore;
  const scoreGap = maxScore - Math.max(
    therapyScore === maxScore ? Math.max(friendScore, meditationScore) : therapyScore,
    friendScore === maxScore ? Math.max(therapyScore, meditationScore) : friendScore,
    meditationScore === maxScore ? Math.max(therapyScore, friendScore) : meditationScore
  );
  
  let confidence = 70; // Base confidence
  
  if (totalScore > 15) confidence += 15;
  else if (totalScore > 10) confidence += 10;
  else if (totalScore > 5) confidence += 5;
  
  if (scoreGap > 5) confidence += 10;
  else if (scoreGap > 3) confidence += 5;
  
  confidence = Math.min(95, Math.max(65, confidence));
  
  return {
    solution,
    confidence: Math.round(confidence)
  };
};
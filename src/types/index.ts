export interface UserAnswers {
  name: string;
  problem: string;
  cause: string;
  involved: string;
  emotion: string;
  severity: string;
  duration: string;
  impact: string;
  previousHelp: string;
  goals: string;
}

export interface RecommendationResult {
  solution: string;
  confidence: number;
}

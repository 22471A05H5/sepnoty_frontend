import React from 'react';
import { RecommendationResult } from '../../types';
import { Brain, Heart, Users, Sparkles } from 'lucide-react';

interface ResultsPageProps {
  result: RecommendationResult;
  onStartOver: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ result, onStartOver }) => {
  const getSolutionIcon = (solution: string) => {
    switch (solution) {
      case 'Meditation':
        return <Brain className="w-16 h-16 text-purple-600" />;
      case 'Talk to a Friend':
        return <Users className="w-16 h-16 text-blue-600" />;
      case 'Consult a Therapist':
        return <Heart className="w-16 h-16 text-pink-600" />;
      default:
        return <Sparkles className="w-16 h-16 text-indigo-600" />;
    }
  };

  const getSolutionDescription = (solution: string) => {
    switch (solution) {
      case 'Meditation':
        return {
          description: 'Based on your responses, meditation and mindfulness practices could help you find inner peace and manage stress more effectively.',
          tips: [
            'Start with 5-10 minutes of daily meditation',
            'Try guided meditation apps or videos',
            'Practice deep breathing exercises',
            'Create a quiet, comfortable space for meditation',
            'Focus on mindfulness throughout your day'
          ]
        };
      case 'Talk to a Friend':
        return {
          description: 'Sharing your feelings with a trusted friend can provide emotional support and help you gain new perspectives on your situation.',
          tips: [
            'Choose someone you trust and feel comfortable with',
            'Be honest about your feelings and situation',
            'Listen to their perspective and advice',
            'Consider talking to multiple friends for different viewpoints',
            'Remember that friends can offer emotional support and understanding'
          ]
        };
      case 'Consult a Therapist':
        return {
          description: 'Professional therapy can provide you with specialized tools and techniques to address your concerns effectively.',
          tips: [
            'Research therapists who specialize in your specific concerns',
            'Consider different types of therapy (CBT, DBT, etc.)',
            'Don\'t hesitate to try different therapists until you find the right fit',
            'Be open and honest during your sessions',
            'Consider both in-person and online therapy options'
          ]
        };
      default:
        return {
          description: 'We recommend seeking appropriate support for your situation.',
          tips: []
        };
    }
  };

  const solutionDetails = getSolutionDescription(result.solution);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {getSolutionIcon(result.solution)}
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Your Personalized Recommendation
            </h1>
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-xl font-semibold">
              {result.solution}
            </div>
          </div>

          {/* Confidence Score */}
          <div className="mb-8 text-center">
            <div className="inline-block bg-gray-100 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">Confidence Score</p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${result.confidence}%` }}
                  />
                </div>
                <span className="text-lg font-semibold text-gray-800">{result.confidence}%</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why This Recommendation?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {solutionDetails.description}
            </p>
          </div>

          {/* Tips */}
          {solutionDetails.tips.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Helpful Tips</h2>
              <div className="space-y-3">
                {solutionDetails.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Note */}
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm">
              <strong>Important:</strong> This recommendation is based on AI analysis of your responses. 
              If you're experiencing severe distress, crisis, or thoughts of self-harm, please seek immediate 
              professional help or contact a crisis helpline.
            </p>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <button
              onClick={onStartOver}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Take Assessment Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
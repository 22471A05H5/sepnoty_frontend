import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAnswers, RecommendationResult } from '../types';
import { Brain, Heart, Users, Sparkles, ArrowLeft, AlertCircle } from 'lucide-react';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<RecommendationResult | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswers | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedAnswers = localStorage.getItem('userAnswers');
    if (!storedAnswers) {
      navigate('/questionnaire');
      return;
    }

    const answers: UserAnswers = JSON.parse(storedAnswers);
    setUserAnswers(answers);

    const fetchRecommendation = async () => {
      try {
        const response = await fetch('https://sepnoty-backend.onrender.com/api/recommendation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(answers),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch recommendation');
        }

        const data: RecommendationResult = await response.json();
        setResult(data);
      } catch (error) {
        console.error('Error:', error);
        setResult(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendation();
  }, [navigate]);

  const getSolutionIcon = (solution: string) => {
    switch (solution) {
      case 'Meditation':
        return <Brain className="w-16 h-16 text-sky-400" />;
      case 'Talk to a Friend':
        return <Users className="w-16 h-16 text-pink-400" />;
      case 'Consult a Therapist':
        return <Heart className="w-16 h-16 text-orange-400" />;
      default:
        return <Sparkles className="w-16 h-16 text-sky-400" />;
    }
  };

  const getSolutionDescription = (solution: string) => {
    switch (solution) {
      case 'Meditation':
        return {
          description:
            'Based on your responses, meditation and mindfulness practices could help you find inner peace and manage stress more effectively.',
          tips: [
            'Start with 5-10 minutes of daily meditation',
            'Try guided meditation apps or videos',
            'Practice deep breathing exercises',
            'Create a quiet, comfortable space for meditation',
            'Focus on mindfulness throughout your day',
          ],
        };
      case 'Talk to a Friend':
        return {
          description:
            'Sharing your feelings with a trusted friend can provide emotional support and help you gain new perspectives on your situation.',
          tips: [
            'Choose someone you trust and feel comfortable with',
            'Be honest about your feelings and situation',
            'Listen to their perspective and advice',
            'Talk to multiple friends for different viewpoints',
            'Friends can offer emotional support and understanding',
          ],
        };
      case 'Consult a Therapist':
        return {
          description:
            'Professional therapy can provide you with specialized tools and techniques to address your concerns effectively.',
          tips: [
            'Research therapists who specialize in your specific concerns',
            'Consider different types of therapy (CBT, DBT, etc.)',
            'Try different therapists until you find the right fit',
            'Be open and honest during your sessions',
            'Explore both in-person and online therapy options',
          ],
        };
      default:
        return {
          description: 'We recommend seeking appropriate support for your situation.',
          tips: [],
        };
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="bg-gradient-to-r from-sky-500 to-pink-500 p-4 rounded-full inline-block mb-6">
            <Brain className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Analyzing Your Responses</h2>
          <p className="text-gray-300 mb-6">
            Our AI is carefully reviewing your answers to provide the best recommendation...
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!result || !userAnswers) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Something went wrong</h2>
          <p className="text-gray-300 mb-6">We couldn't process your responses. Please try again.</p>
          <Link
            to="/questionnaire"
            className="bg-gradient-to-r from-sky-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-sky-600 hover:to-pink-600 transition-all duration-200"
          >
            Retake Assessment
          </Link>
        </div>
      </div>
    );
  }

  const solutionDetails = getSolutionDescription(result.solution);

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {getSolutionIcon(result.solution)}
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Hello {userAnswers.name}, here's your personalized recommendation
            </h1>
            <div className="inline-block bg-gradient-to-r from-sky-500 to-pink-500 text-white px-6 py-3 rounded-full text-xl font-semibold">
              {result.solution}
            </div>
          </div>

          <div className="mb-8 text-center">
            <div className="inline-block bg-gray-800 rounded-lg p-4 border border-gray-700">
              <p className="text-sm text-gray-300 mb-2">Confidence Score</p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-32 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-sky-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${result.confidence}%` }}
                  />
                </div>
                <span className="text-lg font-semibold text-white">{result.confidence}%</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Why This Recommendation?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{solutionDetails.description}</p>
          </div>

          {solutionDetails.tips.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Helpful Tips</h2>
              <div className="space-y-3">
                {solutionDetails.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-sky-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-gray-300">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-8 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <p className="text-orange-300 text-sm">
              <strong>Important:</strong> This recommendation is based on AI analysis of your responses.
              If you're experiencing severe distress, crisis, or thoughts of self-harm, please seek
              immediate professional help or contact a crisis helpline.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/questionnaire"
              className="bg-gradient-to-r from-sky-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl text-center"
            >
              Take Assessment Again
            </Link>

            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-gray-700 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-600 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;

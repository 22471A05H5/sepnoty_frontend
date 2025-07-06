import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAnswers } from '../types';
import { ArrowRight, ArrowLeft, HelpCircle, CheckCircle } from 'lucide-react';

const QuestionnairePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({
    name: '',
    problem: '',
    cause: '',
    involved: '',
    emotion: '',
    severity: '',
    duration: '',
    impact: '',
    previousHelp: '',
    goals: ''
  });

  const questions = [
    {
      key: 'name' as keyof UserAnswers,
      question: 'What is your name or nickname?',
      placeholder: 'Just your first name or whatever you’d like us to call you...',
      type: 'text',
      description: 'This helps us personalize your journey and make things feel more human.'
    },
    {
      key: 'problem' as keyof UserAnswers,
      question: 'What are you struggling with the most right now?',
      placeholder: 'Describe anything that’s been heavy on your heart or mind...',
      type: 'textarea',
      description: 'You can be honest here. No judgment. We’re here to understand, not to judge.'
    },
    {
      key: 'cause' as keyof UserAnswers,
      question: 'Do you know what may have caused this?',
      placeholder: 'If something triggered it, feel free to share. It could be anything or anyone...',
      type: 'textarea',
      description: 'Understanding where it started can help us help you better.'
    },
    {
      key: 'involved' as keyof UserAnswers,
      question: 'Is anyone else part of this situation?',
      placeholder: 'Mention any people involved — family, friends, colleagues, etc...',
      type: 'textarea',
      description: 'Knowing your relationships helps us support your emotional environment.'
    },
    {
      key: 'emotion' as keyof UserAnswers,
      question: 'How are you feeling right now?',
      placeholder: 'Sad? Angry? Numb? Anxious? Say whatever feels true...',
      type: 'textarea',
      description: 'Your emotions are valid, and they give us clues on how to guide you.'
    },
    {
      key: 'severity' as keyof UserAnswers,
      question: 'How strong or intense is this feeling?',
      placeholder: 'You can describe it in your own words or on a 1–10 scale...',
      type: 'textarea',
      description: 'This helps us understand how deeply it’s affecting you.'
    },
    {
      key: 'duration' as keyof UserAnswers,
      question: 'How long have you been feeling this way?',
      placeholder: 'Did it start recently or has it been going on for a while?',
      type: 'textarea',
      description: 'This helps us know whether it’s a short-term stress or long-term struggle.'
    },
    {
      key: 'impact' as keyof UserAnswers,
      question: 'How is this affecting your everyday life?',
      placeholder: 'You can mention how it’s affecting your sleep, work, studies, or relationships...',
      type: 'textarea',
      description: 'We want to understand how this is showing up in your day-to-day life.'
    },
    {
      key: 'previousHelp' as keyof UserAnswers,
      question: 'Have you talked to anyone or tried anything before this?',
      placeholder: 'Maybe therapy, friends, journaling, nothing — anything you’ve done counts...',
      type: 'textarea',
      description: 'This tells us what’s worked or not worked for you in the past.'
    },
    {
      key: 'goals' as keyof UserAnswers,
      question: 'What do you wish to feel or change in your life?',
      placeholder: 'Think about the outcome you want — peace, confidence, clarity, support...',
      type: 'textarea',
      description: 'Your goals guide our suggestions. There’s always a way forward.'
    }
  ];

  const handleInputChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentStep].key]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGetSolution = () => {
    localStorage.setItem('userAnswers', JSON.stringify(answers));
    navigate('/results');
  };

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.key];
  const isLastStep = currentStep === questions.length - 1;
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-full inline-block mb-4">
          <HelpCircle className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Personal Assessment</h1>
        <p className="text-gray-300">
          We're here to listen. Answer honestly — everything stays private.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Progress Bar */}
          <div className="bg-gray-800 px-8 py-6 border-b border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-300">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm text-sky-400 font-medium">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-sky-500 to-pink-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">
                {currentQuestion.question}
              </h2>
              <p className="text-gray-300 mb-6">
                {currentQuestion.description}
              </p>

              <div className="space-y-4">
                {currentQuestion.type === 'textarea' ? (
                  <textarea
                    value={currentAnswer}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full p-4 border-2 border-gray-600 bg-gray-800 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 resize-none text-white placeholder-gray-400"
                    rows={6}
                    required
                  />
                ) : (
                  <input
                    type="text"
                    value={currentAnswer}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full p-4 border-2 border-gray-600 bg-gray-800 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 text-white placeholder-gray-400"
                    required
                  />
                )}
              </div>

              {currentQuestion.type === 'textarea' && currentAnswer && (
                <div className="mt-2 text-right">
                  <span className="text-sm text-gray-400">
                    {currentAnswer.length} characters
                  </span>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-gray-300 rounded-xl hover:bg-gray-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center space-x-2">
                <div className="hidden sm:flex space-x-1">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index < currentStep
                          ? 'bg-orange-500'
                          : index === currentStep
                          ? 'bg-sky-500'
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {isLastStep ? (
                <button
                  onClick={handleGetSolution}
                  disabled={!currentAnswer.trim()}
                  className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Get My Solution</span>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!currentAnswer.trim()}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-pink-500 text-white rounded-xl hover:from-sky-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Confidentiality Note */}
        <div className="text-center mt-8">
  <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 px-6 py-3 rounded-xl shadow-lg border border-green-300">
    <p className="text-white text-sm sm:text-base font-semibold">
      🔒 Your responses are <span className="underline underline-offset-4">100% confidential</span> and used only to guide your personalized support.
    </p>
  </div>
</div>
      </div>
    </div>
  );
};

export default QuestionnairePage;

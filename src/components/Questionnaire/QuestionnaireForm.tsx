import React, { useState } from 'react';
import { UserAnswers } from '../../types';
import { ArrowRight, ArrowLeft, HelpCircle, CheckCircle } from 'lucide-react';

interface QuestionnaireFormProps {
  onComplete: (answers: UserAnswers) => void;
}

const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({ onComplete }) => {
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
      question: 'What is your name?',
      placeholder: 'Enter your first name',
      type: 'text',
      description: 'We\'d like to personalize your experience'
    },
    {
      key: 'problem' as keyof UserAnswers,
      question: 'What is the main problem or challenge you are currently facing?',
      placeholder: 'Describe the primary issue that brought you here today...',
      type: 'textarea',
      description: 'Take your time to explain what\'s troubling you most'
    },
    {
      key: 'cause' as keyof UserAnswers,
      question: 'What do you think is causing this problem?',
      placeholder: 'Share what you believe might be the root cause or trigger...',
      type: 'textarea',
      description: 'Understanding the cause helps us provide better guidance'
    },
    {
      key: 'involved' as keyof UserAnswers,
      question: 'Who else is involved in this situation?',
      placeholder: 'Describe any people who are part of this situation (family, friends, colleagues, etc.)...',
      type: 'textarea',
      description: 'This helps us understand your support system and relationships'
    },
    {
      key: 'emotion' as keyof UserAnswers,
      question: 'What emotions are you experiencing right now?',
      placeholder: 'Describe how you\'re feeling emotionally and mentally...',
      type: 'textarea',
      description: 'Your emotional state is important for our recommendation'
    },
    {
      key: 'severity' as keyof UserAnswers,
      question: 'How would you rate the intensity of what you\'re going through?',
      placeholder: 'Describe how severe or intense your current situation feels...',
      type: 'textarea',
      description: 'This helps us understand the urgency of your needs'
    },
    {
      key: 'duration' as keyof UserAnswers,
      question: 'How long have you been dealing with this issue?',
      placeholder: 'Tell us when this started and how long it has been affecting you...',
      type: 'textarea',
      description: 'Duration helps us understand if this is acute or chronic'
    },
    {
      key: 'impact' as keyof UserAnswers,
      question: 'How is this affecting your daily life?',
      placeholder: 'Describe how this issue impacts your work, relationships, sleep, appetite, etc...',
      type: 'textarea',
      description: 'Understanding the impact helps us gauge the scope of support needed'
    },
    {
      key: 'previousHelp' as keyof UserAnswers,
      question: 'Have you tried anything to address this before?',
      placeholder: 'Share any previous attempts to solve this, including therapy, medication, self-help, etc...',
      type: 'textarea',
      description: 'This helps us avoid suggesting things you\'ve already tried'
    },
    {
      key: 'goals' as keyof UserAnswers,
      question: 'What would you like to achieve or how would you like to feel?',
      placeholder: 'Describe your ideal outcome or how you\'d like things to be different...',
      type: 'textarea',
      description: 'Your goals help us tailor our recommendations to what matters most to you'
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
    onComplete(answers);
  };

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.key];
  const isLastStep = currentStep === questions.length - 1;
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full inline-block mb-4">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Personal Assessment</h1>
          <p className="text-gray-600">Help us understand your situation to provide the best guidance</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gray-50 px-8 py-6 border-b">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-600">
                Question {currentStep + 1} of {questions.length}
              </span>
              <span className="text-sm text-blue-600 font-medium">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {currentQuestion.question}
              </h2>
              <p className="text-gray-600 mb-6">
                {currentQuestion.description}
              </p>
              
              <div className="space-y-4">
                {currentQuestion.type === 'textarea' ? (
                  <textarea
                    value={currentAnswer}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-700 placeholder-gray-400"
                    rows={6}
                    required
                  />
                ) : (
                  <input
                    type="text"
                    value={currentAnswer}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                    required
                  />
                )}
              </div>

              {/* Character count for textarea */}
              {currentQuestion.type === 'textarea' && currentAnswer && (
                <div className="mt-2 text-right">
                  <span className="text-sm text-gray-500">
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
                className="flex items-center space-x-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              
              <div className="flex items-center space-x-2">
                {/* Question indicators */}
                <div className="hidden sm:flex space-x-1">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index < currentStep 
                          ? 'bg-green-500' 
                          : index === currentStep 
                          ? 'bg-blue-500' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {isLastStep ? (
                <button
                  onClick={handleGetSolution}
                  disabled={!currentAnswer.trim()}
                  className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Get My Solution</span>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!currentAnswer.trim()}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Your responses are completely confidential and will only be used to provide personalized recommendations
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
'use client';

import { useState } from 'react';
import type { Chapter } from '@/types';

interface InteractiveElementsProps {
  elements: Chapter['metadata']['interactive_elements'];
}

export default function InteractiveElements({ elements }: InteractiveElementsProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  
  if (!elements) return null;
  
  const { statistics, quiz, highlights, practiceExercises } = elements;
  
  return (
    <div className="space-y-8 mt-8">
      {statistics && (
        <div className="bg-white rounded-xl shadow-card p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📊 Статистика
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(statistics).map(([key, value]) => (
              <div key={key} className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  {value}
                </div>
                <div className="text-sm text-gray-600 capitalize">
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {highlights && highlights.length > 0 && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-card p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            💡 Ключевые моменты
          </h3>
          <ul className="space-y-3">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 font-bold">✓</span>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {quiz && quiz.length > 0 && (
        <div className="bg-white rounded-xl shadow-card p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🎯 Проверьте свои знания
          </h3>
          
          {quiz.map((question, qIndex) => (
            <div key={qIndex} className="mb-8">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                {question.question}
              </p>
              
              <div className="space-y-3">
                {question.answers.map((answer, aIndex) => (
                  <button
                    key={aIndex}
                    onClick={() => {
                      setSelectedAnswer(aIndex);
                      setShowResult(true);
                    }}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showResult
                        ? aIndex === question.correct
                          ? 'border-green-500 bg-green-50'
                          : aIndex === selectedAnswer
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 bg-gray-50'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                    }`}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              
              {showResult && (
                <div className={`mt-4 p-4 rounded-lg ${
                  selectedAnswer === question.correct
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}>
                  {selectedAnswer === question.correct
                    ? '✓ Правильно!'
                    : `✗ Неправильно. Правильный ответ: ${question.answers[question.correct]}`
                  }
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {practiceExercises && practiceExercises.length > 0 && (
        <div className="bg-white rounded-xl shadow-card p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📝 Практические упражнения
          </h3>
          <div className="space-y-4">
            {practiceExercises.map((exercise, index) => (
              <div key={index} className="p-4 border-l-4 border-primary-500 bg-primary-50 rounded">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {exercise.title}
                </h4>
                <p className="text-gray-700 text-sm">
                  {exercise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
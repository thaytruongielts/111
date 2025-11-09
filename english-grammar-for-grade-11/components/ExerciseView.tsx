
import React, { useState } from 'react';
import { Unit } from '../types';
import { ArrowLeftIcon, CheckCircleIcon, RefreshIcon, XCircleIcon } from './icons';

interface ExerciseViewProps {
  unit: Unit;
  onBack: () => void;
}

export const ExerciseView: React.FC<ExerciseViewProps> = ({ unit, onBack }) => {
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(unit.exercises.length).fill(null));
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (isSubmitted) return;
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setUserAnswers(Array(unit.exercises.length).fill(null));
    setIsSubmitted(false);
  };

  const score = userAnswers.reduce((total, answer, index) => {
    return answer === unit.exercises[index].correctAnswerIndex ? total + 1 : total;
  }, 0);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Theory
        </button>
      </div>

      <header className="text-center mb-8 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-slate-800">Exercises: {unit.title}</h1>
        <p className="text-xl text-slate-600 mt-1">{unit.subtitle}</p>
      </header>

      <div className="space-y-8">
        {unit.exercises.map((q, qIndex) => (
          <div key={qIndex} className="bg-white p-6 rounded-lg shadow-sm">
            <p className="font-semibold text-slate-800 mb-4">{qIndex + 1}. {q.question}</p>
            <div className="space-y-3">
              {q.options.map((option, oIndex) => {
                const isSelected = userAnswers[qIndex] === oIndex;
                const isCorrect = q.correctAnswerIndex === oIndex;
                
                let optionClass = 'border-slate-300 hover:border-indigo-500 hover:bg-indigo-50';
                if (isSubmitted) {
                    if (isCorrect) {
                        optionClass = 'border-green-500 bg-green-100 text-green-800 font-semibold';
                    } else if (isSelected && !isCorrect) {
                        optionClass = 'border-red-500 bg-red-100 text-red-800';
                    } else {
                        optionClass = 'border-slate-300';
                    }
                } else if (isSelected) {
                    optionClass = 'border-indigo-600 bg-indigo-100 ring-2 ring-indigo-300';
                }

                return (
                  <button
                    key={oIndex}
                    onClick={() => handleSelectOption(qIndex, oIndex)}
                    disabled={isSubmitted}
                    className={`w-full flex items-center text-left p-3 border-2 rounded-lg transition-all duration-200 ${optionClass}`}
                  >
                    <span className="flex-1">{option}</span>
                    {isSubmitted && isCorrect && <CheckCircleIcon className="w-6 h-6 text-green-600" />}
                    {isSubmitted && isSelected && !isCorrect && <XCircleIcon className="w-6 h-6 text-red-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        {isSubmitted && (
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-800">
              Your Score: {score} / {unit.exercises.length}
            </h3>
            <p className="text-slate-600">
              {score > unit.exercises.length / 2 ? 'Great job!' : 'Keep practicing!'}
            </p>
          </div>
        )}
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={userAnswers.includes(null)}
            className="w-full md:w-auto bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors shadow-md disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            Check Answers
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="w-full md:w-auto bg-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-700 transition-colors shadow-md flex items-center justify-center"
          >
            <RefreshIcon className="w-5 h-5 mr-2" />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

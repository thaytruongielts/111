
import React, { useState } from 'react';
import UnitList from './components/UnitList';
import { TheoryView } from './components/TheoryView';
import { ExerciseView } from './components/ExerciseView';
import { grammarUnits } from './constants/grammarData';
import { Unit } from './types';

type View = 'list' | 'theory' | 'exercise';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('list');
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);

  const handleSelectUnit = (unit: Unit) => {
    setSelectedUnit(unit);
    setCurrentView('theory');
  };

  const handleBackToUnitList = () => {
    setSelectedUnit(null);
    setCurrentView('list');
  };

  const handleShowTheory = () => {
    setCurrentView('theory');
  };
  
  const handleStartExercise = () => {
    setCurrentView('exercise');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'theory':
        return selectedUnit && <TheoryView unit={selectedUnit} onBack={handleBackToUnitList} onStartExercise={handleStartExercise} />;
      case 'exercise':
        return selectedUnit && <ExerciseView unit={selectedUnit} onBack={handleShowTheory} />;
      case 'list':
      default:
        return <UnitList units={grammarUnits} onSelectUnit={handleSelectUnit} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800">
        <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
            {renderContent()}
        </main>
        <footer className="text-center py-4 mt-8">
            <p className="text-sm text-slate-500">
                Created for educational purposes.
            </p>
        </footer>
    </div>
  );
};

export default App;

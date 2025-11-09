
import React from 'react';
import { Unit } from '../types';
import { BookOpenIcon } from './icons';

interface UnitListProps {
  units: Unit[];
  onSelectUnit: (unit: Unit) => void;
}

const UnitList: React.FC<UnitListProps> = ({ units, onSelectUnit }) => {
  return (
    <div className="w-full">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">Ngữ pháp tiếng Anh lớp 11</h1>
        <p className="text-lg text-slate-600 mt-2">Global Success</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {units.map((unit) => (
          <button
            key={unit.id}
            onClick={() => onSelectUnit(unit)}
            className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            <div className="flex items-center mb-3">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-3 mr-4">
                <BookOpenIcon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">{unit.title}</h2>
                <p className="text-sm text-slate-500 group-hover:text-indigo-600 transition-colors">{unit.subtitle}</p>
              </div>
            </div>
            <p className="text-slate-600 text-sm">
              Learn about {unit.subtitle.toLowerCase()}. Includes theory and interactive exercises.
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnitList;


import React from 'react';
import { TheorySection, Unit } from '../types';
import { ArrowLeftIcon } from './icons';

interface TheoryViewProps {
  unit: Unit;
  onBack: () => void;
  onStartExercise: () => void;
}

const Section: React.FC<{ section: TheorySection }> = ({ section }) => (
  <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
    <h3 className="text-2xl font-bold text-indigo-700 mb-4 border-b-2 border-indigo-200 pb-2">{section.title}</h3>
    {section.definition && <p className="text-slate-700 mb-4">{section.definition}</p>}
    {section.usage && (
      <>
        <h4 className="font-semibold text-slate-800 mb-2">Cách sử dụng:</h4>
        <ul className="list-disc list-inside space-y-2 mb-4 pl-4 text-slate-700">
          {section.usage.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </>
    )}
    {section.structure && (
      <>
        <h4 className="font-semibold text-slate-800 mb-2">Cấu trúc câu:</h4>
        <div className="space-y-4">
          {section.structure.map((s, index) => (
            <div key={index} className="p-4 bg-slate-50 rounded-md border border-slate-200">
              <p className="font-semibold text-slate-700">{s.title}:</p>
              <p className="font-mono bg-slate-200 text-slate-800 px-2 py-1 rounded-md my-2 inline-block">{s.format}</p>
              {s.note && <p className="text-sm text-slate-500 italic mb-2">Note: {s.note}</p>}
              <p className="text-slate-600"><span className="font-semibold">Ví dụ:</span> {s.example}</p>
            </div>
          ))}
        </div>
      </>
    )}
    {section.characteristics && (
         <>
            <h4 className="font-semibold text-slate-800 mb-2">Đặc điểm:</h4>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-4 text-slate-700">
                {section.characteristics.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )}
    {section.types && (
         <>
            <h4 className="font-semibold text-slate-800 mb-2">Các loại động từ thông dụng:</h4>
            <div className="space-y-4">
                {section.types.map((t, index) => (
                    <div key={index} className="p-3 bg-slate-50 rounded-md">
                        <p className="font-semibold text-slate-700">{t.title}</p>
                        <p className="text-slate-600"><span className="font-semibold">Ví dụ:</span> {t.example}</p>
                    </div>
                ))}
            </div>
        </>
    )}
    {section.note && <p className="text-sm text-slate-600 mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-md"><strong>Lưu ý:</strong> {section.note}</p>}
    {section.examples && (
         <div className="mt-4 space-y-3">
             {section.examples.map((ex, index) => (
                 <div key={index} className="p-3 bg-indigo-50 rounded-md border-l-4 border-indigo-300">
                     <p className="text-slate-700">{ex.text}</p>
                     {ex.explanation && <p className="text-sm text-indigo-800 mt-1">&rarr; {ex.explanation}</p>}
                 </div>
             ))}
         </div>
     )}
    {section.comparisonTable && (
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-slate-200 rounded-lg">
          <thead className="bg-slate-100">
            <tr>
              {section.comparisonTable.headers.map((header, index) => (
                <th key={index} className="py-2 px-4 border-b text-left text-sm font-semibold text-slate-600 uppercase tracking-wider">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.comparisonTable.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-slate-50">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-3 px-4 border-b border-slate-200 text-slate-700 align-top text-sm">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

export const TheoryView: React.FC<TheoryViewProps> = ({ unit, onBack, onStartExercise }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onBack} className="flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Units
        </button>
        <button onClick={onStartExercise} className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
          Start Exercises
        </button>
      </div>
      <header className="text-center mb-8 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-slate-800">{unit.title}</h1>
        <p className="text-xl text-slate-600 mt-1">{unit.subtitle}</p>
      </header>
      <div>
        {unit.theory.map((section, index) => <Section key={index} section={section} />)}
      </div>
    </div>
  );
};

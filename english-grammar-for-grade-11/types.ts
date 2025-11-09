
export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface ComparisonTable {
  headers: string[];
  rows: string[][];
}

export interface TheorySection {
  title: string;
  definition?: string;
  usage?: string[];
  structure?: { title: string; format: string; note?: string; example: string }[];
  characteristics?: string[];
  types?: { title: string; example: string }[];
  note?: string;
  comparisonTable?: ComparisonTable;
  examples?: { text: string; explanation?: string }[];
}

export interface Unit {
  id: string;
  title: string;
  subtitle: string;
  theory: TheorySection[];
  exercises: Question[];
}

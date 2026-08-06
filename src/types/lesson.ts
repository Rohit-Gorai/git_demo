export type LessonSection = {
  heading: string;
  body: string;
};

export type QuizQuestion = {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type SandboxSeed = {
  instructions: string;
  cells: string[][];
  expectedFormula?: string;
};

export type Lesson = {
  slug: string;
  title: string;
  module: string;
  estimatedTime: string;
  prerequisites: string[];
  objectives: string[];
  explanation: string;
  diagram: string;
  formula: string;
  example: string;
  companyExample: string;
  excelExample: string;
  sandbox: SandboxSeed;
  mistakes: string[];
  interviewQuestions: string[];
  practiceQuestions: string[];
  quiz: QuizQuestion[];
  takeaways: string[];
  nextLesson?: string;
};

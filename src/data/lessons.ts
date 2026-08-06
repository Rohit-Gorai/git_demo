import type { Lesson } from '../types/lesson';

const quiz = (answer: string) => [
  { prompt: 'What is the main idea of this lesson?', options: ['Memorize jargon', answer, 'Ignore examples', 'Skip practice'], answer, explanation: 'Finance is easiest when each concept is tied to a plain-English business decision.' },
  { prompt: 'What should you do after reading?', options: ['Practice in the sandbox', 'Close the page', 'Avoid Excel', 'Guess formulas'], answer: 'Practice in the sandbox', explanation: 'Interactive practice turns passive reading into durable skill.' }
];

const makeLesson = (slug: string, title: string, module: string, formula: string, nextLesson?: string): Lesson => ({
  slug, title, module, estimatedTime: '12 minutes', prerequisites: ['Basic arithmetic', 'Curiosity about how businesses work'],
  objectives: [`Explain ${title} in plain English`, 'Connect the idea to a real business', 'Practice the concept in a spreadsheet-style sandbox'],
  explanation: `${title} is a building block of finance. Imagine a lemonade stand: we start with simple money coming in, money going out, and decisions that make the stand stronger. Then we use the same logic for real companies.`,
  diagram: `Business activity → Financial concept → Spreadsheet model → Better decision`,
  formula,
  example: 'If a lemonade stand sells 100 glasses at ₹20 each, the first question is what happened economically and how we record it clearly.',
  companyExample: 'A public company reports the same idea at larger scale, using consistent accounting labels so investors can compare performance over time.',
  excelExample: `Set up drivers in rows, write ${formula || 'a simple formula'}, and separate assumptions from outputs.`,
  sandbox: { instructions: `Use the grid to practice ${title}. Type a formula in the highlighted answer cell.`, cells: [['Driver', 'Value'], ['Units', '100'], ['Price', '20'], ['Answer', '']], expectedFormula: formula },
  mistakes: ['Memorizing the formula without understanding the business story', 'Mixing inputs and outputs in one place', 'Forgetting to label units and time periods'],
  interviewQuestions: [`Explain ${title} to a beginner.`, `How would ${title} appear in a simple model?`],
  practiceQuestions: ['Build a three-line example using your own assumptions.', 'Change one driver and explain why the output changes.'],
  quiz: quiz(`Understand ${title} through examples and practice`),
  takeaways: [`${title} is easier when connected to a real transaction.`, 'Good models separate assumptions, calculations, and outputs.', 'Practice beats memorization.'],
  nextLesson
});

export const lessons: Lesson[] = [
  makeLesson('what-is-finance', 'What is Finance', 'Introduction', 'Value today + decisions about risk and return', 'time-value-of-money'),
  makeLesson('time-value-of-money', 'Time Value of Money', 'Introduction', 'Future Value = Present Value × (1 + Rate)^Periods', 'income-statement'),
  makeLesson('income-statement', 'Income Statement Basics', 'Financial Statements', 'Revenue - Expenses = Net Income', 'balance-sheet'),
  makeLesson('balance-sheet', 'Balance Sheet Basics', 'Financial Statements', 'Assets = Liabilities + Equity', 'cash-flow-statement'),
  makeLesson('cash-flow-statement', 'Cash Flow Basics', 'Financial Statements', 'Beginning Cash + Cash Inflows - Cash Outflows = Ending Cash', 'excel-basics'),
  makeLesson('excel-basics', 'Excel Basics', 'Financial Modeling', '=A1+B1', 'sum'),
  makeLesson('sum', 'SUM', 'Excel', '=SUM(B2:B3)', 'if'),
  makeLesson('if', 'IF', 'Excel', '=IF(B2>100,"High","Low")', 'xlookup'),
  makeLesson('xlookup', 'XLOOKUP', 'Excel', '=XLOOKUP(lookup_value, lookup_array, return_array)', 'revenue'),
  makeLesson('revenue', 'Revenue', 'Financial Statements', 'Revenue = Price × Quantity', 'gross-profit'),
  makeLesson('gross-profit', 'Gross Profit', 'Financial Statements', 'Gross Profit = Revenue - COGS', 'ebitda'),
  makeLesson('ebitda', 'EBITDA', 'Financial Statements', 'EBITDA = EBIT + D&A', 'working-capital'),
  makeLesson('working-capital', 'Working Capital', 'Financial Statements', 'Working Capital = Current Assets - Current Liabilities', 'forecasting'),
  makeLesson('forecasting', 'Forecasting', 'Financial Modeling', 'Next Year = Current Year × (1 + Growth Rate)', 'dcf'),
  makeLesson('dcf', 'Discounted Cash Flow', 'Valuation', 'PV = Cash Flow / (1 + Discount Rate)^Year')
];

export const findLesson = (slug: string) => lessons.find((lesson) => lesson.slug === slug);

export const findLessonByTitle = (title: string) =>
  lessons.find((lesson) => lesson.title === title || lesson.title.replace(' Basics', '') === title);

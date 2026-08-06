export type NavSection = { title: string; lessons: string[] };

export const curriculum: NavSection[] = [
  { title: 'Introduction', lessons: ['What is Finance', 'History of Finance', 'Types of Finance', 'Financial Markets', 'Time Value of Money', 'Risk', 'Inflation', 'Interest Rates'] },
  { title: 'Financial Statements', lessons: ['Income Statement', 'Revenue', 'COGS', 'Gross Profit', 'Operating Expenses', 'EBITDA', 'EBIT', 'Taxes', 'Net Income', 'EPS', 'Cash Flow Statement', 'Operating Activities', 'Investing Activities', 'Financing Activities', 'Balance Sheet', 'Assets', 'Liabilities', 'Equity', 'Working Capital', 'Linking Statements'] },
  { title: 'Financial Modeling', lessons: ['Introduction', 'Excel Basics', 'Formatting', 'Model Structure', 'Forecasting', 'Revenue Forecast', 'Expense Forecast', 'Depreciation', 'Working Capital', 'Debt Schedule', 'Circular References', 'Three Statement Model', 'Sensitivity Analysis'] },
  { title: 'Valuation', lessons: ['Book Value', 'Market Value', 'Enterprise Value', 'Equity Value', 'Comparable Companies', 'Precedent Transactions', 'Discounted Cash Flow', 'WACC', 'CAPM', 'Beta', 'Terminal Value', 'Football Field'] },
  { title: 'Excel', lessons: ['Interface', 'Cell References', 'Named Ranges', 'Tables', 'Charts', 'Conditional Formatting', 'Data Validation', 'SUM', 'AVERAGE', 'COUNT', 'IF', 'IFS', 'AND', 'OR', 'INDEX', 'MATCH', 'INDEX MATCH', 'XLOOKUP', 'VLOOKUP', 'SUMIFS', 'COUNTIFS', 'FILTER', 'SORT', 'UNIQUE', 'TEXT', 'DATE', 'PMT', 'NPV', 'IRR', 'XIRR'] },
  { title: 'Projects', lessons: ['Amazon Model', 'Apple Model', 'Tesla Model', 'Reliance', 'Microsoft', 'NVIDIA'] },
  { title: 'Interviews', lessons: ['Investment Banking', 'Private Equity', 'Equity Research', 'FP&A', 'Corporate Finance'] },
  { title: 'Practice', lessons: ['Exercises', 'Assignments', 'Mini Projects', 'Case Studies'] },
  { title: 'Quizzes', lessons: ['Certificates'] }
];

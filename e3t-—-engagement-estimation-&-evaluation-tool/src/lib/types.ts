import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface RateCardItem {
  code: string;
  title: string;
  category: string;
  list: number;
  cost: number;
}

export interface Resource {
  id: string;
  name: string;
  code: string;
  effort: (number | null)[];
  perDiem?: number;
  travel?: number;
  stay?: number;
  cola?: number;
}

export interface ProjectConfig {
  customerName: string;
  projectName: string;
  projectId: string;
  contractType: string; // Fixed Price (FP), Time & Materials (T&M), Amortized, etc.
  currency: string;      // Legacy field, matching baseCurrency
  costCurrency: string;
  sellCurrency: string;
  startDate: string;
  duration: number;
  hoursPerMonth: number;
  riskReserve: number;
  globalDiscount: number;
  globalAllowance: number;
  background?: string;
  solution?: string;
  approver1?: string;
  approver2?: string;
  isApproved1?: boolean;
  isApproved2?: boolean;
}

export interface ForexRate {
  code: string;
  name: string;
  rate: number;
  updated?: string;
  isAuto?: boolean;
}

export interface ExpenseItem {
  id: string;
  description: string;
  category: 'Software' | 'Cloud' | '3rd Party' | 'Other';
  cost: number;
  sell: number;
  date: string;
}

export interface ProjectAttachment {
  id: string;
  name: string;
  type: string;
  size: number;
  data: string; // Base64 or reference
  uploadedAt: string;
}

export interface AppState {
  config: ProjectConfig;
  resources: Resource[];
  visibleMonths: number;
  rateCard: RateCardItem[];
  forex: ForexRate[];
  expenses: ExpenseItem[];
  attachments: ProjectAttachment[];
  selectedForex: string;
  displayCurrency: string;
  secondaryCurrency: string;
}

export const DEFAULT_CONFIG: ProjectConfig = {
  customerName: 'Affin Bank',
  projectName: 'Data Lake & EDW Implementation',
  projectId: 'OPX-0020000290',
  contractType: 'Fixed Price (FP)',
  currency: 'MYR',
  costCurrency: 'MYR',
  sellCurrency: 'MYR',
  startDate: '2024-01-01',
  duration: 60,
  hoursPerMonth: 146,
  riskReserve: 0.05,
  globalDiscount: 0.00,
  globalAllowance: 0.0866,
};

export const INITIAL_RATE_CARD: RateCardItem[] = [
  { code: '00S36F', title: 'Technology Consultant I',    category: 'Technology',   list: 90.10,  cost: 41.50 },
  { code: '00S36G', title: 'Technology Consultant II',   category: 'Technology',   list: 137.80, cost: 70.17 },
  { code: '00S36H', title: 'Technology Consultant III',  category: 'Technology',   list: 180.20, cost: 99.95 },
  { code: '00S36I', title: 'Technology Consultant IV',   category: 'Technology',   list: 302.10, cost: 155.22 },
  { code: '00S36J', title: 'Technology Consultant V',    category: 'Technology',   list: 371.00, cost: 213.57 },
  { code: '00S44F', title: 'Business Consulting I',      category: 'Consulting',   list: 90.10,  cost: 41.50 },
  { code: '00S44G', title: 'Business Consulting II',     category: 'Consulting',   list: 137.80, cost: 70.17 },
  { code: '00S44H', title: 'Business Consulting III',    category: 'Consulting',   list: 180.20, cost: 99.95 },
  { code: '00S44I', title: 'Business Consulting IV',     category: 'Consulting',   list: 302.10, cost: 155.22 },
  { code: '00S44J', title: 'Business Consulting V',      category: 'Consulting',   list: 371.00, cost: 213.57 },
  { code: '00S44K', title: 'Business Consulting VI',     category: 'Consulting',   list: 450.50, cost: 214.58 },
  { code: '00S46F', title: 'Svc Info Developer I',       category: 'Development',  list: 90.10,  cost: 41.50 },
  { code: '00S46G', title: 'Svc Info Developer II',      category: 'Development',  list: 137.80, cost: 70.17 },
  { code: '00S46H', title: 'Svc Info Developer III',     category: 'Development',  list: 180.20, cost: 99.95 },
  { code: '00S46I', title: 'Svc Info Developer IV',      category: 'Development',  list: 302.10, cost: 155.22 },
  { code: '00S46J', title: 'Svc Info Developer V',       category: 'Development',  list: 371.00, cost: 213.57 },
  { code: '00S37H', title: 'Info Systems Architect III', category: 'Architecture', list: 192.81, cost: 99.95 },
];

export const INITIAL_FOREX: ForexRate[] = [
  { code: 'MYR', name: 'Malaysian Ringgit', rate: 1.0000 },
  { code: 'USD', name: 'US Dollar',         rate: 0.2245 },
  { code: 'SGD', name: 'Singapore Dollar',  rate: 0.3010 },
  { code: 'GBP', name: 'British Pound',     rate: 0.1785 },
  { code: 'EUR', name: 'Euro',              rate: 0.2085 },
];

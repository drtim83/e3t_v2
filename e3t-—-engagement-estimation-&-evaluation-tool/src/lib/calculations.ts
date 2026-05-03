import { ProjectConfig, RateCardItem, Resource, ForexRate } from './types';

export function getMonthLabel(startDate: string, offset: number) {
  const d = new Date(startDate);
  d.setMonth(d.getMonth() + offset);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[d.getMonth()]}-${String(d.getFullYear()).slice(-2)}`;
}

export function calcResource(r: Resource, config: ProjectConfig, rateCard: RateCardItem[]) {
  const rate = rateCard.find(item => item.code === r.code);
  if (!rate) {
    return {
      name: r.name || '-',
      title: '',
      category: '',
      list: 0,
      cost: 0,
      sell: 0,
      disc: 0,
      allow: 0,
      marginPct: 0,
      totalPM: 0,
      totalHours: 0,
      revenue: 0,
      costTotal: 0,
      margin: 0
    };
  }

  const disc = config.globalDiscount;
  const allow = config.globalAllowance;
  const sell = rate.list * (1 - disc) * (1 + allow);

  const totalPM = r.effort.reduce((sum, v) => sum + (v || 0), 0);
  const totalHours = totalPM * config.hoursPerMonth;
  const baseRevenue = totalHours * sell;
  
  // Extra costs (Per Diem, Travel, Stay, COLA)
  const extraCostTotal = (r.perDiem || 0) + (r.travel || 0) + (r.stay || 0) + (r.cola || 0);
  
  const revenue = baseRevenue; // Usually extra costs are part of the allowance or billed separately, but for simple P&L we'll assume sell price is static
  const costTotal = (totalHours * rate.cost) + extraCostTotal;
  const margin = revenue - costTotal;
  const marginPct = revenue > 0 ? margin / revenue : 0;

  return {
    name: r.name || '-',
    title: rate.title,
    category: rate.category,
    list: rate.list,
    cost: rate.cost,
    extraCost: extraCostTotal,
    sell: sell,
    disc,
    allow,
    marginPct,
    totalPM,
    totalHours,
    revenue,
    costTotal,
    margin,
  };
}

export function formatCurrency(n: number, code: string = 'MYR', rate: number = 1) {
  if (n === null || isNaN(n) || n === 0) return '-';
  const val = n * rate;
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: code === 'MYR' ? 0 : 2,
    maximumFractionDigits: code === 'MYR' ? 0 : 2,
  }).format(val);
}

export function formatPM(n: number) {
  if (n === null || isNaN(n) || n === 0) return '-';
  return n.toFixed(1);
}

export function formatPercent(n: number) {
  if (n === null || isNaN(n)) return '-';
  return (n * 100).toFixed(1) + '%';
}

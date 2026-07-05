import type { UpgradeCost } from '@shared/types/upgrade';

export function formatNumber(num: number): string {
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
}

export function formatCost(cost: UpgradeCost): string {
  return Object.entries(cost)
    .map(([r, v]) => `${r}:${v}`)
    .join(' ');
}

export function formatEffects(effects: Record<string, unknown> | undefined): string {
  if (!effects || Object.keys(effects).length === 0) return 'No resource changes';
  const parts: string[] = [];
  for (const [res, val] of Object.entries(effects)) {
    if (Array.isArray(val)) parts.push(`${res}: ${(val as number[])[0]}-${(val as number[])[1]}`);
    else if (typeof val === 'number' && val > 0) parts.push(`${res}: +${val}`);
    else if (typeof val === 'number' && val < 0) parts.push(`${res}: ${val}`);
  }
  return parts.join(' | ') || 'Special effect';
}

export function getTimeOfDay(day: number): string {
  if (day % 3 === 0) return 'Dusk';
  if (day % 3 === 1) return 'Dawn';
  return 'Noon';
}
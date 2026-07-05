import type { Resources } from '@shared/types/gameState';

export function calculateFoodConsumption(hasCompanion: boolean): number {
  return 10 + (hasCompanion ? 3 : 0);
}

export function calculateWaterConsumption(hasCompanion: boolean): number {
  return 12 + (hasCompanion ? 2 : 0);
}

export function applyResourceModifier(
  resource: string,
  amount: number,
  upgrades: string[]
): number {
  let mod = amount;
  if (amount > 0) {
    if (upgrades.includes('upg_scavenging') && ['scrap', 'metal', 'electronics', 'cloth'].includes(resource))
      mod = Math.floor(mod * 1.25);
    if (upgrades.includes('upg_hunting') && resource === 'food')
      mod = Math.floor(mod * 1.3);
    if (upgrades.includes('upg_backpack') && amount > 3)
      mod = Math.floor(mod * 1.2);
    if (upgrades.includes('upg_trading') && ['scrap', 'ammo', 'medicine'].includes(resource))
      mod = Math.floor(mod * 1.2);
  }
  if (amount < 0 && upgrades.includes('upg_crafting_speed') && ['scrap', 'metal', 'wood'].includes(resource))
    mod = Math.ceil(mod * 0.85);
  return mod;
}

export function hasEnoughResources(resources: Resources, cost: Record<string, number>): boolean {
  return Object.entries(cost).every(([r, v]) => (resources[r as keyof Resources] || 0) >= v);
}
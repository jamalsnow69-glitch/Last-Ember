import type { UpgradeDefinition } from '@shared/types/upgrade';

export const factionUpgrades: Record<string, UpgradeDefinition> = {
  upg_warden_training: {
    name: 'Warden Training',
    cost: { scrap: 12, ammo: 4 },
    desc: '+5 max health, +1 ammo/day.',
    category: 'faction',
    tier: 2,
    requiresFaction: 'wardens',
  },
  upg_freefolk_wisdom: {
    name: 'Freefolk Herbalism',
    cost: { medicine: 4, food: 6 },
    desc: '+1 medicine/day.',
    category: 'faction',
    tier: 2,
    requiresFaction: 'freefolk',
  },
  upg_remnant_arsenal: {
    name: 'Remnant Arsenal',
    cost: { metal: 10, ammo: 6 },
    desc: '+2 ammo/day.',
    category: 'faction',
    tier: 2,
    requiresFaction: 'remnant',
  },
};
export interface UpgradeCost {
  [resource: string]: number;
}

export type UpgradeCategory = 'base' | 'player' | 'faction';

export interface UpgradeDefinition {
  name: string;
  cost: UpgradeCost;
  desc: string;
  category: UpgradeCategory;
  tier: number;
  unlocks?: string[];
  requires?: string[];
  requiresFaction?: string;
}
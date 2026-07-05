import { baseUpgrades } from './base';
import { playerUpgrades } from './player';
import { factionUpgrades } from './faction';
import { advancedUpgrades } from './advanced';
import type { UpgradeDefinition } from '@shared/types/upgrade';

export const allUpgrades: Record<string, UpgradeDefinition> = {
  ...baseUpgrades,
  ...playerUpgrades,
  ...factionUpgrades,
  ...advancedUpgrades,
};
import { mainStoryLore } from './mainStory';
import { ancientSecretsLore } from './ancientSecrets';
import { survivorTalesLore } from './survivorTales';
import { factionHistoryLore } from './factionHistory';
import type { LoreEntryDefinition } from '@shared/types/lore';

export const allLore: Record<string, LoreEntryDefinition> = {
  ...mainStoryLore,
  ...ancientSecretsLore,
  ...survivorTalesLore,
  ...factionHistoryLore,
};
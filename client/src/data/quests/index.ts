import { mainStoryQuests } from './mainStory';
import { factionQuests } from './factionQuests';
import { explorationQuests } from './explorationQuests';
import { discoveryQuests } from './discoveryQuests';
import type { QuestDefinition } from '@shared/types/quest';

export const allQuests: Record<string, QuestDefinition> = {
  ...mainStoryQuests,
  ...factionQuests,
  ...explorationQuests,
  ...discoveryQuests,
};
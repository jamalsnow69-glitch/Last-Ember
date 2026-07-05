import type { QuestDefinition } from '@shared/types/quest';

export const explorationQuests: Record<string, QuestDefinition> = {
  quest_lights_mystery: {
    name: 'Mystery of the Lights',
    stages: [
      {
        desc: 'Travel toward the lights.',
        requiresFlag: 'saw_lights',
        reward: { fuel: 4, scrap: 6 },
        completeFlag: 'lights_investigated',
      },
      {
        desc: 'Discover the cause.',
        requiresFlag: 'lights_investigated',
        reward: { electronics: 8, ammo: 5 },
        completeFlag: 'lights_solved',
        loreEntry: 'lights_truth',
      },
    ],
    currentStage: 0,
    completed: false,
  },
};
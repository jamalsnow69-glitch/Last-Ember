import type { QuestDefinition } from '@shared/types/quest';

export const factionQuests: Record<string, QuestDefinition> = {
  quest_radio_mystery: {
    name: 'Radio Mystery',
    stages: [
      {
        desc: 'Pinpoint the signal source.',
        requiresFlag: 'followed_signal',
        reward: { electronics: 4 },
        completeFlag: 'signal_located',
      },
      {
        desc: 'Investigate the source.',
        requiresFlag: 'signal_located',
        reward: { scrap: 8, ammo: 4 },
        completeFlag: 'signal_investigated',
      },
    ],
    currentStage: 0,
    completed: false,
  },
};
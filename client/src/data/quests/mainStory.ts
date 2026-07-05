import type { QuestDefinition } from '@shared/types/quest';

export const mainStoryQuests: Record<string, QuestDefinition> = {
  quest_bunker_secrets: {
    name: 'Bunker Secrets',
    stages: [
      {
        desc: 'Gain entry to the hidden bunker.',
        requiresFlag: 'found_bunker',
        reward: { scrap: 10, electronics: 5 },
        completeFlag: 'bunker_entered',
      },
      {
        desc: 'Explore the bunker interior.',
        requiresFlag: 'bunker_entered',
        reward: { ammo: 6, medicine: 4 },
        completeFlag: 'bunker_explored',
      },
      {
        desc: 'Find the command center.',
        requiresFlag: 'bunker_explored',
        requiresResources: { scrap: 15 },
        reward: { electronics: 8, scrap: 12 },
        completeFlag: 'bunker_command_found',
        loreEntry: 'bunker_logs',
      },
    ],
    currentStage: 0,
    completed: false,
  },
  quest_artifact_truth: {
    name: 'Truth of the Artifact',
    stages: [
      {
        desc: 'Find someone to analyze the artifact.',
        requiresFlag: 'found_artifact',
        reward: { scrap: 8 },
        completeFlag: 'artifact_analyzed',
      },
      {
        desc: "Follow the artifact's origin.",
        requiresFlag: 'artifact_analyzed',
        requiresResources: { electronics: 10 },
        reward: { electronics: 12, scrap: 10 },
        completeFlag: 'artifact_origin_found',
        loreEntry: 'artifact_truth',
      },
    ],
    currentStage: 0,
    completed: false,
  },
};
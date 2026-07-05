import type { QuestDefinition } from '@shared/types/quest';

export const discoveryQuests: Record<string, QuestDefinition> = {
  quest_vault: {
    name: 'The Vault of Ancients',
    stages: [
      {
        desc: 'Locate the vault entrance.',
        requiresFlag: 'vault_opened',
        reward: { electronics: 10, scrap: 15 },
        completeFlag: 'vault_entered',
      },
      {
        desc: 'Solve the puzzle.',
        requiresFlag: 'vault_entered',
        requiresResources: { electronics: 15 },
        reward: { scrap: 25, metal: 15 },
        completeFlag: 'vault_solved',
        loreEntry: 'vault_logs',
      },
    ],
    currentStage: 0,
    completed: false,
  },
  quest_obelisk: {
    name: 'The Singing Obelisk',
    stages: [
      {
        desc: 'Investigate the obelisk.',
        requiresFlag: 'obelisk_found',
        reward: { electronics: 8 },
        completeFlag: 'obelisk_studied',
      },
      {
        desc: 'Decode the humming.',
        requiresFlag: 'obelisk_studied',
        requiresResources: { electronics: 12 },
        reward: { scrap: 20 },
        completeFlag: 'obelisk_decoded',
        loreEntry: 'obelisk_log',
      },
    ],
    currentStage: 0,
    completed: false,
  },
  quest_portal: {
    name: 'A Glimpse Beyond',
    stages: [
      {
        desc: 'Stabilise the portal.',
        requiresFlag: 'portal_seen',
        reward: { electronics: 10, scrap: 10 },
        completeFlag: 'portal_stabilised',
      },
      {
        desc: 'Close the rift.',
        requiresFlag: 'portal_stabilised',
        requiresResources: { electronics: 20, scrap: 20 },
        reward: { scrap: 30, medicine: 15 },
        completeFlag: 'portal_closed',
      },
    ],
    currentStage: 0,
    completed: false,
  },
};
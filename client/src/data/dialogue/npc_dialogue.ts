import type { NPCDefinition } from '@shared/types/dialogue';

export const npcDefinitions: Record<string, NPCDefinition> = {
  survivor_marcus: {
    name: 'Marcus',
    faction: 'freefolk',
    dialogue: {
      greeting: 'Hey there, survivor. Stay safe out here.',
    },
  },
  wounded_elena: {
    name: 'Elena',
    faction: 'wardens',
    dialogue: {
      greeting: 'Thank you… I thought I was done for.',
    },
  },
};
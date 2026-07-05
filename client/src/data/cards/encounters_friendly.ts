import type { CardDefinition } from '@shared/types/card';

export const friendlyEncounterCards: CardDefinition[] = [
  {
    id: 'friendly_survivor',
    name: 'Meet Friendly Survivor',
    icon: '👋',
    rarity: 'uncommon',
    category: 'encounter',
    desc: 'A fellow survivor offers to share information.',
    effects: { food: [2, 5] },
    tags: ['encounter', 'npc'],
    npcEncounter: 'survivor_marcus',
    storyFlag: 'met_marcus',
  },
  {
    id: 'wounded_traveler',
    name: 'Help Wounded Traveler',
    icon: '🩹',
    rarity: 'uncommon',
    category: 'encounter',
    desc: 'Someone is injured and needs help.',
    effects: { medicine: -2 },
    tags: ['encounter', 'npc', 'moral'],
    moralChoice: true,
    npcEncounter: 'wounded_elena',
    storyFlag: 'helped_elena',
  },
];
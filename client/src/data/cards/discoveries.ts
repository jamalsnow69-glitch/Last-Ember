import type { CardDefinition } from '@shared/types/card';

export const discoveryCards: CardDefinition[] = [
  {
    id: 'weapons_cache',
    name: 'Find Weapons Cache',
    icon: '💣',
    rarity: 'epic',
    category: 'discovery',
    desc: 'A hidden stash of military-grade weapons.',
    effects: { ammo: [8, 16], metal: [4, 8] },
    tags: ['discovery'],
    storyFlag: 'found_weapons_cache',
  },
  {
    id: 'working_vehicle',
    name: 'Find Working Vehicle',
    icon: '🏍️',
    rarity: 'epic',
    category: 'discovery',
    desc: 'An old motorcycle that still runs.',
    effects: { fuel: [4, 10], scrap: [3, 8] },
    tags: ['discovery'],
    storyFlag: 'found_vehicle',
  },
];
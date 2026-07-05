import type { CardDefinition } from '@shared/types/card';

export const hostileEncounterCards: CardDefinition[] = [
  {
    id: 'bandit_ambush',
    name: 'Bandit Ambush!',
    icon: '🔫',
    rarity: 'uncommon',
    category: 'encounter',
    desc: 'Armed raiders attack from cover!',
    effects: { ammo: -3, scrap: -4 },
    tags: ['encounter', 'hostile'],
    risk: { health: [8, 20] },
  },
  {
    id: 'suspicious_stranger',
    name: 'Suspicious Stranger',
    icon: '🕵️',
    rarity: 'uncommon',
    category: 'encounter',
    desc: 'Someone is watching your camp.',
    effects: {},
    tags: ['encounter', 'hostile'],
    risk: { health: [2, 8] },
    storyFlag: 'met_stranger',
  },
];
import type { CardDefinition } from '@shared/types/card';

export const moralDecisionCards: CardDefinition[] = [
  {
    id: 'share_supplies',
    name: 'Share Supplies with Strangers',
    icon: '🤲',
    rarity: 'uncommon',
    category: 'moral',
    desc: 'A group of survivors asks for help.',
    effects: { food: -8, water: -5 },
    tags: ['moral', 'npc'],
    moralChoice: true,
    storyFlag: 'shared_supplies',
  },
  {
    id: 'confront_thief',
    name: 'Confront a Thief',
    icon: '⚖️',
    rarity: 'uncommon',
    category: 'moral',
    desc: 'You catch someone stealing from your supplies.',
    effects: { scrap: [2, 6] },
    tags: ['moral', 'npc'],
    moralChoice: true,
    storyFlag: 'confronted_thief',
  },
];
import type { CardDefinition } from '@shared/types/card';

export const restRecoveryCards: CardDefinition[] = [
  {
    id: 'rest_day',
    name: 'Take a Rest Day',
    icon: '😴',
    rarity: 'common',
    category: 'rest',
    desc: 'Spend the day recovering your strength.',
    effects: { food: -3, water: -2 },
    tags: ['rest'],
    healEffect: [10, 20],
  },
  {
    id: 'tend_wounds',
    name: 'Tend to Wounds',
    icon: '🩺',
    rarity: 'common',
    category: 'rest',
    desc: 'Carefully treat your injuries.',
    effects: { medicine: -2 },
    tags: ['rest'],
    healEffect: [15, 25],
  },
];
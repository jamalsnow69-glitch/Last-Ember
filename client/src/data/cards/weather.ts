import type { CardDefinition } from '@shared/types/card';

export const weatherCards: CardDefinition[] = [
  {
    id: 'sunny_day',
    name: 'Clear Sunny Day',
    icon: '☀️',
    rarity: 'common',
    category: 'weather',
    desc: 'Perfect weather for outdoor activities.',
    effects: { water: -3 },
    tags: ['weather'],
    bonusEffect: 'gathering_boost',
  },
  {
    id: 'rainstorm',
    name: 'Heavy Rainstorm',
    icon: '⛈️',
    rarity: 'common',
    category: 'weather',
    desc: 'Torrential rain limits visibility.',
    effects: { water: [6, 12] },
    tags: ['weather'],
    penaltyEffect: 'movement_penalty',
  },
];
import type { CardDefinition } from '@shared/types/card';

export const tradingCards: CardDefinition[] = [
  {
    id: 'meet_merchant',
    name: 'Meet Traveling Merchant',
    icon: '🧳',
    rarity: 'uncommon',
    category: 'trading',
    desc: 'A wandering trader offers goods.',
    effects: { scrap: -5, medicine: [2, 5], ammo: [1, 3] },
    tags: ['trading', 'npc'],
  },
  {
    id: 'trade_settlement',
    name: 'Trade at Settlement',
    icon: '🏘️',
    rarity: 'uncommon',
    category: 'trading',
    desc: 'Visit a nearby settlement to trade.',
    effects: { food: -4, water: -3, scrap: [4, 10], metal: [2, 5] },
    tags: ['trading', 'npc'],
  },
];
import type { CardDefinition } from '@shared/types/card';

export const craftingCards: CardDefinition[] = [
  {
    id: 'craft_bandages',
    name: 'Craft Bandages',
    icon: '🩹',
    rarity: 'uncommon',
    category: 'crafting',
    desc: 'Turn cloth into medical bandages.',
    effects: { cloth: -3, medicine: [2, 5] },
    tags: ['crafting'],
  },
  {
    id: 'craft_ammo',
    name: 'Craft Ammunition',
    icon: '💥',
    rarity: 'rare',
    category: 'crafting',
    desc: 'Carefully reload spent casings.',
    effects: { metal: -3, scrap: -4, ammo: [4, 8] },
    tags: ['crafting'],
    requiresUpgrade: 'upg_workshop',
  },
];
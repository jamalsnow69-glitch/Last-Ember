import type { CardDefinition } from '@shared/types/card';

export const storyEventCards: CardDefinition[] = [
  {
    id: 'strange_lights',
    name: 'Strange Lights at Night',
    icon: '✨',
    rarity: 'rare',
    category: 'story',
    desc: 'Eerie lights flicker on the horizon.',
    effects: {},
    tags: ['story', 'mystery'],
    storyFlag: 'saw_lights',
    unlockQuest: 'quest_lights_mystery',
  },
  {
    id: 'military_convoy',
    name: 'Spot Military Convoy',
    icon: '🚛',
    rarity: 'rare',
    category: 'story',
    desc: 'A remnant military convoy passes nearby.',
    effects: { ammo: [2, 6], fuel: [2, 5] },
    tags: ['story', 'faction'],
    storyFlag: 'saw_convoy',
    factionRep: { remnant: 1 },
  },
];
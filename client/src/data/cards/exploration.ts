import type { CardDefinition } from '@shared/types/card';

export const explorationCards: CardDefinition[] = [
  {
    id: 'explore_ruins',
    name: 'Explore Ancient Ruins',
    icon: '🏛️',
    rarity: 'rare',
    category: 'exploration',
    desc: 'Pre-collapse ruins that might hold secrets.',
    effects: { electronics: [4, 10], scrap: [6, 14], stone: [3, 8] },
    tags: ['exploration'],
    storyFlag: 'visited_ruins',
  },
  {
    id: 'find_bunker',
    name: 'Discover Hidden Bunker',
    icon: '🚪',
    rarity: 'epic',
    category: 'exploration',
    desc: 'A concealed military bunker from before the fall.',
    effects: { ammo: [5, 12], medicine: [4, 10], electronics: [5, 12], metal: [4, 10] },
    tags: ['exploration', 'story'],
    storyFlag: 'found_bunker',
    unlockQuest: 'quest_bunker_secrets',
  },
];
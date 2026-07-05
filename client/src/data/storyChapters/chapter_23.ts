import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch23',
  name: 'Chapter 23: The Seed Vault',
  icon: '🌱',
  rarity: 'story',
  category: 'story',
  desc: 'A sealed vault contains genetic archives, star charts, and a final record of the first ember.',
  effects: { food: [3, 6] },
  storyFlag: 'story_ch23_done',
  loreEntry: 'seed_vault',
};

export default chapter;

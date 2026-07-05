import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch33',
  name: 'Chapter 33: The Last Refuge',
  icon: '🛸',
  rarity: 'story',
  category: 'story',
  desc: 'You reach a settlement that survived by sharing the last of its heat, water, and orbital backup power.',
  effects: { food: [3, 6] },
  storyFlag: 'story_ch33_done',
  loreEntry: 'last_refuge',
};

export default chapter;

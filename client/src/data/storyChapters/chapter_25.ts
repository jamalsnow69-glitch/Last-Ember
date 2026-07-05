import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch25',
  name: 'Chapter 25: The Orchard of Cinders',
  icon: '🌳',
  rarity: 'story',
  category: 'story',
  desc: 'Trees bloom from reactor cinders and cradle the remains of a civilization that once conquered orbit.',
  effects: { food: [4, 8] },
  storyFlag: 'story_ch25_done',
  loreEntry: 'orchard_cinders',
};

export default chapter;

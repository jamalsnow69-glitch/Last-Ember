import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch13',
  name: 'Chapter 13: The Lantern Keep',
  icon: '🔭',
  rarity: 'story',
  category: 'story',
  desc: 'A forgotten orbital keep still burns with pale reactor light, its guardian speaking in encrypted ritual.',
  effects: { fuel: [3, 6] },
  storyFlag: 'story_ch13_done',
  loreEntry: 'lantern_keep',
};

export default chapter;

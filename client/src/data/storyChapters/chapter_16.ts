import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch16',
  name: 'Chapter 16: The Last Map',
  icon: '🗺️',
  rarity: 'story',
  category: 'story',
  desc: 'A weathered star-map reveals a hidden route through the dead megacities to the source of the ember.',
  effects: { scrap: [4, 8] },
  storyFlag: 'story_ch16_done',
  loreEntry: 'last_map',
};

export default chapter;

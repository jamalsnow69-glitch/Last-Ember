import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch9',
  name: 'Chapter 9: Last Stand',
  icon: '🛡️',
  rarity: 'story',
  category: 'story',
  desc: 'You must defend the artifact from those who would misuse it.',
  effects: { ammo: [5, 10] },
  storyFlag: 'story_ch9_done',
  risk: { health: [10, 20] },
};

export default chapter;
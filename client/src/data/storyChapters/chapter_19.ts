import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch19',
  name: 'Chapter 19: The Furnace Gates',
  icon: '⚙️',
  rarity: 'story',
  category: 'story',
  desc: 'The gates of an old reactor complex stand open, each hinge fused with heat and ancient automation.',
  effects: { fuel: [5, 10] },
  storyFlag: 'story_ch19_done',
  unlockQuest: 'quest_furnace_gates',
};

export default chapter;

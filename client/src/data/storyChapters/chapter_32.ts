import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch32',
  name: 'Chapter 32: The Iron Garden',
  icon: '🌾',
  rarity: 'story',
  category: 'story',
  desc: 'A garden of iron vines grows around the heart of a decommissioned power station.',
  effects: { metal: [4, 8] },
  storyFlag: 'story_ch32_done',
  unlockQuest: 'quest_iron_garden',
};

export default chapter;

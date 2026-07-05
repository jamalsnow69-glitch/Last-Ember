import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch8',
  name: 'Chapter 8: The Portal',
  icon: '🌀',
  rarity: 'story',
  category: 'story',
  desc: 'The artifact activates, opening a rift. Something is coming through.',
  effects: { electronics: [10, 20] },
  storyFlag: 'story_ch8_done',
  unlockQuest: 'quest_portal',
};

export default chapter;
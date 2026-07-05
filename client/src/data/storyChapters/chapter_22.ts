import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch22',
  name: 'Chapter 22: The Quiet Archive',
  icon: '🧠',
  rarity: 'story',
  category: 'story',
  desc: 'You enter a machine archive where the dead left their final instructions in neural echoes.',
  effects: { electronics: [4, 8] },
  storyFlag: 'story_ch22_done',
  unlockQuest: 'quest_quiet_archive',
};

export default chapter;

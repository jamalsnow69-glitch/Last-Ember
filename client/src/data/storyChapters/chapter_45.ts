import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch45',
  name: 'Chapter 45: The Second Sunrise',
  icon: '🌄',
  rarity: 'story',
  category: 'story',
  desc: 'As the second sunrise rises over the megacity, the survivors begin to rebuild with purpose rather than fear.',
  effects: { wood: [4, 8] },
  storyFlag: 'story_ch45_done',
  unlockQuest: 'quest_second_sunrise',
};

export default chapter;

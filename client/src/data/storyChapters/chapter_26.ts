import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch26',
  name: 'Chapter 26: The Risen Tide',
  icon: '🌊',
  rarity: 'story',
  category: 'story',
  desc: 'The sea rises under a storm of ionized ash, carrying broken towers and a warning from the deep.',
  effects: { water: [4, 8] },
  storyFlag: 'story_ch26_done',
  unlockQuest: 'quest_risen_tide',
};

export default chapter;

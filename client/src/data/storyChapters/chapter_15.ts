import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch15',
  name: 'Chapter 15: Salt and Smoke',
  icon: '🧪',
  rarity: 'story',
  category: 'story',
  desc: 'The coast is veiled in salt haze and reactor smoke, where a dead lighthouse still pulses with failing signal.',
  effects: { water: [4, 8] },
  storyFlag: 'story_ch15_done',
  unlockQuest: 'quest_lighthouse',
};

export default chapter;

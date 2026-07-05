import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch2',
  name: 'Chapter 2: Echoes',
  icon: '📡',
  rarity: 'story',
  category: 'story',
  desc: 'A faint radio signal crackles to life. Someone is out there, repeating coordinates.',
  effects: { electronics: [3, 6] },
  storyFlag: 'story_ch2_done',
  unlockQuest: 'quest_radio_mystery',
};

export default chapter;
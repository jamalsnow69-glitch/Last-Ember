import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch12',
  name: 'Chapter 12: The Ashen Road',
  icon: '🛰️',
  rarity: 'story',
  category: 'story',
  desc: 'The wasteland opens into a corridor of blackened ferrocrete, a dead highway still humming with buried machine intelligence.',
  effects: { stone: [4, 8] },
  storyFlag: 'story_ch12_done',
  unlockQuest: 'quest_ashen_road',
};

export default chapter;

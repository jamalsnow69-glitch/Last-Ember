import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch41',
  name: 'Chapter 41: The Last Harbor',
  icon: '⚓',
  rarity: 'story',
  category: 'story',
  desc: 'Old orbital barges return to a harbor that once served as a gateway between planets.',
  effects: { water: [3, 6] },
  storyFlag: 'story_ch41_done',
  unlockQuest: 'quest_last_harbor',
};

export default chapter;

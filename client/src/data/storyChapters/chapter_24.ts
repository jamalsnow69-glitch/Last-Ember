import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch24',
  name: 'Chapter 24: The Hollow Sun',
  icon: '☀️',
  rarity: 'story',
  category: 'story',
  desc: 'A dark sun hangs above the horizon, a failed star whose light is measured in radiation and memory.',
  effects: { cloth: [3, 6] },
  storyFlag: 'story_ch24_done',
  unlockQuest: 'quest_hollow_sun',
};

export default chapter;

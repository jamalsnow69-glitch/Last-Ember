import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch3',
  name: 'Chapter 3: The Bunker',
  icon: '🚪',
  rarity: 'story',
  category: 'story',
  desc: 'The coordinates lead to an overgrown bunker entrance. Heavy footsteps echo inside.',
  effects: { scrap: [5, 10] },
  storyFlag: 'story_ch3_done',
  unlockQuest: 'quest_bunker_explore',
};

export default chapter;
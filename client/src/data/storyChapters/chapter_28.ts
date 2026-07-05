import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch28',
  name: 'Chapter 28: The Clockwork Grave',
  icon: '⏱️',
  rarity: 'story',
  category: 'story',
  desc: 'A buried machine keeps counting down long after its creators are gone, each tick echoing through the dark.',
  effects: { electronics: [4, 8] },
  storyFlag: 'story_ch28_done',
  unlockQuest: 'quest_clockwork_grave',
};

export default chapter;

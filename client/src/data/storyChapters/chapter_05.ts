import type { StoryChapter } from '@shared/types/storyChapter';

const chapter: StoryChapter = {
  id: 'story_ch5',
  name: 'Chapter 5: The Artifact',
  icon: '🏺',
  rarity: 'story',
  category: 'story',
  desc: 'You unearth a pulsating artifact. It hums with impossible energy.',
  effects: { electronics: [5, 10] },
  storyFlag: 'story_ch5_done',
  unlockQuest: 'quest_artifact_truth',
};

export default chapter;
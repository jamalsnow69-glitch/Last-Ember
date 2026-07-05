import type { CardEffectRange, Rarity } from './card';

export interface StoryChapter {
  id: string;
  name: string;
  icon: string;
  rarity: Rarity;
  category: 'story';
  desc: string;
  effects?: CardEffectRange;
  storyFlag: string;
  unlockQuest?: string;
  loreEntry?: string;
  moralChoice?: boolean;
  risk?: { health?: [number, number] };
  penaltyEffect?: string;
  ending?: string;
  allResources?: [number, number];
}
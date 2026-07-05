export type Rarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic' | 'exotic' | 'story';

export type CardCategory =
  | 'gathering'
  | 'hunting'
  | 'scavenging'
  | 'building'
  | 'trading'
  | 'exploration'
  | 'encounter'
  | 'weather'
  | 'story'
  | 'moral'
  | 'crafting'
  | 'discovery'
  | 'rest'
  | 'faction';

export interface CardEffectRange {
  [resource: string]: [number, number] | number;
}

export interface CardRisk {
  health?: [number, number];
}

export interface CardCondition {
  [resource: string]: number;
}

export interface CardDefinition {
  id: string;
  name: string;
  icon: string;
  rarity: Rarity;
  category: CardCategory;
  desc: string;
  effects?: CardEffectRange;
  tags?: string[];
  condition?: CardCondition;
  risk?: CardRisk;
  healEffect?: [number, number];
  bonusEffect?: string;
  penaltyEffect?: string;
  storyFlag?: string;
  unlockQuest?: string;
  requiresUpgrade?: string;
  grantsUpgrade?: string;
  loreEntry?: string;
  grantsCompanion?: string;
  npcEncounter?: string;
  moralChoice?: boolean;
  requiresMembership?: boolean;
  factionJoin?: string;
  requiresRep?: Record<string, number>;
  factionRep?: Record<string, number>;
  requiresCompanion?: boolean;
  ending?: string;
  allResources?: [number, number];
}
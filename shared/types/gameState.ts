import type { CardDefinition } from './card';
import type { QuestDefinition } from './quest';

export interface Resources {
  food: number;
  water: number;
  scrap: number;
  wood: number;
  stone: number;
  metal: number;
  fuel: number;
  cloth: number;
  medicine: number;
  ammo: number;
  electronics: number;
}

export interface GameStats {
  health: number;
  hunger: number;
  thirst: number;
  day: number;
  baseLevel: number;
}

export interface LoreEntry {
  title: string;
  text: string;
  category: string;
}

export interface LogEntry {
  day: number;
  text: string;
  type?: string;
}

export interface FactionReputation {
  wardens: number;
  freefolk: number;
  remnant: number;
}

export interface GameState {
  resources: Resources;
  stats: GameStats;
  upgrades: string[];
  unlockedUpgrades: string[];
  inventory: string[];
  quests: Record<string, QuestDefinition>;
  completedQuests: string[];
  storyFlags: Record<string, boolean>;
  npcRelationships: Record<string, number>;
  cardHistory: string[];
  eventLog: LogEntry[];
  storyLog: LoreEntry[];
  gameOver: boolean;
  ending: string | null;
  seenCards: string[];
  dayCardsDrawn: string[];
  totalDaysSurvived: number;
  factionReputation: FactionReputation;
  factionMembership: string | null;
  postGame: boolean;
  storyChapterIndex: number;
  endingsSeen: string[];
}
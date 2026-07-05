export type LeaderboardCategory = 'longest_survival' | 'fastest_100_percent' | 'most_quests';

export interface LeaderboardEntry {
  userId: string;
  username: string;
  value: number;
  rank: number;
  category: LeaderboardCategory;
}
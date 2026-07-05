import type { Rarity } from '../types/card';

export const RARITY_WEIGHTS: Record<Rarity, number> = {
  common: 30,
  uncommon: 30,
  rare: 20,
  epic: 12,
  legendary: 5,
  mythic: 2,
  exotic: 1,
  story: 0,
};

export const RARITY_COLORS: Record<Rarity, string> = {
  common: '#888',
  uncommon: '#3a8',
  rare: '#48b',
  epic: '#a4c',
  legendary: '#d80',
  mythic: '#ff2d55',
  exotic: '#ff9500',
  story: '#00c8ff',
};
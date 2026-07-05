import type { ResourceName } from '../types/resource';

export const RESOURCE_DEFINITIONS: Record<ResourceName, { icon: string; category: string }> = {
  food: { icon: '🍖', category: 'survival' },
  water: { icon: '💧', category: 'survival' },
  scrap: { icon: '🔩', category: 'construction' },
  wood: { icon: '🪵', category: 'construction' },
  stone: { icon: '🪨', category: 'construction' },
  metal: { icon: '🔩', category: 'construction' },
  fuel: { icon: '⛽', category: 'advanced' },
  cloth: { icon: '🧵', category: 'survival' },
  medicine: { icon: '💊', category: 'survival' },
  ammo: { icon: '🔫', category: 'advanced' },
  electronics: { icon: '🔌', category: 'advanced' },
};

export const DEFAULT_RESOURCES = {
  food: 20,
  water: 25,
  scrap: 12,
  wood: 18,
  stone: 8,
  metal: 6,
  fuel: 4,
  cloth: 6,
  medicine: 3,
  ammo: 5,
  electronics: 2,
};
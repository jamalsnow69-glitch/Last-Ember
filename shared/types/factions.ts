export type FactionName = 'wardens' | 'freefolk' | 'remnant';

export interface FactionDefinition {
  name: string;
  description: string;
  bonuses: string[];
  joinRequirement: number;
}
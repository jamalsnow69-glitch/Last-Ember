export type ResourceName = 'food' | 'water' | 'scrap' | 'wood' | 'stone' | 'metal' | 'fuel' | 'cloth' | 'medicine' | 'ammo' | 'electronics';

export interface ResourceDefinition {
  name: ResourceName;
  icon: string;
  description: string;
  category: 'survival' | 'construction' | 'advanced';
}
export interface InventoryItemDefinition {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: 'consumable' | 'companion' | 'key';
  effect?: {
    type: string;
    value: number;
  };
}
import type { CardDefinition } from '@shared/types/card';
import type { GameState } from '@shared/types/gameState';

export function filterAvailableCards(
  cards: CardDefinition[],
  state: GameState
): CardDefinition[] {
  return cards.filter((card) => {
    if (card.requiresUpgrade && !state.upgrades.includes(card.requiresUpgrade)) return false;
    if (card.requiresMembership && !state.factionMembership) return false;
    if (card.factionJoin && state.factionMembership) return false;
    if (card.requiresRep) {
      for (const [f, v] of Object.entries(card.requiresRep)) {
        if ((state.factionReputation[f as keyof typeof state.factionReputation] || 0) < v) return false;
      }
    }
    if (card.condition) {
      for (const [r, v] of Object.entries(card.condition)) {
        if ((state.resources[r as keyof typeof state.resources] || 0) < v) return false;
      }
    }
    return true;
  });
}

export function getRarityWeight(rarity: string, postGame: boolean): number {
  const baseWeights: Record<string, number> = {
    common: 30, uncommon: 30, rare: 20, epic: 12, legendary: 5, mythic: 2, exotic: 1,
  };
  let w = baseWeights[rarity] || 0;
  if (postGame && ['legendary', 'mythic', 'exotic'].includes(rarity)) w *= 3;
  return w;
}
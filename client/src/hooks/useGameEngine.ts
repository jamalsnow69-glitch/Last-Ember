import { useCallback } from 'react';
import { useGameState } from '../context/GameStateContext';
import type { CardDefinition } from '@shared/types/card';
import { allCards } from '../data/cards';
import { STORY_SEQUENCE } from '../data/storyChapters';
import { filterAvailableCards, getRarityWeight } from '../utils/cardFilters';
import { randomInRange, weightedRandom } from '../utils/randomHelpers';
import { applyResourceModifier } from '../utils/resourceCalculators';

const CARDS_PER_DAY = 4;
const STORY_INTERVAL = 10;

export function useGameEngine() {
  const { state, dispatch } = useGameState();

  const getNextStoryCard = useCallback((): CardDefinition | null => {
    if (state.stats.day % STORY_INTERVAL !== 0 || state.stats.day === 0) return null;
    const idx = state.storyChapterIndex;
    if (idx < STORY_SEQUENCE.length && !state.storyFlags[STORY_SEQUENCE[idx].storyFlag]) {
      return STORY_SEQUENCE[idx] as CardDefinition;
    }
    return null;
  }, [state.stats.day, state.storyChapterIndex, state.storyFlags]);

  const getAvailableCards = useCallback((): CardDefinition[] => {
    const pool = filterAvailableCards(allCards, state);
    const storyCard = getNextStoryCard();
    if (storyCard) pool.push(storyCard);

    const filtered = pool.filter((c) => !state.dayCardsDrawn.includes(c.id));
    const weights = filtered.map((c) => getRarityWeight(c.rarity, state.postGame));
    const selected: CardDefinition[] = [];

    while (selected.length < CARDS_PER_DAY && filtered.length > 0) {
      const idx = weightedRandom(
        filtered.map((_, i) => i),
        weights
      );
      if (idx === null) break;
      const card = filtered.splice(idx, 1)[0];
      weights.splice(idx, 1);
      if (!selected.find((c) => c.id === card.id)) selected.push(card);
    }

    if (storyCard && !selected.some((c) => c.id === storyCard.id)) {
      if (selected.length >= CARDS_PER_DAY) selected.pop();
      selected.push(storyCard);
    }

    return selected;
  }, [state, getNextStoryCard]);

  const applyCardEffects = useCallback(
    (card: CardDefinition) => {
      const gained: string[] = [];
      const lost: string[] = [];
      let healthChange = 0;
      const msgs: string[] = [];

      if (card.effects) {
        for (const [r, v] of Object.entries(card.effects)) {
          if (Array.isArray(v)) {
            const amt = randomInRange(v[0], v[1]);
            const adjusted = applyResourceModifier(r, amt, state.upgrades);
            dispatch({ type: 'SET_RESOURCES', payload: { [r]: Math.max(0, (state.resources[r as keyof typeof state.resources] || 0) + adjusted) } });
            if (adjusted > 0) gained.push(`${r}:+${adjusted}`);
            else if (adjusted < 0) lost.push(`${r}:${adjusted}`);
          } else if (typeof v === 'number') {
            const adjusted = applyResourceModifier(r, v, state.upgrades);
            dispatch({ type: 'SET_RESOURCES', payload: { [r]: Math.max(0, (state.resources[r as keyof typeof state.resources] || 0) + adjusted) } });
            if (adjusted > 0) gained.push(`${r}:+${adjusted}`);
            else if (adjusted < 0) lost.push(`${r}:${adjusted}`);
          }
        }
      }

      if (card.risk?.health) {
        const dmg = randomInRange(card.risk.health[0], card.risk.health[1]);
        dispatch({ type: 'SET_STATS', payload: { health: Math.max(0, state.stats.health - dmg) } });
        healthChange = -dmg;
        if (dmg > 0) msgs.push(`Took ${dmg} damage!`);
      }

      if (card.healEffect) {
        const heal = randomInRange(card.healEffect[0], card.healEffect[1]);
        dispatch({ type: 'SET_STATS', payload: { health: Math.min(100, state.stats.health + heal) } });
        healthChange = heal;
        msgs.push(`Healed ${heal} HP.`);
      }

      dispatch({ type: 'SET_STATS', payload: { day: state.stats.day + 1 } });

      return { gained, lost, healthChange, msgs };
    },
    [state, dispatch]
  );

  return { getAvailableCards, applyCardEffects };
}
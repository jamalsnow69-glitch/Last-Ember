import type { QuestDefinition } from '@shared/types/quest';
import type { GameState } from '@shared/types/gameState';

export function canCompleteStage(
  quest: QuestDefinition,
  state: GameState
): boolean {
  if (quest.completed) return false;
  const stage = quest.stages[quest.currentStage];
  if (!stage) return false;
  if (stage.requiresFlag && !state.storyFlags[stage.requiresFlag]) return false;
  if (stage.requiresResources) {
    for (const [res, amt] of Object.entries(stage.requiresResources)) {
      if ((state.resources[res as keyof typeof state.resources] || 0) < amt) return false;
    }
  }
  return true;
}

export function getActiveQuests(quests: Record<string, QuestDefinition>): [string, QuestDefinition][] {
  return Object.entries(quests).filter(([, q]) => !q.completed);
}
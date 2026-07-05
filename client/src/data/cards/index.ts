import type { CardDefinition } from '@shared/types/card';
import { gatheringCards } from './gathering';
import { huntingCards } from './hunting';
import { scavengingCards } from './scavenging';
import { buildingCards } from './building';
import { tradingCards } from './trading';
import { explorationCards } from './exploration';
import { friendlyEncounterCards } from './encounters_friendly';
import { hostileEncounterCards } from './encounters_hostile';
import { weatherCards } from './weather';
import { storyEventCards } from './story_events';
import { moralDecisionCards } from './moral_decisions';
import { craftingCards } from './crafting';
import { discoveryCards } from './discoveries';
import { restRecoveryCards } from './rest_recovery';
import { factionCards } from './faction';

export const allCards: CardDefinition[] = [
  ...gatheringCards,
  ...huntingCards,
  ...scavengingCards,
  ...buildingCards,
  ...tradingCards,
  ...explorationCards,
  ...friendlyEncounterCards,
  ...hostileEncounterCards,
  ...weatherCards,
  ...storyEventCards,
  ...moralDecisionCards,
  ...craftingCards,
  ...discoveryCards,
  ...restRecoveryCards,
  ...factionCards,
];
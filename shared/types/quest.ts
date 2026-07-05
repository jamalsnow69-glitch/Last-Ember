export interface QuestReward {
  [resource: string]: number;
}

export interface QuestStage {
  id?: string;
  desc: string;
  requiresFlag?: string;
  requiresResources?: Record<string, number>;
  reward?: QuestReward;
  completeFlag?: string;
  loreEntry?: string;
}

export interface QuestDefinition {
  name: string;
  stages: QuestStage[];
  currentStage: number;
  completed: boolean;
}
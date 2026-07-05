export interface DialogueLine {
  text: string;
  choices?: DialogueChoice[];
}

export interface DialogueChoice {
  text: string;
  outcome: string;
  effects?: Record<string, unknown>;
}

export interface NPCDefinition {
  name: string;
  faction: string;
  dialogue: {
    greeting: string;
    [key: string]: string;
  };
}
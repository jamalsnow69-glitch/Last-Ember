import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { GameState } from '@shared/types/gameState';
import { DEFAULT_RESOURCES } from '@shared/constants/resources';

const DEFAULT_STATE: GameState = {
  resources: { ...DEFAULT_RESOURCES },
  stats: { health: 100, hunger: 10, thirst: 12, day: 1, baseLevel: 1 },
  upgrades: [],
  unlockedUpgrades: ['upg_shelter_1'],
  inventory: [],
  quests: {},
  completedQuests: [],
  storyFlags: {},
  npcRelationships: {},
  cardHistory: [],
  eventLog: [],
  storyLog: [],
  gameOver: false,
  ending: null,
  seenCards: [],
  dayCardsDrawn: [],
  totalDaysSurvived: 0,
  factionReputation: { wardens: 0, freefolk: 0, remnant: 0 },
  factionMembership: null,
  postGame: false,
  storyChapterIndex: 0,
  endingsSeen: [],
};

type GameAction =
  | { type: 'SET_RESOURCES'; payload: Partial<GameState['resources']> }
  | { type: 'SET_STATS'; payload: Partial<GameState['stats']> }
  | { type: 'ADD_UPGRADE'; payload: string }
  | { type: 'SET_GAME_OVER'; payload: boolean }
  | { type: 'LOAD_STATE'; payload: GameState }
  | { type: 'RESET_GAME' };

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'SET_RESOURCES':
      return { ...state, resources: { ...state.resources, ...action.payload } };
    case 'SET_STATS':
      return { ...state, stats: { ...state.stats, ...action.payload } };
    case 'ADD_UPGRADE':
      return { ...state, upgrades: [...state.upgrades, action.payload] };
    case 'SET_GAME_OVER':
      return { ...state, gameOver: action.payload };
    case 'LOAD_STATE':
      return { ...action.payload };
    case 'RESET_GAME':
      return { ...DEFAULT_STATE };
    default:
      return state;
  }
}

interface GameStateContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

const GameStateContext = createContext<GameStateContextType | null>(null);

export function GameStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, DEFAULT_STATE);

  return (
    <GameStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
}
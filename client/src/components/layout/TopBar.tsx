import { useGameState } from '../../context/GameStateContext';
import { RESOURCE_DEFINITIONS } from '@shared/constants/resources';
import type { ResourceName } from '@shared/types/resource';

export default function TopBar() {
  const { state } = useGameState();
  const resources = Object.entries(RESOURCE_DEFINITIONS) as [ResourceName, { icon: string }][];

  return (
    <header className="bg-bg-panel border-b-2 border-border-color px-4 py-2 sticky top-0 z-[100] shadow-lg backdrop-blur-sm">
      <div className="flex flex-wrap gap-x-4 gap-y-1 items-center text-sm">
        {resources.map(([name, def]) => (
          <span key={name} className="flex items-center gap-1">
            <span className="text-sm">{def.icon}</span>
            <span className="font-semibold text-text-bright min-w-[22px] text-center">
              {state.resources[name]}
            </span>
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-1 text-sm">
        <span className="text-text-dim">
          ❤️ <span className={`font-bold ${state.stats.health < 30 ? 'text-red-500 animate-pulse' : state.stats.health < 60 ? 'text-orange-400' : 'text-green-400'}`}>{state.stats.health}</span>
        </span>
        <span className="text-text-dim">
          🍽️ <span className={`font-bold ${state.stats.hunger >= 60 ? 'text-red-500' : 'text-orange-400'}`}>{state.stats.hunger}</span>
        </span>
        <span className="text-text-dim">
          🥤 <span className={`font-bold ${state.stats.thirst >= 60 ? 'text-red-500' : 'text-blue-400'}`}>{state.stats.thirst}</span>
        </span>
        <span className="text-text-dim">📅 Day <span className="font-bold text-text-bright">{state.stats.day}</span></span>
        <span className="text-text-dim">🏠 Base <span className="font-bold text-text-bright">{state.stats.baseLevel}</span></span>
        {state.factionMembership ? (
          <span className={`px-2 py-0.5 rounded-full text-xs font-bold text-white ${
            state.factionMembership === 'wardens' ? 'bg-wardens' :
            state.factionMembership === 'freefolk' ? 'bg-freefolk' : 'bg-remnant'
          }`}>
            🏛️ {state.factionMembership}
          </span>
        ) : (
          <span className="px-2 py-0.5 rounded-full text-xs font-bold">⚪ Independent</span>
        )}
      </div>
    </header>
  );
}
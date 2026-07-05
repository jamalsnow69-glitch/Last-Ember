import type { GameState } from '@shared/types/gameState';

const SAVE_KEY = 'lastember_save';

export function saveToLocal(state: GameState): boolean {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function loadFromLocal(): GameState | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as GameState;
  } catch {
    return null;
  }
}

export function clearLocalSave(): void {
  localStorage.removeItem(SAVE_KEY);
}

export function saveToCloud(state: GameState, token: string): Promise<boolean> {
  return fetch('/api/gamestate', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(state),
  })
    .then((res) => res.ok)
    .catch(() => false);
}

export function loadFromCloud(token: string): Promise<GameState | null> {
  return fetch('/api/gamestate', {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => (res.ok ? res.json() : null))
    .catch(() => null);
}
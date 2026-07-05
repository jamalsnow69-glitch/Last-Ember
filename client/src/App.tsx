import { useState } from 'react';
import { GameStateProvider } from './context/GameStateContext';
import { ModalProvider } from './context/ModalContext';
import TopBar from './components/layout/TopBar';
import MainContainer from './components/layout/MainContainer';
import TechTreeModal from './components/modals/TechTreeModal';
import InventoryModal from './components/modals/InventoryModal';
import StoryLogModal from './components/modals/StoryLogModal';
import FactionModal from './components/modals/FactionModal';
import DialogueModal from './components/modals/DialogueModal';
import PauseModal from './components/modals/PauseModal';
import GameOverModal from './components/modals/GameOverModal';
import EndingModal from './components/modals/EndingModal';
import Toast from './components/common/Toast';

function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <GameStateProvider>
      <ModalProvider showToast={showToast}>
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <MainContainer showToast={showToast} />
        </div>
        <TechTreeModal />
        <InventoryModal />
        <StoryLogModal />
        <FactionModal />
        <DialogueModal />
        <PauseModal />
        <GameOverModal />
        <EndingModal showToast={showToast} />
        {toastMessage && <Toast message={toastMessage} />}
      </ModalProvider>
    </GameStateProvider>
  );
}

export default App;
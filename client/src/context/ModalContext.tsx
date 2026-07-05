import { createContext, useContext, useState, type ReactNode } from 'react';

interface ModalContextType {
  activeModal: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
  showToast: (message: string) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children, showToast }: { children: ReactNode; showToast: (msg: string) => void }) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ activeModal, openModal, closeModal, showToast }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
}
import { create } from 'zustand';

interface State {
  isMenuOpen: boolean;
}

interface Action {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const useMenuStore = create<State & Action>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (value: boolean) => {
    console.log('🏪 Zustand: setIsMenuOpen 호출됨, 새로운 값:', value);
    set({ isMenuOpen: value });
    console.log('🏪 Zustand: set 함수 실행 완료');
    // set({ isMenuOpen })
  },
}));

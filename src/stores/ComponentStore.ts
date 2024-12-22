import { create } from 'zustand';

interface ComponentType {
    component: string;
    setComponent: (to: string) => void;
};

const useComponent = create<ComponentType>((set) => {
    return {
        component: 'Dashboard',
        setComponent: (to: string) => set({ component: to })
    }
});

export default useComponent;

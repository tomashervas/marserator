import { create } from "zustand";
import {persist } from 'zustand/middleware'

interface StoreState {
    themeColor: string;
    setThemeColor: (color: string) => void;
}

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            themeColor: "#fde047",
            setThemeColor: (color: string) => set({ themeColor: color }),
        }),
        {
            name: "marserator-v1",
        }
        
    )
)
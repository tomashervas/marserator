import { create } from "zustand";
import {persist } from 'zustand/middleware'

export interface Practice {
    practiceAddition: number;
    practiceSubtraction: number;
}

export interface StoreState {
    themeColor: string;
    practiceLevel: Practice
    practiceScore: Practice
    practiceBestStreak: Practice
    practiceBestScore: Practice
    setThemeColor: (color: string) => void;
    setPracticeLevel: (key: keyof Practice, value: number) => void;
    setPracticeScore: (key: keyof Practice, value: number) => void;
    setPracticeBestStreak: (key: keyof Practice, value: number) => void;
    setPracticeBestScore: (key: keyof Practice, value: number) => void;
    resetPractice: () => void;
}

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            themeColor: "#fde047",
            practiceLevel: {
                practiceAddition: 1,
                practiceSubtraction: 1,
            },
            practiceScore: {
                practiceAddition: 0,
                practiceSubtraction: 0,
            },
            practiceBestStreak: {
                practiceAddition: 0,
                practiceSubtraction: 0,
            },
            practiceBestScore: {
                practiceAddition: 0,
                practiceSubtraction: 0,
            },
            setThemeColor: (color: string) => set({ themeColor: color }),
            setPracticeLevel: (key, value) => set(state => ({ practiceLevel: { ...state.practiceLevel, [key]: value } })),
            setPracticeScore: (key, value) => set(state => ({ practiceScore: { ...state.practiceScore, [key]: value } })),
            setPracticeBestStreak: (key, value) => set(state => ({ practiceBestStreak: { ...state.practiceBestStreak, [key]: value } })),
            setPracticeBestScore: (key, value) => set(state => ({ practiceBestScore: { ...state.practiceBestScore, [key]: value } })),
            resetPractice: () => set({ 
                practiceScore: { practiceAddition: 0, practiceSubtraction: 0 },
                practiceBestStreak: { practiceAddition: 0, practiceSubtraction: 0 }
            }),
        }),
        {
            name: "marserator-v1",
        }
        
    )
)
import { create } from "zustand";
import {persist } from 'zustand/middleware'

export interface Practice {
    practiceAddition: number;
    practiceSubtraction: number;
}

export interface StoreState {
    keyName: string;
    toNextLevel: number;
    themeColor: string;
    practiceLevel: Practice
    practiceTempLevel: Practice
    practiceScore: Practice
    practiceBestStreak: Practice
    practiceBestScore: Practice
    setKeyName: (keyName: string) => void;
    setToNextLevel: (toNextLevel: number) => void;
    setThemeColor: (color: string) => void;
    setPracticeLevel: (key: keyof Practice, value: number) => void;
    setPracticeTempLevel: (key: keyof Practice, value: number) => void;
    setPracticeScore: (key: keyof Practice, value: number) => void;
    setPracticeBestStreak: (key: keyof Practice, value: number) => void;
    setPracticeBestScore: (key: keyof Practice, value: number) => void;
    resetPractice: () => void;
}

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            keyName: '',
            toNextLevel: 10,
            themeColor: "#fde047",
            practiceLevel: {
                practiceAddition: 1,
                practiceSubtraction: 1,
            },
            practiceTempLevel: {
                practiceAddition: 0,
                practiceSubtraction: 0,
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
            setKeyName: (name: string) => set({ keyName: name }),
            setToNextLevel: (value: number) => set({ toNextLevel: value }),
            setThemeColor: (color: string) => set({ themeColor: color }),
            setPracticeLevel: (key, value) => set(state => ({ practiceLevel: { ...state.practiceLevel, [key]: value } })),
            setPracticeTempLevel: (key, value) => set(state => ({ practiceTempLevel: { ...state.practiceTempLevel, [key]: value } })),
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
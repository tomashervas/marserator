import { create } from "zustand";
import {persist } from 'zustand/middleware'

export interface PracticeLevel {
    practiceAddition: number;
    practiceSubtraction: number;
}

export interface PracticeScore {
    practiceAddition: number;
    practiceSubtraction: number;
}
export interface StoreState {
    themeColor: string;
    practiceLevel: PracticeLevel
    practiceScore: PracticeScore
    setThemeColor: (color: string) => void;
    setPracticeLevel: (key: keyof PracticeLevel, value: number) => void;
    setPracticeScore: (key: keyof PracticeScore, value: number) => void;
}



export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            themeColor: "#fde047",
            practiceLevel: {
                practiceAddition: 1,
                practiceSubtraction: 1,
            },
            setThemeColor: (color: string) => set({ themeColor: color }),
            setPracticeLevel: (key, value) => set((state) => {
                return {
                    practiceLevel: {
                        ...state.practiceLevel,
                        [key]: value
                    }
                }
            }),
            practiceScore: {
                practiceAddition: 0,
                practiceSubtraction: 0,
            },
            setPracticeScore: (key, value) => set((state) => {
                return {
                    practiceScore: {
                        ...state.practiceScore,
                        [key]: value
                    }
                }
            })
        }),
        {
            name: "marserator-v1",
        }
        
    )
)
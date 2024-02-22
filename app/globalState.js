"use client"
import { create } from 'zustand'

export const useCountStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
}))
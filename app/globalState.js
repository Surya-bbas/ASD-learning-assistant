"use client"
import { create } from 'zustand'

export const useCountStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
}))

export const useUserLoginStore = create((set) => ({
  user: "",
  updateUser: (newUser) => set({ user: newUser }),
  removeUser: () => set({ user: "" }),
}))
"use client";

import toast from "react-hot-toast";
import { create } from "zustand";
import axiosInstance from "../databaseConnection/axiosInstance";

interface AuthState {
  user: any | null;
  loading: boolean;
  syncUser: () => Promise<void>;
  currentUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,

  syncUser: async () => {
    set({ loading: true });
    try {
      const { data } = await axiosInstance.post("/auth/sync");      
      set({ user: data.user, loading: false });
    } catch (err: any) {
      console.error(err.message || err);
      toast.error(err.message || "Failed to sync user");
      set({ loading: false });
    }
  },

  currentUser: async () => {
    set({ loading: true });
    try {
      const { data } = await axiosInstance.get("/auth/sync");
      // console.log(`currentUser data: ${JSON.stringify(data.data, null, 2)}`);
      set({ user: data.data, loading: false });
    } catch (err: any) {
      console.error(err.message || err);
      toast.error(err.message || "Failed to sync user");
      set({ loading: false });
    }
  }
}));
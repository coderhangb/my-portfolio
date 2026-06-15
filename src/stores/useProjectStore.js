import { create } from "zustand";

const projectSFX = new Audio("/sfx/projects.mp3");
projectSFX.volume = 0.5;

export const useProjectStore = create((set, get) => ({
  selectedProject: null,
  isStartMenuDisplayed: true,
  isMuted: false,
  isNight: false,

  openProject: (project) => {
    if (!get().isMuted) {
      projectSFX.currentTime = 0;
      projectSFX.play();
    }
    set({ selectedProject: project });
  },

  closeProject: () => {
    if (!get().isMuted) {
      projectSFX.currentTime = 0;
      projectSFX.play();
    }
    set({ selectedProject: null });
  },

  hideStartMenu: () => {
    projectSFX.currentTime = 0;
    projectSFX.play();
    set({ isStartMenuDisplayed: false });
  },

  toggleMute: () => {
    if (!get().isMuted) {
      projectSFX.currentTime = 0;
      projectSFX.play();
    }
    set((state) => ({
      isMuted: !state.isMuted,
    }));
  },

  toggleNight: () => {
    if (!get().isMuted) {
      projectSFX.currentTime = 0;
      projectSFX.play();
    }
    set((state) => ({
      isNight: !state.isNight,
    }));
  },
}));

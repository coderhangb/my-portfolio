import { create } from "zustand";

const projectSFX = new Audio("/sfx/projects.ogg");
projectSFX.volume = 0.5;

export const useProjectStore = create((set) => ({
  selectedProject: null,

  openProject: (project) => {
    projectSFX.currentTime = 0;
    projectSFX.play();
    set({ selectedProject: project });
  },

  closeProject: () => {
    projectSFX.currentTime = 0;
    projectSFX.play();
    set({ selectedProject: null });
  },
}));

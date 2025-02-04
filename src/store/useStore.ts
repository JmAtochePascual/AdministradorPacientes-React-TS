import { create } from 'zustand';
import { TPatient } from '../types';

type TPatienState = {
  patients: TPatient[];
  addPatient: (patient: TPatient) => void;
};

export const usePatientStore = create<TPatienState>((set) => ({
  patients: [],
  addPatient: (patient) => {
    set((state) => ({ patients: [...state.patients, patient] }));
  }
}));
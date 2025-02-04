import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TPatient } from '../types';

type TPatienState = {
  patients: TPatient[];
  idEditPatient: TPatient['id'];
  addPatient: (patient: TPatient) => void;
  setIdEditPatient: (id: TPatient['id']) => void;
  editPatient: (patient: TPatient) => void;
  deletePatient: (id: TPatient['id']) => void;
};

export const usePatientStore = create<TPatienState>()(
  devtools(
    persist((set) => ({
      patients: [],
      idEditPatient: '',
      addPatient: (patient) => {
        set((state) => ({ patients: [...state.patients, patient] }));
      },
      setIdEditPatient: (id) => {
        set({ idEditPatient: id });
      },
      editPatient: (patient) => {
        set((state) => ({
          patients: state.patients.map((pt) => (pt.id === patient.id ? patient : pt)),
          idEditPatient: '',
        }));
      },
      deletePatient: (id) => {
        set((state) => ({
          patients: state.patients.filter((patient) => patient.id !== id),
        }));
      },
    }),
      {
        name: 'patient-storage',
      }
    )
  )
);
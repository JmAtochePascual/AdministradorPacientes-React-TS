import { usePatientStore } from "../store/useStore";
import { toast } from 'react-toastify';
import { TPatient } from "../types"
import { formatDate } from "../utils";
import PatientDetailItem from "./PatientDetailItem";

type PatienDetailProps = {
  patient: TPatient
}

const PatientDetail = ({ patient }: PatienDetailProps) => {
  const { deletePatient, setIdEditPatient } = usePatientStore();
  const { name, caretaker, email, date, id, symptoms } = patient;

  const drafDeletePatient = () => {
    deletePatient(id);
    toast.error('Paciente Eliminado')
  }

  return (
    <div className="shadow-md rounded-lg py-5 px-5 mb-5 bg-white ">
      <PatientDetailItem label="ID" data={id} />
      <PatientDetailItem label="Nombre" data={name} />
      <PatientDetailItem label="Propietario" data={caretaker} />
      <PatientDetailItem label="Email" data={email} />
      <PatientDetailItem label="Fecha" data={formatDate(date)} />
      <PatientDetailItem label="Síntomas" data={symptoms} />

      <div className="mt-4 flex flex-col gap-2 md:flex-row">
        <button
          onClick={() => setIdEditPatient(id)}
          className="w-full p-2 uppercase font-bold text-sm text-center rounded-md cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700">
          Editar
        </button>

        <button
          onClick={drafDeletePatient}
          className="w-full p-2 uppercase font-bold text-sm text-center rounded-md cursor-pointer text-white bg-red-600 hover:bg-red-700">
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default PatientDetail
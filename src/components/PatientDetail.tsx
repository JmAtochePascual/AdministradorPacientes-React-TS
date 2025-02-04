import { TPatient } from "../types"
import { formatDate } from "../utils";
import PatientDetailItem from "./PatientDetailItem";

type PatienDetailProps = {
  patient: TPatient
}

const PatientDetail = ({ patient }: PatienDetailProps) => {
  const { name, caretaker, email, date, id, symptoms } = patient;

  return (
    <div className="shadow-md rounded-lg py-5 px-5 mb-5 bg-white ">
      <PatientDetailItem label="ID" data={id} />
      <PatientDetailItem label="Nombre" data={name} />
      <PatientDetailItem label="Propietario" data={caretaker} />
      <PatientDetailItem label="Email" data={email} />
      <PatientDetailItem label="Fecha" data={formatDate(date)} />
      <PatientDetailItem label="Síntomas" data={symptoms} />
    </div>
  )
}

export default PatientDetail
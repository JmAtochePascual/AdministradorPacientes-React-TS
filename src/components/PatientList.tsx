import { usePatientStore } from "../store/useStore"
import PatientDetail from "./PatientDetail"

const PatientList = () => {
  const { patients } = usePatientStore()
  const isPatientsEmpty = patients.length === 0
  return (
    <div>
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      {
        isPatientsEmpty
          ? <p className="text-center">No hay pacientes registrados</p>
          : <>
            {
              patients.map((patient) =>
                <PatientDetail
                  key={patient.id}
                  patient={patient}
                />
              )
            }
          </>
      }
    </div>
  )
}

export default PatientList
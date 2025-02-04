import { usePatientStore } from "../store/useStore"
import PatientDetail from "./PatientDetail"

const PatientList = () => {
  const { patients } = usePatientStore()
  const isPatientsEmpty = patients.length === 0
  return (
    <div>
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
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import Error from './Error'
import { TDrafPatient } from '../types'
import { usePatientStore } from '../store/useStore'
import { useEffect } from 'react';

const PatientForm = () => {
  const { patients, idEditPatient, addPatient, editPatient } = usePatientStore()
  // TODO: Extraer la funcion reset de useForm para resetear el formulario
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<TDrafPatient>();

  useEffect(() => {
    if (idEditPatient) {
      const activePatient = patients.filter(patient => patient.id === idEditPatient)[0];

      setValue('name', activePatient.name)
      setValue('caretaker', activePatient.caretaker)
      setValue('email', activePatient.email)
      setValue('date', activePatient.date)
      setValue('symptoms', activePatient.symptoms)
    }
  }, [idEditPatient, patients, setValue])

  const registerPatient = (data: TDrafPatient) => {

    if (idEditPatient) {
      editPatient({ ...data, id: idEditPatient });
      toast.success('Paciente Actualizado')
    } else {
      addPatient({ ...data, id: uuidv4() })
      toast.success('Paciente Añadido')
    }
    // TODO: Resetear el formulario
  }

  return (
    <div>
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        noValidate
        onSubmit={handleSubmit(registerPatient)}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="text-sm uppercase font-bold">
            Paciente
          </label>

          <input
            id="name"
            type="text"
            placeholder="Nombre del Paciente"
            autoComplete="off"
            {...register('name', { required: 'El nombre del paciente es requerido' })}
            className="w-full p-3 border border-gray-300 rounded-md outline-none" />

          {errors?.name?.message && <Error message={errors.name.message} />}
        </div>

        <div className="mb-5">
          <label
            htmlFor="caretaker"
            className="text-sm uppercase font-bold">
            Propietario
          </label>

          <input
            id="caretaker"
            type="text"
            placeholder="Nombre del Propietario"
            autoComplete="off"
            {...register('caretaker', { required: 'El nombre del propietario es requerido' })}
            className="w-full p-3 border border-gray-300 rounded-md outline-none" />

          {errors?.caretaker?.message && <Error message={errors.caretaker.message} />}
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-sm uppercase font-bold">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            autoComplete="off"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email No Válido'
              }
            })}
            className="w-full p-3 border border-gray-300 rounded-md outline-none" />

          {errors?.email?.message && <Error message={errors.email.message} />}
        </div>

        <div className="mb-5">
          <label
            htmlFor="date"
            className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            type="date"
            {...register('date', { required: 'La fecha es obligatoria' })}
            className="w-full p-3 border border-gray-300 rounded-md outline-none" />

          {errors?.date?.message && <Error message={errors.date.message} />}
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            placeholder="Síntomas del paciente"
            autoComplete="off"
            {...register('symptoms', { required: 'Los síntomas son requeridos' })}
            className="w-full p-3 border border-gray-300 rounded-md outline-none">

          </textarea>

          {errors?.symptoms?.message && <Error message={errors.symptoms.message} />}
        </div>

        <input
          type="submit"
          value={idEditPatient ? 'Guardar Cambios' : 'Añadir Paciente'}
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />
      </form>
    </div>
  )
}

export default PatientForm

const PatientForm = () => {

  return (
    <div>
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        noValidate
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
            className="w-full p-3 border border-gray-300 rounded-md outline-none" />
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
            className="w-full p-3 border border-gray-300 rounded-md outline-none" />
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
            className="w-full p-3 border border-gray-300 rounded-md outline-none" />
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
            className="w-full p-3 border border-gray-300 rounded-md outline-none" />
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
            className="w-full p-3 border border-gray-300 rounded-md outline-none">

          </textarea>
        </div>

        <input
          type="submit"
          value='Guardar Paciente'
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />
      </form>
    </div>
  )
}

export default PatientForm
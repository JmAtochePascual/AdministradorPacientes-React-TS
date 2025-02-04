import { ToastContainer } from 'react-toastify';
import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {

  return (
    <>
      <header className="mb-10 py-8">
        <h1 className="max-w-md mx-auto text-center text-3xl font-black md:text-4xl lg:text-5xl lg:max-w-lg">Seguimiento de Pacientes <span className="text-indigo-600">Veterinaria</span></h1>
      </header>

      <main className="w-11/12 max-w-5xl mx-auto grid gap-4 md:grid-cols-2">
        <PatientForm />
        <PatientList />
      </main>

      <ToastContainer />

      <footer className='py-4 bg-indigo-600'>
        <p className="p-4 text-center text-white md:text-start"> <span className="font-bold">JMCode</span> | ©2025 - Transformando ideas en realidad.</p>
      </footer>
    </>
  )
}

export default App

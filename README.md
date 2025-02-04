# ⚡️ Administrador de Pacientes

Administrador de Pacientes es una aplicación web que permite a los usuarios registrar y gestionar sus pacientes, incluyendo información sobre el propietario, síntomas y más. La aplicación permite agregar, editar y eliminar pacientes, proporcionando un resumen claro de la información.

## 🛠️ Tecnologías Utilizadas

- **React**: Framework principal para la construcción de la interfaz de usuario
- **TypeScript**: Lenguaje de programación que agrega tipado estático a JavaScript
- **Vite**: Herramienta de compilación que ofrece un entorno de desarrollo más rápido
- **TailwindCSS**: Framework para los estilos del proyecto
- **LocalStorage**: Para persistir el estado de los pacientes
- **ESLint**: Para mantener la calidad y consistencia del código
- **Git**: Sistema de control de versiones
- **GitHub Pages**: Para el despliegue de la aplicación

## 📁 Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **components/**: Componentes reutilizables que forman la interfaz de usuario.
    - `PatientForm.tsx`: Componente para agregar y editar pacientes.
    - `PatientDetail.tsx`: Componente que muestra los detalles de un paciente individual.
    - `PatientList.tsx`: Componente que lista todos los pacientes.
    - `Error.tsx`: Componente para mostrar mensajes de error.
  - **hooks/**: Contiene hooks personalizados que encapsulan la lógica de la aplicación.
  - **types/**: Tipos y interfaces compartidos que definen la estructura de los datos.
    - `index.ts`: Tipos y interfaces utilizados en toda la aplicación.
  - **store/**: Contiene la lógica de gestión del estado de los pacientes.
    - `useStore.ts`: Hook que maneja el estado de los pacientes (agregar, editar, eliminar).
  - `App.tsx`: Componente principal que integra todos los componentes y gestiona el estado global.

## 🚀 Características Principales

- **Registro de Pacientes**: Permite a los usuarios agregar pacientes, especificando información relevante como nombre, propietario, email, fecha y síntomas.
- **Edición y Eliminación**: Los usuarios pueden editar la información de los pacientes o eliminarlos de la lista.
- **Interfaz Responsiva**: Asegura que la aplicación se vea bien en dispositivos de diferentes tamaños.
- **Persistencia de Datos**: Utiliza `localStorage` para mantener el registro de pacientes incluso después de recargar la página.
- **Manejo de Estado**: Utiliza `zustand` para gestionar el estado de los pacientes de manera eficiente.
- **Despliegue Automático**: Facilita el acceso a la aplicación en línea a través de GitHub Pages.

## 🛠️ Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JMatochePascual/AdministradorPacientes-React-TS.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en:
   ```bash
   http://localhost:5173
   ```

## 🤝 Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un Fork del repositorio:

   ```bash
   git remote add upstream https://github.com/JMatochePascual/AdministradorPacientes-React-TS.git
   ```

2. Crea una nueva rama:

   ```bash
   git checkout -b feature/nueva-caracteristica
   ```

3. Realiza tus cambios y haz commit:

   ```bash
   git add .
   git commit -m "Agrega nueva característica"
   ```

4. Sube los cambios a tu Fork:

   ```bash
   git push origin feature/nueva-caracteristica
   ```

5. Abre un Pull Request desde tu repositorio al repositorio original.

Por favor, antes de realizar cambios importantes:

- Abre un Issue para discutir las modificaciones propuestas.
- Asegúrate de que tu código sigue las convenciones del proyecto.
- Incluye tests si es necesario.
- Actualiza la documentación según corresponda.

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

<p style="text-align: center">Hecho con 💚 por JMCode | ©2025 - Transformando ideas en realidad.</p>

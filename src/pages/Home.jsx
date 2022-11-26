import Logo from '../assets/Logocolor.png'

function HomePage() {
    return (
        <main className="flex flex-row justify-around p-10">
            <img src={Logo} alt="logo" />
            <section className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-bold mb-10'>Bienvenido a Gestor Escolar</h1>
                <p>
                    El gestor que te permite organizar de forma efectiva tu vida escolar. <br/>
                    Esta aplicación se genero con la finalidad de poder ayudar a los estudiantes, maestros y administrativos que no tienen un sistema de gestion interno, por lo cual este programa esta preparado para poder administrar la carga academica de los estudiantes. <br /><br /><br />
                    El Estudiante podra realizar las siguientes acciones:
                    <ul className='pl-8 list-disc'>
                        <li>Ver Materias inscritas</li>
                        <li>Ver Calificaciones</li>
                        <li>Ver Horario de Clases</li>
                    </ul>
                    El Docente podra realizar las siguientes acciones:
                    <ul className='pl-8 list-disc'>
                        <li>Asignar Calificaciones</li>
                        <li>Impartir Materias</li>
                        <li>Ver Horario de Clases</li>
                    </ul>
                </p>
                <span className='mt-10 font-semibold'>Si te gustaria saber mas ingresa al siguiente link: <a href="#" className='text-[#023047ff] visited:text-[#fb8500ff] underline'>documentación</a></span>

                <article className='bg-[#219ebcff] rounded-md p-10'>
                    <h3 className='mb-5 text-center'>¿Ya tienes una cuenta? Ingresa ahora</h3>
                    <div>
                        <p className='underline'>Si aun no tienes una cuenta puedes registrarte.</p>
                        <form className='flex flex-col'>
                            <input className='mb-3 w-80 mx-auto' type="text" placeholder='Nombre' />
                            <input className='mb-3 w-80 mx-auto' type="text" placeholder='Correo' />
                            <input className='mb-3 w-80 mx-auto' type="text" placeholder='Contraseña' />
                            <button className='bg-[#fb8500ff] text-white px-3 py-2 rounded-md font-bold'>Registrarse</button>
                        </form>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default HomePage
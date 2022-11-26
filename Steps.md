#Crear proyecto de react con Vite
---
Lo primero que debemos hacer es abrir una terminal en la cual ejecutaremos los siguientes comandos.

1. <npm create vite@latest> , con este comando crearemos nuestra carpeta de proyecto
2. <cd name-proyecto> , entraremos a la carpeta del proyecto
3. <npm install> , instala las dependencias (genera node_modules)

Con *npm run dev* ejecutaremos el servidor.

---
##Para poder manejar rutas utilizaremos react-router-dom
<npm i react-router-dom>

Para poder hacer nuestras rutas usaremos los siguientes elementos:
- BrowserRouter
- Routes
- Route

---
##Importando tailwind css
1. <npm install -D tailwindcss postcss autoprefixer>
2. <npx tailwindcss init -p>
3. Tenemos que actualizar el archivo tailwind.config sobre escribirmos contetn => 
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
4. Agregamos en index.css 
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


    <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/teacher">Teacher</Link>
          </li>
        </ul>
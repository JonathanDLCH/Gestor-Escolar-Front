import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { About, Dashboard, Home, Profile, Teacher } from './pages'

import { useState } from 'react'

import { ProtectedRoute } from './components/ProtectRoute'

function App() {

  const [user, setUser] = useState(null) //usuario

  const login = () => {
    //aqui traemos datos de backend

    setUser({
      id: 1,
      name: "Mrs kalinchi",
      rol: ['student']
    })
  }

  const logout = () => setUser(null) //limpiamos el usuario

  return (
    <BrowserRouter>

      <Navigation />

      {
        user ? (<button onClick={logout}>Logout</button>) : (<button onClick={login}>Login</button>)
      }

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route element={<ProtectedRoute isAllowed={!!user} />}> {/**Multiples Rutas protegidas */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/teacher" element={
          <ProtectedRoute
            isAllowed={!!user && user.rol.includes('admin')}
            redirectTo="/dashboard"
          >
            <Teacher />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-16 items-center justify-between'>

          <div className='flex flex-1 items-center justify-between sm:items-stretch sm:justify-start'>

            <div className='hidden sm:ml-6 sm:block'>
              <div className="flex space-x-4">

                <Link to="/home" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>

                <Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</Link>

                <Link to="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>

                <Link to="/teacher" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Teacher</Link>
              </div>
            </div>

            <div className='Absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button className='absolute right-0 bg-[#fb8500ff] text-white px-3 py-2 rounded-md font-bold'>Login</button>
            </div>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default App

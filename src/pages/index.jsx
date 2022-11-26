import HomePage from "./Home"


//Public
export const Home = ()=><HomePage/>
export const About = ()=><h2>About (Public)</h2>

//Private
export const Dashboard = ()=><h2>Dashboard (Private)</h2>
export const Profile = ()=><h2>Profile (Private, permission: 'user')</h2>
export const Teacher = ()=><h2>Teacher (Private, permission: 'teacher')</h2>
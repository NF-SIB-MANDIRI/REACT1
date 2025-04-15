import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages"
import Books from "./pages/books"
import Teams from "./pages/teams"
import Contacts from "./pages/contacts"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"


function App() {

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path ="books" element={<Books/>}/>
            <Route path ="teams" element={<Teams/>}/>
            <Route path ="contacts" element={<Contacts/>}/>
            <Route path ="login" element={<Login/>}/>
            <Route path ="register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
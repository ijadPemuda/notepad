import { BrowserRouter, Routes, Route } from "react-router-dom"

import LoginPage from "./pages/login_page/login_page"
import SigninPage from "./pages/signin_page/signin_page"
import Dashboard from "./pages/dashboard/dashboard_page"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={
            <LoginPage />
          }/>

          <Route path="/signin" element={
            <SigninPage />
          }/>

          <Route path="/dashboard" element={
            <Dashboard />
          }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

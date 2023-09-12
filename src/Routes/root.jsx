import { Detail } from "../components/detail/detail";
import { Home } from "../components/home/home";
import { Main } from "../components/main/main"
import { BrowserRouter, Routes, Route } from "react-router-dom";



export const Router = () => {
  return(

    <Routes>
      <Route element={<Main/>} path="/catalog"/>
      <Route element={<Detail/>} path="/detail"/>
    </Routes>

  )
}
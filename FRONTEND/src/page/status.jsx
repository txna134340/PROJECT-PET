import { useState } from "react"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import axios from "axios"

const status = () => {
  const [ PetBaseEntity, setPetBaseEntity ] = useState({ id:'' , number:'' });
  
}

function status() {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  )
}

export default status
import { BrowserRouter } from "react-router-dom"
import Layout from "../Layout"

function App() {

  return (
    <div className='relative bg-black'>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  )
}

export default App

// import Header from "./components/Header"
import { Layout } from "./components/Layout"
import AppRouter from "../AppRouter";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom"

function App() {
 

  return (
    <>
      <Router>
        
        <Layout>
          <AppRouter />
        </Layout>
        <Footer />
      
      </Router>

    </>
  )
}

export default App

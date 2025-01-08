import { Routes, Route } from "react-router-dom"
import Home from "./src/components/Home";
import About from "./src/components/About";
import Skills from "./src/components/Skills";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";



export default function AppRouter() {
    return (
        <>
        
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
        </>
    )
}

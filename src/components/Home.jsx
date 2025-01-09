// import About from "./About";
import { useNavigate } from "react-router-dom";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import image from "../assets/image/ima-pic.jpg"; //


export default function Home() {
    const navigate = useNavigate();
    

    return (
        <>
            <section id="home" className="container mx-auto py-5 text-center">
                <h1 id="#about" className="text-2xl sm:text-4xl md:text-5xl font-bold m-6 mb-20 ">Ismail M. Adam - Frontend Developer</h1>
                <div id="info" className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-1">
                    <div className="bg-gray-700 text-center text-xl mb-12  mx-auto rounded-xl p-6 ml-80">
                       <p className="text-left"> I am passionate about building user-friendly and intuitive web applications. My goal is to help businesses achieve their goals by providing seamless user experiences. 
                            I have a deep understanding of web development technologies and can help you design and develop your next project. 
                            I am currently available for freelance work, so don't hesitate to reach out if you need help with your next project!
                        </p>
                        <div className="flex justify-center mt-6">
                          <button onClick={()=> document.getElementById("contact").scrollIntoView({behavior: "smooth"})} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 transition-colors">
                                Contact Me
                            </button>  
                        </div>
                    </div>
                    <img className="inline-block max-w-lg h-80 md:max-w-lg hover:rotate-3  rounded-full ml-40" src={image} alt="Ismail Mohammed Adam" />
                    {/* <img className="inline-block w-20 h-20 rounded-full mx-auto mb-8" src={image} alt="Ismail Mohammed Adam" /> */}
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 bg-white text-black font-bold rounded-2xl min-w-7 mx-auto mt-8 animate-bounce">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>

                </div>
                {/* <h2 className="text-2xl sm:text-4xl text-blue-400 mb-12">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5 h-5 sm:h-6 sm:w-6 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ADD8E6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
                    </svg>  
                    Full-Stack Developer, UI/UX Designer, and freelance graphic designer.
                </h2> */}
            </section>
            {/* <About /> */}
            <Skills />
            <Projects />
            <Contact />


        </>
    )
}

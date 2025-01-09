import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import image from "../assets/image/ima-pic.jpg"; //


export default function Home() {
    

    return (
        <>
            <section id="home" className=" container mx-auto h-lvh py-20 text-center">
                <h1 id="#about" className="text-2xl sm:text-4xl md:text-5xl font-bold m-6 mb-20 ">Ismail M. Adam - Frontend Developer</h1>
                    <img className="inline-block max-w-lg h-80 md:max-w-lg hover:rotate-3  rounded-full ml-90" src={image} alt="Ismail Mohammed Adam" />
                
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
            <About />
            <Skills />
            <Projects />
            <Contact />


        </>
    )
}

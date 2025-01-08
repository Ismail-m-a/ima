import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import image from "../assets/image/ima-pic.jpg"; //


export default function Home() {
    

    return (
        <>
            <section id="home" className="container mx-auto py-10 text-center">
                <h1 id="about" className="text-2xl sm:text-4xl md:text-5xl font-bold m-6">Ismail M. Adam - Frontend Developer</h1>
                <h2 className="text-2xl sm:text-4xl text-blue-400 mb-8">Web Developer
                    {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5 h-5 sm:h-6 sm:w-6 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ADD8E6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
                    </svg>   */}
                    Full-Stack Developer, UI/UX Designer, and freelance graphic designer.
                </h2>
                <img className="inline-block w-60 h-60 rounded-full" src={image} alt="Ismail Mohammed Adam" />
                {/* <img className="inline-block w-20 h-20 rounded-full mx-auto mb-8" src={image} alt="Ismail Mohammed Adam" /> */}
                <p className="text-xl mb-12 max-w-2xl mx-auto">
                    I am passionate about building user-friendly and intuitive web applications. My goal is to help businesses achieve their goals by providing seamless user experiences. I have a deep understanding of web development technologies and can help you design and develop your next project. I am currently available for freelance work, so don't hesitate to reach out if you need help with your next project!
                </p>
                <div className="flex justify-center">
                    <a href="#contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 transition-colors">
                        Contact Me
                    </a>
                </div>
            </section>
            <About />
            <Skills />
            <Projects />
            <Contact />


        </>
    )
}

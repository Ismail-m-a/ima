import { Layout } from "./Layout"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Home() {
    

    return (
        <>
            <Layout>
                <section id="home" className="container mx-auto py-10 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold m-6">Hi, I am Ismail</h1>
                    <h2 className="text-2xl sm:text-4xl text-blue-400 mb-8">Web Developer</h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5 h-5 sm:h-6 sm:w-6 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ADD8E6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25" />
                        </svg>  
                        <p className="ml-4">I create beautiful, responsive and user-friendly websites using modern web technologies.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="w-5 h-5 sm:h-6 sm:w-6 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ADD8E6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </p>
                    <div id="socials" className="flex justify-center space-x-6 mb-6">
                        <a href="https://github.com/ismail-m-a" target="_blank"  className="text-white-400 text-2xl sm:text-3xl hover:text-blue-500 transition-colors rounded-lg">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/ismail-m-adam-b784259b/" target="_blank" rel="noopener noreferrer" className="text-white-400 text-2xl sm:text-3xl hover:text-blue-500 transition-colors rounded-lg">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:your.email@example.com" className="text-white-400 text-2xl sm:text-3xl hover:text-blue-500 transition-colors rounded-lg">
                            <FaEnvelope />
                        </a>
                    </div>
                </section>

                <section id="skills" className="bg-gray-800 py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {['HTML/CSS', 'JavaScript', 'React', 'Node', 'Express', 'Bootstrap', 'Tailwind', 'Git'].map((skill) => (
                                <div key={skill} className="bg-gray-700 rounded-lg p-4 text-center">
                                    <p className="text-lg">{skill}</p>
                                </div> 
                            ))}
                        </div>
                    </div>
                </section>
                
                <section id="projects" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                        {/* Add your projects here */}
                    </div>
                </section>
            </Layout>
        </>
    )
}

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function About() {
    

    return (
        <>
            <section id="about" className=" bg-gray-800 py-32">
                <h2 className='text-4xl font-bold text-center mb-20'>About me</h2>
                <div className="text-xl mb-12 max-w-2xl mx-auto">
                    <div id="info" className="">
                        <div className="bg-gray-700 text-center text-xl mb-12  mx-auto rounded-xl p-6 border-2 border-gray-500">
                            <p className="text-left"> I am passionate about building user-friendly and intuitive web applications. My goal is to help businesses achieve their goals by providing seamless user experiences. 
                                    I have a deep understanding of web development technologies and can help you design and develop your next project. 
                                    I am currently available for freelance work, so don&apos;t hesitate to reach out if you need help with your next project!
                            </p>
                            <div className="flex justify-center mt-6">
                                <button onClick={()=> document.getElementById("contact").scrollIntoView({behavior: "smooth"})} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 transition-colors">
                                    Contact Me
                                </button>  
                            </div>
                        </div>
                        {/* <img className="inline-block w-20 h-20 rounded-full mx-auto mb-8" src={image} alt="Ismail Mohammed Adam" /> */}
                    </div>
                </div>
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
        </>
    )
}

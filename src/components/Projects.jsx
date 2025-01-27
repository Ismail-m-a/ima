import projects from './projects.json';
import reactIcon from '../assets/image/react.svg';
import viteIcon from '../assets/image/vite.svg';
import nodeIcon from '../assets/image/node.svg';
import tailwindIcon from '../assets/image/tailwind.svg';
import bootstrapIcon from '../assets/image/bootstrap.svg';
import githubIcon from '../assets/image/github.svg';
import { FaGithub } from 'react-icons/fa';
import { MdOnlinePrediction } from "react-icons/md";

export default function Projects() {

    console.log('Icons:', { reactIcon, viteIcon, nodeIcon, tailwindIcon });
    const iconMap = {
        reactIcon: reactIcon,
        viteIcon: viteIcon,
        nodeIcon: nodeIcon,
        tailwindIcon: tailwindIcon,
        bootstrapIcon: bootstrapIcon,
        githubIcon: githubIcon
    }
    

    return (
        <>
            <section id="projects" className="bg-gray-800 py-40">
                <div className="container mx-auto px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {projects.map((project, index) => (
                            <div key={index} className="relative flex w-full group px-20">
                                <div className='flex gap-8 py-20 cursor-pointer'>
                                    {project.icon.map((iconKey, i) => (
                                        <img key={i} src={iconMap[iconKey]} alt={iconKey} className="w-16 mb-4 cursor-pointer flex" />
                                    ))}
                                </div>
                                <div className='flex absolute rounded inset-0 bg-gray-500 border-2 h-72 border-gray-100 bg-opacity-65 items-center justify-center cursor-pointer
                                    scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out'>
                                    <div className='text-white text-lg text-center px-8 py-8 min-h-[250px] flex flex-col justify-center'>
                                        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                        <p className="text-gray-200 mb-4 text-lg">{project.description}</p>
                                        {/* <a href="#" className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition">View Project</a> */}
                                        <div className='inline-flex items-center p-2 border-2 border-gray-300 hover:bg-slate-300 hover:text-black transition-all px-6 rounded-lg'>
                                            <a href="https://github.com/Ismail-m-a" target='_blank' rel='noopener noreferrer' className=' flex items-center'>    
                                                <FaGithub className='mr-2 size-8'/>
                                                <p>View project on Github</p>                          
                                            </a>
                                        </div>
                                        <div className='inline-flex items-center mt-4 p-2 border-2 border-gray-300 hover:bg-slate-300 hover:text-black transition-all px-6 rounded-lg'>
                                            <a href="https://chatifying.netlify.app" target='_blank' rel='noopener noreferrer' className='flex items-center'>
                                                <MdOnlinePrediction className='mr-2 size-8' />
                                                <p>Visit the page online</p>
                                            </a>    

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

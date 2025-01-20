import projects from './projects.json';
import reactIcon from '../assets/image/react.svg';
import viteIcon from '../assets/image/vite.svg';
import nodeIcon from '../assets/image/node.svg';

export default function Projects() {

    console.log('Icons:', { reactIcon, viteIcon, nodeIcon });
    const iconMap = {
        reactIcon: reactIcon,
        viteIcon: viteIcon,
        nodeIcon: nodeIcon
    }
    

    return (
        <>
            <section id="projects" className="bg-gray-800 py-40">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-700 shadow-md rounded-lg p-6">
                                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                                <div className='flex gap-2'>
                                    {project.icon.map((iconKey, i) => (
                                        <img key={i} src={iconMap[iconKey]} alt={iconKey} className="w-16 mb-4" />
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <a href="#" className="text-blue-400 hover:underline">View Project</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

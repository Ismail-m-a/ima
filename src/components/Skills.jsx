import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faBootstrap, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import skills from "./skills.json";
import tailwindIcon from "../assets/image/tailwind-css.svg";

export default function Skills() {
    const iconMap = {
        htmlIcon: faHtml5,
        cssIcon: faCss3Alt,
        javascriptIcon: faJs,
        reactIcon: faReact,
        nodeIcon: faNodeJs,
        bootstrapIcon: faBootstrap,
        gitIcon: faGitAlt,
        tailwindIcon: tailwindIcon,
    };

    return (
        <>
            <section id="skills" className="bg-gray-800 py-40">
                <div className="container mx-auto px-20">
                    <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.map((skill) => (
                            <div key={skill.id} className="bg-gray-700 rounded-lg p-4 text-center">
                                <FontAwesomeIcon icon={iconMap[skill.icon]} className="text-4xl mb-4" />
                                <p className="text-lg">{skill.name}</p>
                            </div> 
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
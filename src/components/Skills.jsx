import skills from "./skills.json";

import htmlIcon from "../assets/image/html.svg";
import cssIcon from "../assets/image/css.svg";
import javascriptIcon from "../assets/image/javascript.svg";
import reactIcon from "../assets/image/react.svg";
import nodeIcon from "../assets/image/node.svg";
import expressIcon from "../assets/image/express.svg";
import bootstrapIcon from "../assets/image/bootstrap.svg";
import tailwindIcon from "../assets/image/tailwind.svg";
import firebaseIcon from "../assets/image/firebase.svg";
import gitIcon from "../assets/image/git.svg";
import githubIcon from "../assets/image/github.svg";
import mysqlIcon from "../assets/image/mysql.svg";
import npmIcon from "../assets/image/npm.svg";
import dockerIcon from "../assets/image/docker.svg";

export default function Skills() {
    const iconMap = {
        htmlIcon: htmlIcon,
        cssIcon: cssIcon,
        javascriptIcon: javascriptIcon,
        reactIcon: reactIcon,
        nodeIcon: nodeIcon,
        expressIcon: expressIcon,
        bootstrapIcon: bootstrapIcon,
        tailwindIcon: tailwindIcon,
        firebaseIcon: firebaseIcon,
        gitIcon: gitIcon,
        githubIcon: githubIcon,
        mysqlIcon: mysqlIcon,
        npmIcon: npmIcon,
        dockerIcon: dockerIcon,
    };

    return (
        <>
            <section id="skills" className="py-36">
                <div className="container mx-auto px-20">
                    <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {skills.map((skill) => (
                            <div key={skill.id} className="flex text-center items-center justify-center p-4">
                                <img src={iconMap[skill.icon]} alt={skill.name} className="text-4xl mb-4 w-16 transition ease duration-700 transform hover:scale-125 cursor-pointer" />
                                <p className="text-lg">{skill.name}</p>
                            </div> 
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
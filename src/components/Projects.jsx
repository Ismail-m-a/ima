
export default function Projects() {
    

    return (
        <>
            <section id="projects" className="bg-gray-600 py-40">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {title: 'E-commerce Website', description: 'A fully functional online store built with React and Node.js'},
                            {title: 'Personal Portfolio', description: 'My personal website showcasing my skills and experiences'},
                            {title: 'Book Library', description: 'A responsive web application for managing a book library using React and Firebase'},
                            {title: 'Recipe App', description: 'A searchable recipe app using React and Edamam API'},
                            {title: 'Cleaning Company website', description: "Cleaning company website built with react"},
                            {title: 'Chat Application', description: 'A real-time chat application using React and Firebase'},
                        ].map((project, index) => (
                            <div key={index} className="bg-gray-800 shadow-md rounded-lg p-6">
                                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
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

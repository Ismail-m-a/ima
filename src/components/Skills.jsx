

export default function Skills() {
    

    return (
        <>
            <section id="skills" className="container py-20">
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
        </>
    )
}

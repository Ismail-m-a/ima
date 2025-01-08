

export default function Contact() {
    

    return (
        <>
            <section id="contact" className="bg-gray-800 py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-12 text-center">Contact Me</h2>
                    <form className="max-w-lg mx-auto">
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2">Name</label>
                            <input type="text" name="name" placeholder="Name" className="w-full px-4 py-2 border-2 rounded-lg bg-gray-500 focus:outline-none focus:border-blue-400" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2">Email</label>
                            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 border-2 rounded-lg bg-gray-500 focus:outline-none focus:border-blue-400" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2">Message</label>
                            <textarea name="message" placeholder="Message" className="w-full px-4 py-2 border-2 rounded-lg bg-gray-500 focus:outline-none focus:border-blue-400 h-32 resize-y" required></textarea>
                        </div>
                        <button type="submit" className=" px-4 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

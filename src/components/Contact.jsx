

export default function Contact() {
    

    return (
        <>
            <section id="contact" className="bg-gray-900 py-36">
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
                        <button type="submit" className=" px-4 py-3 text-white font-bold bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                            <svg className="inline-flex size-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#63E6BE" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

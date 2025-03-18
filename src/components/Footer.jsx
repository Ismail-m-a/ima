import {FaGithub, FaLinkedin, FaXTwitter, FaEnvelope} from 'react-icons/fa6';

export default function Footer() {
    

    return (
        <> 
            <section className='bg-gray-800 text-white py-24'>
                <p className='text-3lx text-center sm:text-2lx'> &copy; 2025 IMA. All rights reserved.</p>
                <div className='text-white grid grid-cols-3 py-8'>
                    <div className=" flex justify-center flex-col-2 gap-4 py-8">
                        <h3 className='text-center gap-4'>Contacts</h3>
                        <a href="mailto:your.email@example.com" className="text-white-400 text-2xl sm:text-3xl hover:text-blue-500 transition-colors rounded-lg">
                            <FaEnvelope />
                        </a>
                        <p>Email:</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div className=" text-center gap-4 py-8">
                        <h3>Quick Links</h3>

                    </div>
                    <div className="justify-center gap-4 py-8">
                        <h3 className='text-center p-2 py-2'>Follow me on social media</h3>
                        <div className='flex justify-center p-2 py-2'>
                            <a href="" className='text-white hover:text-gray-300 transition-all'>
                            <FaGithub className='size-8'/>
                            </a>
                            <p className='ml-4'>Facebook</p>
                        </div>
                        <div className='flex justify-center p-2 py-2'>    
                            <a href="" className='text-white hover:text-gray-300 transition-all'>
                                <FaLinkedin className='size-8'/>
                            </a>
                            <p className='ml-4'>Linkedin</p>
                        </div>
                        <div className='flex justify-center p-2 py-2'>    
                            <a href="" className='text-white hover:text-gray-300 transition-all'>
                                <FaXTwitter className='size-8'/>
                            </a>
                            <p className='ml-4'>X-twitter</p>
                        </div>
                    </div>    
                    
                </div>
            </section>
            {/* <section className="text-white inline-grid grid-cols-3 gap-4 py-10">
                <div className='flex justify-center'>
                    <a href="" className='text-white hover:text-gray-300 transition-all'></a>
                        <FaGithub className='size-8'/>
                </div>
                <div className='flex justify-center'>
                    <a href="" className='text-white hover:text-gray-300 transition-all'></a>
                        <FaLinkedin className='size-8'/>
                </div>
                <div className='flex justify-center'>
                    <a href="" className='text-white hover:text-gray-300 transition-all'></a>
                        <FaTwitter className='size-8'/>
                </div>

            </section> */}
        </>
    )
}

import Form from '../Components/ContactForm';
import { AnimatePresence, motion } from 'framer-motion'

export default function Contact() {
    return (
        <AnimatePresence>
            <section className="container-fluid py-5" id='contact' >
                <motion.main
                    initial={{ opacity:0, y:200 }}
                    whileInView={{ opacity:1, y:0 }}
                    viewport={{ once: true}}
                    transition={{ delay: 0.25, duration:0.75,}}
                    className="row justify-content-center gap-3 gap-lg-5 py-3 py-md-5"
                >
                    <div className="col-11 col-md-5 col-xxl-4"   >
                        <h1 className='text-center text-lg-start text-nowrap'>Contact Information</h1>
                        <div className='pt-3 pt-lg-4'>
                            <div className='d-flex gap-3 mb-3 align-items-center'>
                                <span className='cont-logo fs-4 p-2'><i className="bi bi-envelope-arrow-up"></i></span>
                                <div className='responsive-text'>
                                    <p className='p-0 m-0 primary-color text-contact'>Email</p>
                                    <a className='text-decoration-none text-white' href="mailto:r.s.murali0628@gmail.com?subject=Hello%20Murali&body=I'd%20like%20to%20connect%20with%20you."
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    > r.s.murali0628@gmail.com </a>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-3 align-items-center'>
                                <span className='cont-logo fs-4 p-2'><i className="bi bi-telephone-fill"></i></span>
                                <div className='responsive-text'>
                                    <p className='p-0 m-0 text-contact'>Phone</p>
                                    <a className='text-decoration-none text-white' href="tel:+917845435280">+917845435280</a>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-3 align-items-center'>
                                <span className='cont-logo fs-4 p-2'><i className="bi bi-geo-alt-fill"></i></span>
                                <div className='responsive-text'>
                                    <p className='p-0 m-0 text-contact'>Location</p>
                                    <p className='p-0 m-0 '>Taramani, Chennai</p>
                                </div>
                            </div>
                            <div className='d-flex gap-3 mb-3 align-items-center'>
                                <span className='cont-logo fs-4 p-2' style={{ maxHeight:'74px'}}><i className="bi bi-clock-history"></i></span>
                                <div className='responsive-text'>
                                    <p className='p-0 m-0 text-contact'>Availability</p>
                                    <p className='p-0 m-0 '>Available for new opportunities</p>
                                </div>
                            </div>
                            <div className='row py-2'>
                                <h5>Connect With Me</h5>
                                <div className=' pt-2 col-12 responsive-socials'>
                                    <p className='connect-icon'>
                                        <motion.a
                                            href= "https://github.com/muralikrishnan28"
                                            animate={{
                                                transition:{ delay:0.1, duration: 0.4, ease: "ease" }
                                            }}
                                            target="_blank"
                                            className='fs-6 text-decoration-none'
                                        >
                                            <i className="bi bi-github pe-1 fs-4"></i>   GitHub
                                        </motion.a>
                                    </p>
                                    <p className='connect-icon'>
                                        <motion.a
                                            href= "https://linkedin.com/in/murali-krishnan-s"
                                            animate={{
                                                transition:{ delay:0.1, duration: 0.4, ease: "ease" }
                                            }}
                                            target="_blank"
                                            className=' fs-6 text-decoration-none'
                                        >
                                            <i className="bi bi-linkedin pe-1 fs-4"></i>   LinkedIn
                                        </motion.a>
                                    </p>
                                    <p className='connect-icon'>
                                        <motion.a
                                            href= "https://www.hackerrank.com/profile/r_s_murali0628"
                                            animate={{
                                                transition:{ delay:0.1, duration: 0.4, ease: "ease" }
                                            }}
                                            target="_blank"
                                            className=' fs-6 text-decoration-none'
                                        >
                                            <span className="text-nowrap"><i className="bi bi-h-circle-fill pe-1 fs-4"></i>   Hacker</span> Rank
                                        </motion.a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-5 col-xxl-5 pt-3 pt-md-0">
                        <h1 className='text-center text-lg-start '>Send me a Message</h1>
                        <Form />
                    </div>
                </motion.main>
            </section>
        </AnimatePresence>
    )
}

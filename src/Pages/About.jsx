import { motion } from 'framer-motion'
import detailIcon from '../assets/icons/detail.svg'
import adaptabilityIcon from '../assets/icons/corporate-culture.svg'
import creativeIcon from '../assets/icons/new-business.svg'

export default function About() {
    return (
        <section className="container-fluid mt-4 py-5" id='about' >
            <motion.div
                initial={{ opacity:0, scale:0.7}}
                whileInView={{ opacity: 1, scale:1}}
                transition={{ delay: 0.25, duration: 0.75}}
                viewport={{ once: true}}
            >
                <div className="pt-lg-5">
                    <h1 className="text-center">About Me</h1>
                </div>
                <div className="row justify-content-center align-items-center gap-5">
                    <main className="col-11 col-md-6">
                        <div>
                            <div className='pt-3'>
                                <h4>Professional Background</h4>
                                <p className='ps-2 pt-3 responsive-text '>
                                    Recent Computer Science Graduate (Anna University) with strong fundamentals in data structures and problem solving.
                                    Experienced in frontend and backend development, API integration, and deployment.
                                    Constantly exploring new libraries, frameworks, and tools to stay ahead in tech.
                                    Team oriented and eager to collaborate on impactful projects.
                                </p>
                            </div>
                            <div className='pt-3'>
                                <h4>My Expertise</h4>
                                <ul className=" ms-3 ps-2 pt-3 responsive-text">
                                    <li>
                                        <p>Frontend Development: Crafting responsive and accessible interfaces with React.js, Bootstrap, and Framer Motion to deliver smooth user experiences.</p>
                                    </li>
                                    <li>
                                        <p>Backend Development: Building secure, scalable APIs using Node.js and Express.js, with database management powered by MS SQL Server.</p>
                                    </li>
                                    <li>
                                        <p>Problem Solving: Applying analytical skills and structured thinking to debug, optimize, and deliver high quality code.</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='pt-3'>
                                <h4>Education</h4>
                                <div className='ps-2 pt-3 responsive-text'>
                                    <div className="card card-hover mb-4">
                                        <div className="card-body">
                                            <h5 className="card-title">B.E - Computer Science and Engineering</h5>
                                            <p className="card-text">University College of Engineering Villupuram</p>
                                            <p className="card-text fw-bolder primary-color">2021 - 2025</p>
                                        </div>
                                    </div>
                                    <div className="card card-hover mb-4">
                                        <div className="card-body">
                                            <h5 className="card-title">HSC</h5>
                                            <p className="card-text">Siga Higher Scecondary School</p>
                                            <p className="card-text fw-bolder primary-color">2019 - 2020</p>
                                        </div>
                                    </div>
                                    <div className="card card-hover mb-4">
                                        <div className="card-body">
                                            <h5 className="card-title">SSLC</h5>
                                            <p className="card-text">Siga Higher Scecondary School</p>
                                            <p className="card-text fw-bolder primary-color">2017 - 2018</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-3'>
                                    <h4>Certification</h4>
                                    <div className="ps-2 pt-3 responsive-text">
                                        <div className="card card-hover mb-4">
                                            <div className="card-body">
                                                <h5 className="card-title primary-color">Internship in Web Development</h5>
                                                <p className="card-text text-muted">Tech Octanet Services Pvt Ltd</p>
                                            </div>
                                        </div>
                                        <div className="card card-hover mb-4">
                                            <div className="card-body">
                                                <h5 className="card-title primary-color">SQL Training</h5>
                                                <p className="card-text text-muted">Besant Technologies.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <h4 className='pt-3'>My Approach</h4>
                                    <p className="ps-2 pt-3 responsive-text">
                                        I believe in writing clean, maintainable code and designing applications with the end user in mind.
                                        My projects reflect a mix of creativity and engineering from simple utilities to full fledged applications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </main>
                    <aside className=" d-none d-md-block col-md-4 col-lg-3 py-5 about-aside" >
                        <div className="rounded py- px-1 px-lg-3 text-center responsive-text">
                            <div className=" skill-set py-5 mb-5 ">
                                <div className="card card-hover p-4 py-5">
                                    <h5 className="card-title "><span className="fs-1 d-block mb-md-3"><img src={detailIcon} width={'60px'} style={{ filter: 'invert(20%) sepia(100%) saturate(500%) hue-rotate(330deg)' }} /></span>Detail Oriented</h5>
                                    <p className="card-text">Writing clean, maintainable code and focusing on quality.</p>
                                </div>
                            </div>
                            <div className=" skill-set pb-5 mb-5">
                                <div className="card card-hover p-4 py-5">
                                    <h5 className="card-title"><span className="fs-1 d-block mb-md-3"><img src={adaptabilityIcon} width={'60px'} style={{ filter: 'invert(45%) sepia(100%) saturate(500%) hue-rotate(180deg)' }} /></span>Adaptability</h5>
                                    <p className="card-text">Quick to learn new tools, frameworks, and technologies.</p>
                                </div>
                            </div>
                            <div className=" skill-set pb-5">
                                <div className="card card-hover p-4 py-5">
                                    <h5 className="card-title"><span className="fs-1 d-block mb-md-3"><img src={creativeIcon} width={'60px'} /></span>Creativity & Innovation</h5>
                                    <p className="card-text">Bringing fresh ideas to improve user experiences and workflows.</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </motion.div>
        </section>
    )
}

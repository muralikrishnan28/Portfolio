import { AnimatePresence, motion } from 'framer-motion'
import problemSolvingIcon from '../assets/icons/problem-solving.svg'
import growthIcon from '../assets/icons/growth.svg'
import collaborativeIcon from '../assets/icons/collaboration.svg'
import timeIcon from '../assets/icons/time-management.svg'

export default function Skills() {
    return (
        <AnimatePresence>
            <motion.section
                className="container-fluid py-3 py-lg-5" id='skills'
                initial={{ opacity:0, scale:0.9, y:15, x:15 }}
                whileInView={{ opacity: 1, scale:1, y:0, x:0 }}
                transition={{delay:0.35, duration: 0.5}}
                viewport={{ once: true}}
                style={{overflow:'hidden'}}
            >
                <motion.div
                    initial={{opacity:0, x:1000}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:1}}
                    className="row justify-content-center py-3 py-lg-5"
                >
                    <div className="col-11 col-md-10 col-lg-10 ">
                        <div className="text-center pb-5">
                            <h1>Skills & Technologies</h1>
                            <p className="lead fw-normal responsive-text secondary-color">My technical expertise and proficiency levels</p>
                        </div>
                        <div className="row justify-content-center gap-5">
                            <div className="col-11 col-md-5 col-xl-3 rounded border p-3 pb-4">
                                    <h3>Front-end Development</h3>
                                    <div className='mt-4'>
                                        <div className="d-flex lead responsive-text fw-medium justify-content-between">
                                            <p>React</p>
                                            <p className='text-info'>90%</p>
                                        </div>
                                        <div className="progress" role="progressbar" aria-label="striped example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "90%" }}></div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <div className="d-flex lead responsive-text fw-medium justify-content-between">
                                            <p>JavaScript</p>
                                            <p className='text-info'>85%</p>
                                        </div>
                                        <div className="progress" role="progressbar" aria-label="striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "85%" }}></div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <div className="d-flex lead responsive-text fw-medium justify-content-between">
                                            <p>HTML & CSS</p>
                                            <p className='text-info'>95%</p>
                                        </div>
                                        <div className="progress" role="progressbar" aria-label="striped example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "95%" }}></div>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-11 col-md-5 col-xl-3 rounded border p-3 pb-4">
                                    <h3>Back-end Development</h3>
                                    <div className='mt-4'>
                                        <div className="d-flex lead responsive-text fw-medium justify-content-between">
                                            <p>Node.js</p>
                                            <p className='text-info'>80%</p>
                                        </div>
                                        <div className="progress" role="progressbar" aria-label="striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "75%" }}></div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <div className="d-flex lead responsive-text fw-medium  justify-content-between">
                                            <p>Express.js</p>
                                            <p className='text-info'>85%</p>
                                        </div>
                                        <div className="progress" role="progressbar" aria-label="striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "85%" }}></div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <div className="d-flex lead responsive-text fw-medium  justify-content-between">
                                            <p>RESTful APIs</p>
                                            <p className='text-info'>80%</p>
                                        </div>
                                        <div className="progress" role="progressbar" aria-label="striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "80%" }}></div>
                                        </div>
                                    </div>
                            </div>
                            <div className="col-11 col-md-5 col-xl-3 rounded border p-3 pb-4">
                                    <h3>Database & Tools</h3>
                                    <div className='mt-4'>
                                        <div className="d-flex lead responsive-text fw-medium justify-content-between">
                                            <p className='pe-3'>SQL Server & SSMS</p>
                                            <p className='text-info'>80%</p>
                                        </div>
                                        <div className="progress" role="progressbar" aria-label="striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "80%" }}></div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <div className="d-flex lead responsive-text fw-medium justify-content-between">
                                            <p>Mongo DB</p>
                                            <p className='text-info'>70%</p>
                                        </div>
                                        <div className="progress" role="progressbar" aria-label="striped example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "70%" }}>
                                        </div>
                                    </div>
                                    </div>
                                    <div className='mt-3'>
                                        <div className="d-flex lead responsive-text fw-medium justify-content-between">
                                            <p>Git & GitHub</p>
                                            <p className='text-info'>75%</p>
                                        </div>
                                            <div className="progress" role="progressbar" aria-label="striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{width: "75%" }}>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <h1 className="text-center mt-3 pt-5 pb-4">Soft Skills</h1>
                        <div className="row justify-content-center gap-5 gap-xxl-0 text-center responsive-text">
                            <div className="col-8 col-md-5 col-xxl-3 skill-set d-flex">
                                <div className="card card-hover p-4 py-5 w-100 h-100">
                                    <h5 className="card-title">
                                        <span className="fs-1 d-block mb-3">
                                            <img src={problemSolvingIcon} width={'90px'} />
                                        </span>
                                        Problem Solver
                                    </h5>
                                    <p className="card-text">Turning challenges into solutions.</p>
                                </div>
                            </div>
                            <div className="col-8 col-md-5 col-xxl-3 skill-set d-flex">
                                <div className="card card-hover p-4 py-5 w-100 h-100">
                                    <h5 className="card-title">
                                        <span className="fs-1 d-block mb-3">
                                            <img src={growthIcon} width={'90px'} />
                                        </span>
                                        Growth Mindset
                                    </h5>
                                    <p className="card-text">Always learning, always improving.</p>
                                </div>
                            </div>
                            <div className="col-8 col-md-5 col-xxl-3 skill-set d-flex">
                                <div className="card card-hover p-4 py-5 w-100 h-100">
                                    <h5 className="card-title">
                                        <span className="fs-1 d-block mb-3">
                                            <img src={collaborativeIcon} width={'90px'} />
                                        </span>
                                        Collaborative
                                    </h5>
                                    <p className="card-text">Thrives in collaborative environments.</p>
                                </div>
                            </div>
                            <div className="col-8 col-md-5 col-xxl-3 skill-set d-flex">
                                <div className="card card-hover p-4 py-5 w-100 h-100">
                                    <h5 className="card-title">
                                        <span className="fs-1 d-block mb-3">
                                            <img src={timeIcon} width={'90px'} />
                                        </span>
                                        Time Smart
                                    </h5>
                                    <p className="card-text">Efficient at meeting deadlines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        </AnimatePresence>
    )
}

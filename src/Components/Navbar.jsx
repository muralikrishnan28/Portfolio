import { motion,useScroll } from "framer-motion";

export default function Navbar () {
    const { scrollYProgress } = useScroll();
    return (
        <motion.nav
        initial={{opacity:0, y:-180}}
        animate={{opacity:1, y:0, transition:{ duration:0.5, ease:'easeOut' } }}
        className="navbar bg-white fixed-top shadow-sm"
        >
            <div className="container-fluid">
                <div className="mx-auto mx-lg-5">
                    <h2 className="text-primary">Murali Krishnan S</h2>
                </div>
                <div>
                    <ul className='d-none d-lg-flex gap-2 list-unstyled mb-0 fs-6' >
                        <li><a href="#home" className="nav-btn text-decoration-none fw-medium" >Home</a></li>
                        <li><a href="#about" className="nav-btn text-decoration-none fw-medium" >About</a></li>
                        <li><a href="#projects" className="nav-btn text-decoration-none fw-medium" >Projects</a></li>
                        <li><a href="#skills" className="nav-btn text-decoration-none fw-medium" >Skills</a></li>
                        <li className="me-5"><a href="#contact" className="nav-btn text-decoration-none fw-medium" >Contact</a></li>
                    </ul>
                </div>
            </div>
            {/* Progress bar */}
            <motion.div
                className="progress-bar-scroll"
                style={{ scaleX: scrollYProgress }}
            />
        </motion.nav>
    )
}

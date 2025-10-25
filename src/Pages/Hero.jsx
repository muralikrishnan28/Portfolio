import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/Mk.jpg';

const TypeWriter = ({ text, speed =120 }) => {
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0,i+1));
            i++;
            if(text.length === i) clearInterval(interval);
        },speed);
        return () => clearInterval(interval);
    },[text,speed]);
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
        >
            {displayed}
            <span className="blinking-cursor"> </span>
        </motion.span>
    );
}

export default function Hero() {
    return (
        <section className="container-fluid py-5" id='home' >
            <motion.div
                initial={{x:'-100vw',}}
                animate={{x:0, }}
                transition={{ delay:0.25, duration:0.75 }}
                className="row py-5  my-5 justify-content-center align-items-center gap-3 gap-lg-5"
            >
                <div className="text-center text-white col-11 d-md-none ">
                    <h1 className="d-lg-none primary-color text-lg-start display-1 fw-medium">Hi,<TypeWriter text={" I’m MURALI KRISHNAN"} /></h1>
                    <img src={profile} className=" p-1 img-fluid mx-auto mt-5 profile" loading="lazy" alt="Profile" />
                </div>
                <div className="text-white col-11 col-md-6 col-lg-6" >
                    <h1 className=" primary-color text-lg-start display-4 fw-medium d-none d-md-block">Hi,<TypeWriter text={" I’m MURALI KRISHNAN"} /></h1>
                    <h4 className="text-center text-md-start fst-italic mb-3 secondary-color ">A passionate Full-Stack Developer crafting seamless digital experiences.</h4>
                    <div>
                        <p className="lead fw-normal responsive-text ">
                            I specialize in building responsive, scalable, and user-friendly web applications using React.js, Node.js, and Express.js.
                            With a solid foundation in JavaScript, SQL, C and C#, I love transforming ideas into functional and visually appealing products.
                        </p>
                    </div>
                    <div className="text-center mt-4 text-md-start">
                        <a className='btn btn-primary mt-3 mt-lg-0 me-3 text-white text-decoration-none responsive-text' href="#contact">Get in Touch</a>
                        <a className='btn btn-primary mt-3 mt-lg-0 me-3 text-white text-decoration-none responsive-text' href="#projects">View my Work</a>
                        <a className='btn btn-warning mt-3 mt-lg-0 me-3 text-black text-decoration-none responsive-text' href="/MURALI-KRISHNAN-S.pdf" target='_blank'>View Resume</a>
                    </div>
                </div>
                <div className="d-none d-md-block text-center hero-card card text-white border border-white  border-2 border-opacity-50 col-11 col-md-5 col-lg-4 col-xxl-3 ">
                    <img src={profile} className=" p-1 img-fluid mx-auto mt-5 profile" loading="lazy" alt="Profile" />
                    <div className="card-body col-12 px-3 px-lg-4 px-xl-5">
                        <h4 className="card-title ">Murali Krishnan S</h4>
                        <h6 className="card-title">Full-Stack Developer</h6>
                        <div className="row pt-3 pb-3 p-0 mx-auto">
                            <p className="h4 col-6 text-warning ">Fresher</p>
                            <p className=" lead fw-normal col-6 text-warning"><span className='h4'>3+</span><br /> Projects</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
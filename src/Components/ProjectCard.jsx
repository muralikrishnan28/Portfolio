import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

export default function ProjectCard({ image, title, techStack, description, features, git, live }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.7, once: false });
    const [isHovered, setIsHovered] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    // Detect if device is touch-based (mobile/tablet)
    const isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;

    useEffect(() => {
        if (isTouchDevice) {
        setShowOverlay(isInView);
        } else {
        setShowOverlay(isHovered);
        }
    }, [isHovered, isInView, isTouchDevice]);

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial={{ opacity: 1, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
            >
                <div
                    className="card mb-5 project-card"
                    onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
                    onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
                >
                    {/* Image Container with Overlay */}
                    <div className="image-container">
                        <img src={image} loading="lazy" className="img-fluid project-image vw-100" alt={title} />
                        {/* Animated Overlay for Links */}
                        <motion.div
                            className="overlay"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: showOverlay ? 1 : 0,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <motion.a
                                className="link-button"
                                href={git || "#"}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{
                                scale: showOverlay ? 1 : 0,
                                rotate: showOverlay ? 0 : -180,
                                transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub repo"
                            >
                                <i className="bi bi-github"></i>
                            </motion.a>
                            {live && (
                                <motion.a
                                    href={live || "#"}
                                    className="link-button"
                                    initial={{ scale: 0, rotate: 180 }}
                                    animate={{
                                        scale: showOverlay ? 1 : 0,
                                        rotate: showOverlay ? 0 : 180,
                                        transition: { delay: 0.1, duration: 0.4, ease: "easeIn" },
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Visit Website"
                                >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </motion.a>
                            )}
                        </motion.div>
                    </div>
                    {/* Card Body */}
                    <div className="card-body">
                        <h4 className="card-title py-1 me-4">{title}</h4>
                        <p>
                            {techStack.map((tech, index) => (
                                <span className="badge mb-2 me-3 p-2 fw-normal" key={index}>
                                {tech}
                                </span>
                            ))}
                        </p>
                        <p className="responsive-text">{description}</p>
                        <h5>Key Features:</h5>
                        <ul className="card-text pt-2 pb-2 responsive-text">
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
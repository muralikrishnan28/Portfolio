import Weather from '../assets/Weather.png';
import News from '../assets/News.png';
import Thinkboard from '../assets/Thinkboard.png';
import ProjectCard from '../Components/ProjectCard';

export default function Projects() {
    return (
        <section className="container-fluid py-5 py-lg-5" id='projects'>
            <main className='row justify-content-center py-3 py-lg-5'>
                <div className="col-11 col-md-10 col-lg-9 col-xl-6">
                    <div className="text-center pb-5">
                        <h1>Featured Projects</h1>
                        <p className="lead fw-normal responsive-text secondary-color">A showcase of my recent works and achievement</p>
                    </div>
                    <div>
                        < ProjectCard
                            image={Thinkboard}
                            title={"ThinkBoard – Note Creation App"}
                            techStack={["React.js", "Express.js", "Mango DB", "Framer Motion", "Axios"]}
                            description={"Developed a note management app with React.js frontend & Express.js backend. Used dotenv for security and Upstash Redis for rate limiting. Added Framer Motion animations for smooth UX."}
                            features={[
                                "Create, view, and manage notes with title & detailed content.",
                                "Express.js backend with dotenv for secure environment handling.",
                                "Rate limiting with Upstash Redis for security & scalability.",
                                "Framer Motion animations for smooth user interactions."
                            ]}
                            git={"https://github.com/muralikrishnan28/Thinkboard_MERN"}
                            live={"https://thinkboard-mern-frontend.onrender.com/"}
                        />
                        < ProjectCard
                            image={News}
                            title={"News Mag – React News App"}
                            techStack={["React", "JavaScript", "Bootstrap", "Axios"]}
                            description={"A responsive news aggregator built with React.js to deliver real-time global news. Integrated NewsAPI.org to fetch and display the latest updates across categories: Technology, Health, Business, Science, Sports, and Entertainment."}
                            features={[
                                "Fetches real-time news data from NewsAPI.org.",
                                "Categorized browsing: Technology, Health, Business, Science, Sports, Entertainment.",
                                "Card-based UI with images, titles, and summaries for easy reading.",
                                "“Read More” button redirects users to original articles in new tabs."
                            ]}
                            git={"https://github.com/muralikrishnan28/News-Mag---React-App"}
                            live={"https://news-mag-react-application.netlify.app/"}
                        />
                        < ProjectCard
                            image={Weather}
                            title={"Weather Application"}
                            techStack={["React", "JavaScript", "Bootstrap", "Weather Api"]}
                            description={"Built a real-time weather app using React & OpenWeatherMap API. Integrated Axios for API requests and Bootstrap for a clean UI. Deployed on Netlify"}
                            features={[
                                "Real-time weather updates with temperature, humidity, and conditions.",
                                "API integration using Axios for reliable data fetching.",
                                "Responsive UI styled with Bootstrap for cross-device support.",
                                "Deployed on Netlify for easy access."
                            ]}
                            git={"https://github.com/muralikrishnan28/Weather"}
                            live={"https://weatherapplicationproj.netlify.app/"}
                        />
                    </div>
                </div>
            </main>
        </section>
    )
}

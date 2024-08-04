import React from 'react';
import image1 from '../assets/image1.jpg'; // Ensure this path is correct
import animation3 from '../assets/animation3.gif'; // Ensure this path is correct
import { FaSearch, FaLightbulb, FaHandsHelping, FaBusinessTime, FaRobot, FaCog } from 'react-icons/fa'; // Import FaCog here
import '../App.css';

const Home = () => {
    return (
        <div className="container">
            <nav className="navbar">
           
            </nav>
            <section className="introduction">
                <div>
                    <h3>Welcome to the AI-Powered Patent Due Diligence Platform</h3>
                    <p>
                        Our platform leverages cutting-edge AI technology to streamline the patent due diligence process. 
                        Whether you are a researcher, inventor, or legal professional, our system is designed to provide 
                        comprehensive and actionable insights into patent data. Utilize advanced AI algorithms to conduct thorough patent searches, analyze patent abstracts, and detect potential challenges in your applications. Our platform offers practical suggestions for overcoming obstacles, helping you to navigate the complex landscape of intellectual property.
                        Experience the efficiency of AI-driven insights, guiding you towards new opportunities and enhancing your research and development efforts.

                    </p>
                    
                </div>
                
                <img src={image1} alt="AI-powered patent analysis" className="intro-image" />
            </section>
            <h2 id="capabilities" className="section-heading">Our Goals</h2>
            <div className="cards-container">
                <div className="card">
                    <h3>Advanced Patent Search</h3>
                    <p>Our advanced search functionality allows you to quickly locate patents using precise keywords and specific topics, saving you valuable time and effort.</p>
                    <FaSearch className="moving-icon" />
                </div>
                <div className="card">
                    <h3>Patent Abstract Analysis</h3>
                    <p>Utilize our AI to thoroughly analyze patent abstracts, delivering detailed and insightful summaries to assist you in understanding complex patent information.</p>
                    <FaLightbulb className="moving-icon" />
                </div>
                <div className="card">
                    <h3>Challenge Detection</h3>
                    <p>Identify potential challenges in your patent applications with our AI-powered analysis and receive practical suggestions for overcoming these obstacles.</p>
                    <FaHandsHelping className="moving-icon" />
                </div>
                <div className="card">
                    <h3>AI-Driven Insights</h3>
                    <p>Harness the power of AI to gain deep insights and innovative suggestions, guiding you towards new opportunities and enhancing your research and development efforts.</p>
                    <FaCog className="moving-icon" />
                </div>
                <div className="card">
                    <h3>Document Search</h3>
                    <p>Seamlessly search through your documents and official patent data with SearchAI, using both semantic and keyword-based queries to find exactly what you need.</p>
                    <FaBusinessTime className="moving-icon" />
                </div>
                <div className="card">
                    <h3>Interactive AI Support</h3>
                    <p>Engage with ChatAI, our intelligent chatbot, designed to understand and summarize patent and legal documents, providing you with real-time support and information.</p>
                    <FaRobot className="moving-icon" />
                </div>
            </div>
            <section className="future-capabilities">
                <div>
                    <h3>Future Capabilities</h3>
                    <ul>
                        <li>Engage with an interactive chatbot for real-time assistance with patent searches, offering personalized support and guidance throughout your journey.</li>
                        <li>Access advanced tools for trend analysis and visualize the patent landscape to make well-informed decisions based on the latest data.</li>
                        <li>Assess the market impact of new patents with our comprehensive evaluation tools, helping you understand the potential and risks of your innovations.</li>
                        <li>Integrate with extensive legal databases to perform detailed legal analyses, ensuring your patents are robust and legally sound.</li>
                    </ul>
                </div>
                <img src={animation3} alt="Future capabilities" className="info-image" />
            </section>
            <section className="uses">
                <div className="uses-heading">
                    <center><h3>Future Uses of the Platform</h3></center>
                </div>
                <div className="uses-container">
                    <div className="use-case">
                        <FaSearch className="use-icon" />
                        <p>Researchers can effortlessly find and analyze patents related to their field, speeding up their research process with accurate and comprehensive data.</p>
                    </div>
                    <div className="use-case">
                        <FaLightbulb className="use-icon" />
                        <p>Inventors can evaluate the uniqueness of their ideas and identify potential issues early on, making the patent application process smoother and more successful.</p>
                    </div>
                    <div className="use-case">
                        <FaHandsHelping className="use-icon" />
                        <p>Legal professionals can enhance their due diligence with thorough insights and analyses, streamlining their workflow and improving the quality of their legal assessments.</p>
                    </div>
                    <div className="use-case">
                        <FaBusinessTime className="use-icon" />
                        <p>Businesses can explore new patent opportunities and assess risks effectively, enabling strategic decision-making and innovation management.</p>
                    </div>
                </div>
            </section>
            <div className="ai-assisted-search">
                <FaRobot className="ai-icon" />
                <h3>AI Assisted Search and More! Coming Soon</h3>
            </div>
            <footer className="footer">
                <p>&copy; 2024 Patent Due Diligence AI. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;

























































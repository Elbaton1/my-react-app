import React from 'react';
import image1 from '../assets/image1.jpg'; // Ensure this path is correct
import animation1 from '../assets/animation1.gif'; // Ensure this path is correct
import animation3 from '../assets/animation3.gif'; // Ensure this path is correct
import '../App.css';

const Home = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#capabilities">Our Capabilities</a></li>
                </ul>
            </nav>
            <section className="introduction">
                <div>
                    <h3>Welcome to the AI-Powered Patent Due Diligence Platform</h3>
                    <p>
                        Our platform leverages cutting-edge AI technology to streamline the patent due diligence process. 
                        Whether you are a researcher, inventor, or legal professional, our system is designed to provide 
                        comprehensive and actionable insights into patent data.
                    </p>
                </div>
                <img src={image1} alt="AI-powered patent analysis" className="intro-image" />
            </section>
            <h2 id="capabilities" className="section-heading">Our Capabilities</h2>
            <div className="cards-container">
                <div className="card">
                    <h3>Advanced Patent Search</h3>
                    <p>Our advanced search functionality allows you to quickly locate patents using precise keywords and specific topics, saving you valuable time and effort.</p>
                </div>
                <div className="card">
                    <h3>Patent Abstract Analysis</h3>
                    <p>Utilize our AI to thoroughly analyze patent abstracts, delivering detailed and insightful summaries to assist you in understanding complex patent information.</p>
                </div>
                <div className="card">
                    <h3>Challenge Detection</h3>
                    <p>Identify potential challenges in your patent applications with our AI-powered analysis and receive practical suggestions for overcoming these obstacles.</p>
                </div>
                <div className="card">
                    <h3>AI-Driven Insights</h3>
                    <p>Harness the power of AI to gain deep insights and innovative suggestions, guiding you towards new opportunities and enhancing your research and development efforts.</p>
                </div>
                <div className="card">
                    <h3>Comprehensive Document Search</h3>
                    <p>Seamlessly search through your documents and official patent data with SearchAI, using both semantic and keyword-based queries to find exactly what you need.</p>
                </div>
                <div className="card">
                    <h3>Interactive AI Support</h3>
                    <p>Engage with ChatAI, our intelligent chatbot, designed to understand and summarize patent and legal documents, providing you with real-time support and information.</p>
                </div>
            </div>
            <div className="guided-search">
                <img src={animation1} alt="Search Animation" className="search-animation" />
                <h3>AI-assisted search coming soon</h3>
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
                <div>
                    <h3>Current and Future Uses of the Platform</h3>
                    <ul>
                        <li>Researchers can effortlessly find and analyze patents related to their field, speeding up their research process with accurate and comprehensive data.</li>
                        <li>Inventors can evaluate the uniqueness of their ideas and identify potential issues early on, making the patent application process smoother and more successful.</li>
                        <li>Legal professionals can enhance their due diligence with thorough insights and analyses, streamlining their workflow and improving the quality of their legal assessments.</li>
                        <li>Businesses can explore new patent opportunities and assess risks effectively, enabling strategic decision-making and innovation management.</li>
                    </ul>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 Patent Due Diligence AI. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;











































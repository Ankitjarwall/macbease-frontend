import React from 'react'
import './index.css';
export default function Home() {
    return (
        <div>
            <div className='bgc-div'>
                <div className='bgc-div-white'>

                    <div id='home-top-div'>
                        <span id='home-highlight-together'>Together</span><span id='home-we_will' > We Will</span>
                        <div id='home-Rebuild_Our_Future'>Rebuild Our Future</div>
                        <div id='home-demotext'>This is the demo text from macbease</div>
                        <button className="home-top-btn" type='button'>Click here</button>
                        <div id='home-clg-boy'></div>
                    </div>
                </div>
            </div>

            <div className='home-box , home-skyblue'>Education</div>
            <div className='home-box , home-yellow'>Health</div>
            <div className='home-box , home-orange'>Food</div>

            <div className='home-ourmission-border'>
                <div>

                    <div className='home-ourmission-text'><h2>Our mission</h2>
                        Our mission is to provide our customers with the best possible demo experience.  We are committed to providing excellent customer service and making sure that our demos are informative, engaging, and easy to understand.<br></br><button className="home-top-btn" type='button'>Click me</button></div>
                    <div className='home-ourmission-img , vision-img'></div>
                </div>

                <div>

                    <div className='home-ourmission-img , mission-img'></div>
                    <div className='home-ourmission-text'><h2>Our vision </h2>Our vision is to be the leading provider of demo services in the industry. We want to be known for our high-quality demos, excellent customer service, and innovative approach to demoing. We believe that our demos can help businesses of all sizes achieve their goals and grow their businesses.<br></br><button className="home-top-btn" type='button'>Click me</button></div>
                </div>

            </div>


            <div className='home-ourprojects'><h3>Ongoing Projects</h3>
                <div className='home-ongoing-projects , ongoing1'></div>
                <div className='home-ongoing-projects , ongoing2'></div>
                <div className='home-ongoing-projects , ongoing3'></div>
                <div className='home-ongoing-projects , ongoing4'></div>

            </div>
        </div>
    )
}

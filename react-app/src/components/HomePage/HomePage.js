// import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './homepage.css'

const HomePage = () => {
    const history = useHistory();

    const redirect = () => {
        history.push('/explore')
    }

    return (
        <div className='home-container'>
            <div className='home-image-div'>
                <img className='home-image' src='https://blog.trello.com/hs-fs/The_Etiquette_Of_Taking_Time_Off_V2.png' alt='take-time-off'/>
            </div>
            <div className='home-explore-all'>Not sure where to go? Perfect</div>
            <div>
                <button onClick={redirect} className='home-explore-redirect'>I'm Flexible</button>
            </div>
            <div className='home-explore-label-div'>
                <span className='home-explore-label'>Inspiration for your next trip</span>
            </div>
            <div className='home-explore-container'>
                <div className='Tampa'>
                    <a className='Tampa-link' href='/tampa'>
                        <div className='Tampa-redirect'>
                            <img className='tampa-icon' src='https://res.cloudinary.com/duscvhetx/image/upload/v1641187892/tampa/tampa-icon_brnbsa.png' alt='tampa'/>
                            <span className='Tampa-title'>Tampa</span>
                        </div>
                    </a>
                </div>
                <div className='Miami'>
                    <a className='Miami-link' href='/miami'>
                        <div className='Miami-redirect'>
                            <img className='miami-icon' src='https://res.cloudinary.com/duscvhetx/image/upload/v1641187884/miami/miami-icon_joky6a.jpg' alt='miami'/>
                            <span className='Miami-title'>Miami</span>
                        </div>
                    </a>
                </div>
                <div className='Charleston'>
                    <a className='Charleston-link' href='/charleston'>
                        <div className='Charleston-redirect'>
                            <img className='charleston-icon' src='https://res.cloudinary.com/duscvhetx/image/upload/v1641187866/charleston/charleston-icon_x9xvj1.png' alt='charleston'/>
                            <span className='Charleston-title'>Charleston</span>
                        </div>
                    </a>
                </div>
                <div className='Charlotte'>
                    <a className='Charlotte-link' href='/charlotte'>
                        <div className='Charlotte-redirect'>
                            <img className='charlotte-icon' src='https://res.cloudinary.com/duscvhetx/image/upload/v1641187874/charlotte/charlotte-icon_wsplb1.png' alt='charlotte'/>
                            <span className='Charlotte-title'>Charlotte</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className='home-info'>
                {/* <a className='home-name'>
                    Omkar Mehendale
                </a> */}
                <span className='home-name'>
                    Omkar Mehendale
                </span>
                <a className='home-linkedin' href='https://www.linkedin.com/in/omkar-mehendale-4a8879153/'>
                    LinkedIn
                </a>
                <a className='home-github' href='https://github.com/mehendaleo'>
                    GitHub
                </a>
            </div>
        </div>
    )
};

export default HomePage;

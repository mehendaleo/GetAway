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
                <img className='home-image' src='https://blog.trello.com/hs-fs/The_Etiquette_Of_Taking_Time_Off_V2.png'/>
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
                    <div className='Tampa-redirect'>
                        <a className='Tampa-link' href='/tampa'>
                            <img className='tampa-icon' src='https://res.cloudinary.com/duscvhetx/image/upload/v1641187892/tampa/tampa-icon_brnbsa.png'/>
                        </a>
                        <span className='Tampa-title'>Tampa</span>
                    </div>
                </div>
                <div className='Miami'>
                    <div className='Miami-redirect'>
                        <a className='Miami-link' href='/miami'>
                            <img className='miami-icon' src='https://res.cloudinary.com/duscvhetx/image/upload/v1641187884/miami/miami-icon_joky6a.jpg'/>
                        </a>
                        <span className='Miami-title'>Miami</span>
                    </div>
                </div>
                <div className='Charleston'>
                    <div className='Charleston-redirect'>
                        <a className='Charleston-link' href='/charleston'>
                            <img className='charleston-icon' src='https://res.cloudinary.com/duscvhetx/image/upload/v1641187866/charleston/charleston-icon_x9xvj1.png'/>
                        </a>
                        <span className='Charleston-title'>Charleston</span>
                    </div>
                </div>
                <div className='Charlotte'>
                    <div className='Charlotte-redirect'>
                        <a className='Charlotte-link' href='/charlotte'>
                            <img className='charlotte-icon' src='https://res.cloudinary.com/duscvhetx/image/upload/v1641187874/charlotte/charlotte-icon_wsplb1.png'/>
                        </a>
                        <span className='Charlotte-title'>Charlotte</span>
                    </div>
                </div>
            </div>
            <div className='home-info'>
                <a className='home-name'>
                    Omkar Mehendale
                </a>
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

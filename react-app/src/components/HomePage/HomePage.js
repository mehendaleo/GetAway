// import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const redirect = () => {
        history.push('/explore')
    }

    return (
        <div className='home-container'>
            <div className='home-image'>
                <img></img>
            </div>
            <div className='home-explore-all'>Not sure where to go? Perfect</div>
            <div>
                <button onClick={redirect}>I'm Flexible</button>
            </div>
            <div className='home-explore-label-div'>
                <span className='home-explore-label'>Inspiration for your next trip</span>
            </div>
            <div className='home-explore-container'>
                <div className='Tampa'>
                    <div className='Tampa-redirect'>
                        <a className='Tampa-link' href='/tampa'>
                            Tampa Image
                        </a>
                        <span className='Tampa-title'>Tampa</span>
                    </div>
                </div>
                <div className='Miami'>
                    <div className='Miami-redirect'>
                        <a className='Miami-link' href='/Miami'>
                            Miami Image
                        </a>
                        <span className='Miami-title'>Tampa</span>
                    </div>
                </div>
                <div className='Charleston'>
                    <div className='Charleston-redirect'>
                        <a className='Charleston-link' href='/Charleston'>
                            Charleston Image
                        </a>
                        <span className='Charleston-title'>Tampa</span>
                    </div>
                </div>
                <div className='Charlotte'>
                    <div className='Charlotte-redirect'>
                        <a className='Charlotte-link' href='/Charlotte'>
                            Charlotte Image
                        </a>
                        <span className='Charlotte-title'>Tampa</span>
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
        </div>
    )
};

export default HomePage;

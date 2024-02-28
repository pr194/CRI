import React from 'react'
import './middle.css'
import Imagef from './assets/1.png'
import Image2 from './assets/2.png'
const Middle = () => {
    return (
        <div>
            <div className='middle'>
                <div className='mf'>

                    <img className="sheild" src={Imagef} alt='image' />

                </div>
                <div className='ms'>
                    <h1>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
                    </h1>
                    <div className='lt'>
                        <div className='txtcnt'>
                            <ul>
                                <li>
                                 C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                                </li>
                                <li>
                                    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                                </li>

                            </ul>
                        </div>
                        <div >
                            <img className='imgcn' src={Image2} alt='image2' />
                            <div className='pctn'>
                                <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018".</strong> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle
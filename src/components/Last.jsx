import React from 'react'
import './last.css'
import Image3 from './assets/3.png'
const Last = () => {
    return (
        <div>
            <div className='lstmain'>
                <div className='lsttext'>
                    <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                </div>
                <div className='limg'>
                    <img className='lm' src={Image3} alt='image3' />
                </div>
                <div className='lsttext'>
                    <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                </div>
                <br />
                <div className='br'></div>
                <div className='lsttext1'>

                    <p>
                        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                    </p>
                </div>
                <div className='lsttext2'>
                    <p>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
                </div>
            </div>
        </div>
    )
}

export default Last
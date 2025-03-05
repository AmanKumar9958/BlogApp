import React, { useEffect, useState } from 'react'
import './timer.css'

const CountDown = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-03-12T00:00:00").getTime()    // Set the date we're counting down to in this format: YYYY-MM-DDTHH:MM:SS || launch date
        const currentDate = new Date().getTime()    // Get the current date
        const difference = targetDate - currentDate    // Calculate the difference between the target and current date

        if(difference > 0){
            return{
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),   // Calculate days left
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),   // Calculate hours left
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),   // Calculate minutes left
                seconds: Math.floor((difference % (1000 * 60)) / 1000)   // Calculate seconds left
            };
        } else{
            return{
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());  // Set the initial time left

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <h3 className='text-4xl font-semibold'>Coming Soon <span className='timer'>⌛</span></h3>
            <div className='countdown text-3xl font-semibold'>
                {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
            </div>
        </div>
    )
}

export default CountDown
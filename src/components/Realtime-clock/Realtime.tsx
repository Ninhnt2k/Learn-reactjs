import React, {useEffect, useState} from 'react';

const Realtime = () => {
    const  [currentTime, setCurrenTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval( () => {
            setCurrenTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    });

    const formatTime = (date:Date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
    }

    return (
        <div>
            <h1>Realtime</h1>
            <p>{formatTime(currentTime)}</p>

        </div>
    );

}

export default Realtime;
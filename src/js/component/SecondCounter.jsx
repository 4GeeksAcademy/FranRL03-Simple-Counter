import React from "react";
import { useState, useEffect } from 'react';

export const SecondCounter = () => {

    const [count, setCount] = useState(0);
    const [minutes, setMinutes] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => {
                
                if (prevCount == 59) {
                    setMinutes((prevMinutes => prevMinutes + 1));
                    return 0;
                }

                return prevCount + 1;
            })
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div style={{
                padding: '20px',
                border: '2px solid #ccc',
                borderRadius: '10px',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
            }} id="my_box">
                { minutes } minutos y { count } segundos
            </div>
        </div>
    )
}


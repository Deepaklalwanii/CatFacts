import React, { useState, useEffect } from 'react';

export default function Textpopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showTimer = setTimeout(() => {
            setIsVisible(true);
            const hideTimer = setTimeout(() => {
                setIsVisible(false);
            }, 5000);
            return () => clearTimeout(hideTimer);
        }, 0); 
        return () => clearTimeout(showTimer);
    }, []); 

    return (
        <>
            {isVisible && <span>Click this button to check the facts</span>}
        </>
    );
}

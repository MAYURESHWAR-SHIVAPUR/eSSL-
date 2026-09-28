import React, { useEffect } from 'react'
import {butterfly} from "../animation/Butterfly.js"

const ButterflyComponent = () => {
    useEffect(() => {

        const butterflyElement = document.querySelector('.butterfly');

        function handleMouseMove(e) {
            const X = e.clientX + 10 ;
            const Y = e.clientY ;

            if (butterflyElement) {
                butterflyElement.style.left = X + 'px';
                butterflyElement.style.top = Y + 'px';
            }

        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return (
        <div className="butterfly fixed top-0 left-0 w-10 h-10 z-999 bg-black pointer-events-none" id="butterfly">
        </div>
    )
}

export default ButterflyComponent

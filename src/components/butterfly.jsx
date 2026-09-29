import React, { useEffect } from 'react'
import move from "../../public/move.png"

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
        <div className="butterfly fixed top-0 left-0 w-20 h-20 z-999 rounded-full overflow-hidden bg-black pointer-events-none hidden lg:block" id="butterfly">
            <img className="w-full h-full rounded-full object-cover scale-200 animate" src={move} alt="" />
        </div>
    )
}

export default ButterflyComponent

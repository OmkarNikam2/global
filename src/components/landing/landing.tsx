import React, { useEffect } from 'react'
import { gsap } from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import svg from '../../assets/images/b.gif'
import img1 from '../../assets/images/rupes.png'

export default function Landing() {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const t2 = gsap.timeline();
            t2.to('.svg-height', { visibility: 'hidden' })
            t2.fromTo('.svg-height', { scale: "15", visibility: 'hidden' }, { scale: "0.25", duration: "2", visibility: 'visible' });
            t2.fromTo(".cls", { fill: '#ffff' }, { fill: '#8f2d56' });
            t2.fromTo(".mouse-down", { opacity: 0 }, { opacity: 1 })

        });
        return () => ctx.revert();
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#pin",
                    start: "top top",
                    endTrigger: "#endpin",
                    end: "bottom top",
                    scrub: 1,
                    pin: true,
                    markers: true,
                },
            });


            mm.add("(min-width: 800px)", () => {
                t1.add('same')

                t1.fromTo(".mouse-down", { opacity: 1 }, { opacity: 0 })
                t1.fromTo(".flip-card",{width:'0px',height:'0px'},{width:'500px',height:'500px'})
                t1.to(".svg-height", { display: 'none' })
                t1.fromTo(".translate_up", { top: '110vh' }, { top: '35vh' })
                t1.to(".translate_up", { top: '35vh', delay: 0.25 }) 
                t1.to(".translate_up",{top:'-100vh'})
                t1.fromTo(".flip-card-inner",{rotateY:'0deg'},{rotateY:'180deg'},'-=0.7')

            });

            mm.add("(max-width: 799px)", () => {
                //mobile code

                t1.fromTo(".mouse-down", { opacity: 1 }, { opacity: 0 })
                t1.fromTo(".flip-card",{width:'0px',height:'0px'},{width:'500px',height:'500px'})
                t1.to(".svg-height", { display: 'none' })
                t1.fromTo(".translate_up", { top: '110vh' }, { top: '35vh' })
                t1.to(".translate_up", { top: '35vh', delay: 0.25 }) 
                t1.to(".translate_up",{top:'-100vh'})
                t1.fromTo(".flip-card-inner",{rotateY:'0deg'},{rotateY:'180deg'},'-=0.7')

            });
        });
        return () => ctx.revert();
    })


    return (
        <>
            <div className='vh-100' id='pin'>
                <div className='svg-container'>
                    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.33 257.33" className='svg-height'>
                        <g id="Layer_1-2" data-name="Layer 1">
                            <g>
                                <g>
                                    <path className="cls-1" d="M123.65,78.11c-1.77-1.48-2.65-3.76-2.65-6.07V2.76c0-1.52,1.23-2.76,2.76-2.76h9.82c1.52,0,2.76,1.23,2.76,2.76v50.8c0,.08.1.12.16.06l42-42c.81-.81,2.04-1.04,3.08-.58,3.22,1.45,6.37,3.03,9.44,4.74,1.61.89,1.93,3.07.63,4.37l-57.56,57.56c-2.74,2.74-7.23,3.08-10.43.4Z" />
                                    <path className="cls-1" d="M83.38,94.21l-49.16-49.16c-1.08-1.08-1.08-2.82,0-3.9l6.94-6.94c1.08-1.07,2.82-1.07,3.9,0l35.92,35.92c.06.06.16.02.16-.06V10.66c0-1.14.7-2.17,1.76-2.58,3.28-1.25,6.62-2.37,10.03-3.34,1.77-.51,3.54.8,3.54,2.65v81.09c0,2.3-.86,4.58-2.6,6.08-3.18,2.75-7.73,2.44-10.49-.34Z" />
                                    <path className="cls-1" d="M71.96,136.33H2.76c-1.52,0-2.76-1.23-2.76-2.76v-9.82c0-1.52,1.23-2.76,2.76-2.76h50.8c.08,0,.12-.1.06-.16L11.63,78.84c-.81-.81-1.04-2.03-.58-3.07,1.45-3.22,3.03-6.37,4.73-9.44.89-1.61,3.07-1.93,4.37-.63l57.55,57.55c2.77,2.77,3.08,7.31.33,10.49-1.5,1.74-3.79,2.6-6.08,2.6Z" />
                                    <path className="cls-1" d="M41.16,223.12l-6.95-6.95c-1.08-1.08-1.08-2.82,0-3.9l35.92-35.92c.06-.06.02-.16-.06-.16H10.67c-1.14,0-2.18-.7-2.58-1.77-1.24-3.28-2.36-6.62-3.34-10.02-.51-1.77.8-3.55,2.64-3.55h81.19c2.31,0,4.61.9,6.08,2.69,2.64,3.21,2.3,7.65-.43,10.4l-49.16,49.16c-1.08,1.08-2.82,1.08-3.9,0Z" />
                                    <path className="cls-1" d="M121,254.58v-50.81c0-.08-.1-.12-.16-.06l-42,42.02c-.81.81-2.04,1.04-3.08.58-3.22-1.45-6.37-3.03-9.44-4.74-1.61-.89-1.93-3.07-.63-4.37l57.56-57.56c2.19-2.2,5.49-2.86,8.35-1.67,2.87,1.2,4.74,3.99,4.74,7.09v69.53c0,1.52-1.23,2.76-2.76,2.76h-9.82c-1.52,0-2.76-1.23-2.76-2.76Z" />
                                    <path className="cls-1" d="M160.87,249.95v-81.09c0-2.3.86-4.58,2.6-6.09,3.18-2.75,7.72-2.43,10.49.33l49.16,49.16c1.08,1.08,1.08,2.82,0,3.9l-6.95,6.95c-1.08,1.08-2.82,1.08-3.9,0l-35.92-35.92c-.06-.06-.16-.02-.16.06v59.41c0,1.14-.7,2.17-1.76,2.58-3.28,1.25-6.62,2.37-10.03,3.34-1.77.51-3.54-.8-3.54-2.65Z" />
                                    <path className="cls-1" d="M241.55,191.01c-.89,1.61-3.07,1.93-4.37.63l-57.55-57.55c-1.46-1.48-2.24-3.43-2.24-5.42,0-.99.18-1.99.59-2.94,1.18-2.86,3.97-4.73,7.08-4.73h69.53c1.52,0,2.76,1.23,2.76,2.76v9.82c0,1.52-1.23,2.76-2.76,2.76h-50.8c-.08,0-.12.1-.06.16l41.99,41.99c.81.81,1.04,2.03.58,3.08-1.45,3.22-3.03,6.38-4.73,9.45Z" />
                                    <path className="cls-1" d="M249.94,96.47h-80.95c-3.03,0-6.65-2.22-7.67-5.08-.3-.84-.45-1.72-.45-2.59,0-1.99.78-3.96,2.24-5.42l49.17-49.17c1.08-1.08,2.82-1.08,3.9,0l6.94,6.94c1.08,1.08,1.08,2.82,0,3.9l-35.92,35.93c-.06.06-.02.16.06.16h59.4c1.14,0,2.18.7,2.58,1.77,1.24,3.28,2.36,6.62,3.34,10.02.51,1.77-.8,3.55-2.64,3.55Z" />
                                </g>
                                <circle className="cls" cx="128.67" cy="128.67" r="32.2" />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                {/* <h1 className='text-up'>John Doe</h1>
                                <p className='text-up' >Architect & Engineer</p>
                                <p className='text-up'>We love that guy</p> */}
                            </div>
                            <div className="flip-card-back">
                                <Image src={img1} alt="Avatar" className='img-prop' />
                            </div>
                        </div>
                    </div>
                <Image src={svg} alt='noimg' className='mouse-down' width={100} height={100} />
                <div className='translate_up text-light d-flex flex-column justify-content-center align-items-center'>
                    <div className='width-25 '>
                        <h1>Scalable business</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsam expedita ad blanditiis nesciunt beatae itaque? Esse deserunt temporibus nam minus tenetur ex dolores ullam totam. Harum reprehenderit dolorum ab?</p>
                    </div>
                </div>
            </div>
            <div className='vh-100 bg-dark ' id='endpin'>
               
            </div>
            
        </>
    )
}

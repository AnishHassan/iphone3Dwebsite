import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animatewithGSAP } from '../utils/animations'

const HowItWorks = () => {
    const videoRef = useRef();
    useGSAP(() => {
        gsap.to('#gameVideo', {
            scrollTrigger: {
                trigger: '#gameVideo',
                toggleActions: 'play pause reverse restart ',
                start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start: '20% bottom',
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })
        animatewithGSAP('.g_fadeIn',
            { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
        )
    }, [])
    return (
        <section className='common-padding'>
            <div className='max-screen-width'>
                <div id='chip' className='w-full flex-center my-20'>
                    <img src={chipImg} alt='chip' width={180} height={180} />
                </div>

                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        A17 pro chip
                        <br /> A monster win for gaming.
                    </h2>

                    <p className='hiw-subtitle'>
                        It's here. The biggest redesign in the history of Apple GPUs.
                    </p>
                </div>

                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='flex-center h-full relative'>
                        <div className='overflow-hidden'>
                            <img src={frameImg} alt='frame' className='bg-transparent relative z-10' />

                        </div>
                        <div className='hiw-video'>
                            <video id='gameVideo' className='pointer-events-none' playsInline preload='none' muted autoPlay ref={videoRef}>
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>

                    <p className='text-gray font-semibold text-center mt-3'>Honkai: Star Rail</p>
                </div>
                <div className='hiw-text-container'>
                    <div className='flex flex-1 justify-center flex-col'>
                        <p className='hiw-text g_fadeIn'>A17 is entirely new class of iPhone chip that delivers our {''}
                            <span className='text-white'>
                                best graphics performance by far
                            </span>,
                            using the same alloy that spacecraft use for missions to Mars.
                        </p>
                    

                    <p className='hiw-text g_fadeIn'>Mobile {''}
                        <span className='text-white'>
                            games will look and feel so immersive
                        </span>,
                        will incredibly detailed environment and characters.
                    </p>
</div>
                    <div className='flex flex-1 justify-center flex-col g_fadeIn'>
                        <p className='hiw-text'>New
                        </p>
                        <p className='hiw-bigtext'>Pro-class GPU
                        </p>
                        <p className='hiw-text'>with 6-cores
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
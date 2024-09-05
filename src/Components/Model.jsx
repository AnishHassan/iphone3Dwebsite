import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import ModelContainer from './ModelContainer'
import { yellowImg } from '../utils'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { View } from '@react-three/drei'
import { models, sizes } from '../constants'



const Model = () => {

    const [size, setSize] = useState('small');

    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#FEE7B9', '#6F6C64'],
        img: yellowImg,
    })

    //camera control for the model view
    const cameraControlRefSmall = useRef();
    const cameraControlRefLarge = useRef()

    //model
    const small = useRef(new THREE.Group())
    const large = useRef(new THREE.Group())


    //rotation 
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);






    useGSAP(() => {
        gsap.to('#heading', {
            opacity: 1,
            y: 0,
        })
    }, [])

    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <h1 id='heading' className='section-heading'>
                    Take a closer look.
                </h1>
            </div>
            <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                    <ModelContainer
                        index={1}
                        groupRef={small}
                        gsapType='view1'
                        controlRef={cameraControlRefSmall}
                        setRotationState={setSmallRotation}
                        item={model}
                        size={size}
                    />

                    <ModelContainer
                        index={2}
                        groupRef={large}
                        gsapType='view2'
                        controlRef={cameraControlRefLarge}
                        setRotationState={setLargeRotation}
                        item={model}
                        size={size}
                    />

                    <Canvas className='w-full h-full' style={
                        {
                            position: 'fixed',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            overflow: 'hidden',
                        }
                    }
                        eventSource={document.getElementById('root')}
                    >
                        <View.Port />
                    </Canvas>
                </div>
                <div className='mx-auto w-full'>
                    <p className='text-sm font-light text-center mb-5 '>{model.title}</p>
                    <div className='flex-center '>
                        <ul className='color-container'>
                            {models.map((item, i) => (
                                <li className='w-6 h-6 rounded-full mx-2 cursor-pointer' key={i} style={{ backgroundColor: item.color[0] }} onClick={() => setModel(item)} />
                            ))}
                        </ul>
                        <button className='btn-size-container flex'>
                            {sizes.map(({ label, value }) => (
                                <span key={label} className='size-btn' style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white' }} onClick={() => setSize
                                    (value)
                                }>
                                    {label}
                                </span>
                            ))}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model
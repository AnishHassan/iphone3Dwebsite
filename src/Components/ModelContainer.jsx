import React, { Suspense } from 'react'
import { View, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import Lights from './Lights'
import * as THREE from 'three'
import IphoneModel from './IphoneModel'
import { Html } from '@react-three/drei';

const ModelContainer = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
    return (
        <View index={index} id={gsapType} className={` w-full h-full ${index === 2} ? 'right-[-100%] : '`} >
            {/*Ambient light*/}

            <ambientLight intensity={0.3} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />
            <OrbitControls makeDefault ref={controlRef} enableZoom={false}
                enablePan={false} rotateSpeed={0.4} target={new THREE.Vector3(0, 0, 0)} onEnd={() => setRotationSize(controlRef.current.getAzimuthalAngle())} />
            <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0]}>
                <Suspense fallback={<Html><div>Loading</div></Html>}>
                    <IphoneModel scale={index===1 ? [15,15,15] : [17,17,17]} item={item} size={size}/>
                </Suspense>
            </group>

        </View>
    )
}

export default ModelContainer
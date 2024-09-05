import React from 'react'
import { View , PerspectiveCamera} from '@react-three/drei'

const ModelContainer = ({index , groupRef , gsapType ,controlRef , setRotationSize , size , item}) => {
  return (
   <View index={index} id={gsapType} className={`border-2 border-red-500 w-full h-full ${index===2} ? 'right-[-100%] : '`} >
{/*Ambient light*/}
<ambientLight intensity={0.3}/>
<PerspectiveCamera makeDefault  position={[0,0,4]}/>

   </View>
  )
}

export default ModelContainer
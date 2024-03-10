import { Environment, OrbitControls, Text } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Model = () => {
    return (
        <Canvas id="canvas" className="basis-1/3">
            <OrbitControls enableZoom={false} enablePan={false} />
            <directionalLight intensity={3} position={[0, 3, 2]} />
            <Environment preset="city" />
            <Object />
        </Canvas>
    )
}

const Object = () => {
    const mesh = useRef(null)

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2
        mesh.current.rotation.y += delta * 0.2
        mesh.current.rotation.z += delta * 0.2
    })

    return (
        <mesh ref={mesh}>
            <tetrahedronGeometry args={[3, 0]} />
            <meshStandardMaterial color={"silver"} />
            {/* <Text>Hello World</Text> */}
        </mesh>
    )
}

export default Model

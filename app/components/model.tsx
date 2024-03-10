import {
    Environment,
    MeshTransmissionMaterial,
    OrbitControls,
    Text,
} from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react"

const Model = () => {
    return (
        <Canvas id="canvas" className="basis-1/3">
            <OrbitControls enableZoom={false} enablePan={false} />
            <directionalLight intensity={3} position={[0, 3, 2]} />
            <Environment preset="warehouse" />
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

    const materialProps = useControls({
        thickness: { value: 0.8, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0.2, min: 0, max: 1, step: 0.1 },
        transmission: { value: 1, min: 0, max: 1, step: 0.1 },
        ior: { value: 1.7, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 1, min: 0, max: 1 },
        backside: { value: true },
    })

    return (
        <group>
            {/* <Text fontSize={2} font="" position={[0, 0, -4.5]}>
                Hello World
            </Text> */}
            <mesh ref={mesh}>
                <tetrahedronGeometry args={[3, 0]} />
                <MeshTransmissionMaterial color={"silver"} {...materialProps} />
            </mesh>
        </group>
    )
}

export default Model

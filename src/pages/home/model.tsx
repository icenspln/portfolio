import { Environment, MeshTransmissionMaterial, Text } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useRef } from "react"
import { motion } from "framer-motion-3d"

const Model = () => {
    return (
        <Canvas id="canvas" className="basis-2/3 h-full ">
            {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
            <directionalLight intensity={3} position={[0, 3, 2]} />
            <Environment preset="studio" />
            <Object />
        </Canvas>
    )
}

const Object = () => {
    const mesh: any = useRef(null)

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2
        mesh.current.rotation.y += delta * 0.2
        mesh.current.rotation.z += delta * 0.2
    })

    const materialProps = useControls({
        thickness: { value: 0.6, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
        transmission: { value: 1, min: 0, max: 1, step: 0.1 },
        ior: { value: 1.7, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 1, min: 0, max: 1 },
        backside: { value: true },
    })

    return (
        <motion.group>
            <Text fontSize={0.5} font="" position={[0, 0, -4.5]}>
                &lt;/&gt;
            </Text>
            <mesh ref={mesh}>
                <tetrahedronGeometry args={[3, 0]} />
                <MeshTransmissionMaterial color={"silver"} {...materialProps} />
            </mesh>
        </motion.group>
    )
}

export default Model

import React from 'react';
import {Text} from "react-native";
import {Canvas} from "@react-three/fiber";

const componentBox = () => {
    return (
        <>
            <Text>
                Box
            </Text>
            <Canvas>

                <mesh>
                    <boxGeometry args={[1,1,1]}/>
                    <meshStandardMaterial color={"hotpink"}/>
                </mesh>
            </Canvas>
        </>
    );
};

export default componentBox;

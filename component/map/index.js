import React from 'react';
import {Text, View} from "react-native";
import * as THREE from "three";

const Map = () => {
    const initialPoints = [
        { x: 1, y: 1, z: -1 },
        { x: 1, y: 0, z: 1 },
        { x: -1, y: 0, z: 1 },
        { x: -1, y: 0, z: -1 }
    ];

    const addCube = (pos) => {
        const geometry = new THREE.BoxBufferGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial(0xffffff);
        const cube = new THREE.Mesh(geometry, material);
        cube.position.copy(pos);
        scene.add(cube);
    }

    const cubeList = initialPoints.map(pos => {
        return this.addCube(pos);
    });

    return (
        <View>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
};

export default Map;

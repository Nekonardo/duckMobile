import {useState} from "react";
import {FlatList, Image, Text, TextInput, TouchableOpacity, View,} from "react-native";
import {useRouter} from "expo-router";

import styles from "./welcome.style";
import {icons, SIZES} from "../../../constants";
import {Canvas} from "@react-three/fiber";


const NodeTypes = ["Device Status", "Feature 1", "Feature 2", "Feature 3", "Feature 4"];

function Box(props) {
    return (
        <mesh {...props}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial color={'orange'}/>
        </mesh>
    );
}

const Welcome = ({loginInfo, setLoginInfo, handleClick}) => {
    const router = useRouter();
    const [activeFunctionType, setActiveFunctionType] = useState("Device Status");

    const displayTabContent = (activeFunctionType) => {
        switch (activeFunctionType) {
            case "Device Status":
                return (
                    // <View style={styles.tabsContainer}>
                    //     <Text style={styles.headText}>Device Status</Text>
                    //     <LoginPage/>
                    //
                    // </View>
                    <>
                        {/*<Text>nice</Text>*/}
                        {/*<Canvas width="150" height="150">*/}
                        {/*    <ambientLight/>*/}
                        {/*    <sphereGeometry/>*/}
                        {/*    <pointLight position={[10, 10, 10]}/>*/}
                        {/*    <mesh>*/}

                        {/*        <meshStandardMaterial color="orange"/>*/}
                        {/*        <Box position={[0, -1.2, 0]}/>*/}
                        {/*        <Box position={[0, 1.2, 0]}/>*/}
                        {/*    </mesh>*/}
                        {/*</Canvas>*/}
                    </>
                );
            case "Feature 1":
                return (
                    <View style={styles.tabsContainer}>
                        <Text style={styles.tabText}>Feature 1</Text>

                        <Canvas>
                            <ambientLight/>
                            <sphereGeometry/>
                            <pointLight position={[10, 10, 10]}/>
                            <mesh>

                                <meshStandardMaterial color="orange"/>
                                <Box position={[0, -1.2, 0]}/>
                                <Box position={[0, 1.2, 0]}/>
                            </mesh>
                        </Canvas>

                    </View>
                );
            case "Feature 2":
                return (
                    <View style={styles.tabsContainer}>
                        <Text style={styles.tabText}>Feature 2</Text>
                    </View>
                );
            case "Feature 3":
                return (
                    <View style={styles.tabsContainer}>
                        <Text style={styles.tabText}>Feature 3</Text>
                    </View>
                );
            case "Feature 4":
                return (
                    <View style={styles.tabsContainer}>
                        <Text style={styles.tabText}>Feature 4</Text>
                    </View>
                );
            default:
                return (
                    <View style={styles.tabsContainer}>
                        <Text style={styles.tabText()}>Device Status 1</Text>
                    </View>
                );
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Hello</Text>
                <Text style={styles.welcomeMessage}>Connect your ROS device </Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={loginInfo}
                        onChangeText={(text) => setLoginInfo(text)}
                        placeholder='localhost:8080'
                    />
                </View>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={loginInfo}
                        onChangeText={(text) => setLoginInfo(text)}
                        placeholder='password'
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}

            >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={NodeTypes}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.tab(activeFunctionType, item)}
                            onPress={() => {
                                setActiveFunctionType(item);
                                // router.push(`/search/${item}`);
                            }}
                        >
                            <Text style={styles.tabText(activeFunctionType, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{columnGap: SIZES.small}}
                    horizontal
                />
                {displayTabContent(activeFunctionType)}
            </View>

        </View>
        // <Canvas>
        //     <ambientLight/>
        //     <sphereGeometry/>
        //     <pointLight position={[10, 10, 10]}/>
        //     <mesh>
        //
        //         <meshStandardMaterial color="orange"/>
        //         <Box position={[0, -1.2, 0]}/>
        //         <Box position={[0, 1.2, 0]}/>
        //     </mesh>
        // </Canvas>

    );
};

export default Welcome;

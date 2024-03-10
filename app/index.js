import {View} from "react-native";
import {useRouter} from "expo-router";
import Welcome from "../component/home/welcome/Welcome";
import Map from "../component/map";

const Home = () => {
    const router = useRouter();

    return (
        // <SafeAreaView style={{flex: 1, background: COLORS.lightWhite}}>
        //     <Stack.Screen
        //         options={{
        //             headerStyle: {
        //                 backgroundColor: COLORS.lightWhite,
        //             },
        //             headerShadowVisible: false,
        //             headerTitle: ''
        //         }}
        //     />
        //     <ScrollView showsVerticalScrollIndicator={false}>
        //             <View style={{
        //                 flex: 1,
        //                 padding: SIZES.medium}}>
        //                 {/*<Text>Open up App.js to start working on your app!</Text>*/}
        //             <Welcome/>
        //             </View>
        //     </ScrollView>
        // </SafeAreaView>
        <>

            <View>
                <Welcome/>

                {/*<Text>Open up App.js to start working on your app!</Text>*/}

            </View>
            <Map/>


            {/*<Canvas>*/}
            {/*    <ambientLight/>*/}
            {/*    <sphereGeometry/>*/}
            {/*    <pointLight position={[10, 10, 10]}/>*/}
            {/*    <mesh>*/}
            {/*        <boxGeometry/>*/}
            {/*        /!*<sphereGeometry/>*!/*/}
            {/*        <meshStandardMaterial color="orange"/>*/}
            {/*    </mesh>*/}
            {/*</Canvas>*/}


        </>
    )
}
export default Home;
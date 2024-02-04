import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {useState} from "react";
import ROSLIB from 'roslib'
import LoginPage from "./component/master";
import {Stack,useRouter} from 'expo-router'

export default function App() {
    const [status, setStatus] = useState("Not connected")
    const [linear, setLinear] = useState({x: 0, y: 0, z: 0})
    const [angular, setAngular] = useState({x: 0, y: 0, z: 0})
    const ros = new ROSLIB.Ros({encoding: 'ascii'})

    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            {/*<SendMessage/>*/}
            <LoginPage/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

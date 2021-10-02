import React from "react"
import { Dimensions, StyleSheet, Text, View } from "react-native"

const Navbar : React.FC  = props=>{
    return (<>
        <View style={styles.container}>
        <Text style={styles.title}> To Do App </Text>
        </View>
        
    </>)
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        height: "auto",
        padding: 10,
        backgroundColor: "#222222",
        width: Dimensions.get("window").width,
    },
    title: {
        color: "#ffffff",
        fontSize: 24,
        padding: "auto"
    }
})

export default Navbar
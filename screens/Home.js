import React, { Component } from 'react';
import { Text, 
        View, 
        StyleSheet, 
        SafeAreaView,
        TouchableOpacity,
        StatusBar,
        Image,
        Platform} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Stellar App</Text>
                    
                </View>
                <TouchableOpacity style={styles.routeCard}
                    onPress={()=>
                        this.props.navigation.navigate("StarMap")
                    }>
                    <Text style={styles.routeText}>Star Map</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}
                    onPress={()=>
                        this.props.navigation.navigate("DailyPic")
                    }>
                    <Text style={styles.routeText}>Daily Pic</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.routeCard}
                    onPress={()=>
                        this.props.navigation.navigate("SpaceCrafts")
                    }>
                    <Text style={styles.routeText}>Space Crafts</Text>
                    <Text style={styles.knowMore}>{"Know More-->"}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    titleText:{
        color:'white',
        fontSize:40
    },
    droidSafeArea:{
        marginTop: Platform.OS ==="android"? StatusBar.currentHeight: 0
    },
    titleBar:{
        justifyContent:"center",
        alignItems:"center",
        flex:0.15
    },
    routeCard:{
        marginLeft:50,
        marginRight:50,
        marginTop: 50,
        borderRadius:30,
        flex:0.25,
        backgroundColor:'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingLeft: 30,
        color: 'black'
    },
    backgroundImage: {
        resizeMode: 'cover',
        flex: 1
    },
    iconImage:{
        height:200,
        width:200,
        resizeMode:"contain",
        position:"absolute",
        top:-80,
        right:20
    },
    knowMore:{
        color:"red",
        paddingLeft:30,
        fontSize:15
    },
})
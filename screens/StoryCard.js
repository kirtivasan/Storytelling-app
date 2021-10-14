import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";


export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

 


  render() {
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.cardContainer}>
            <View style={styles.storyImage}>
              <Image
                source={require("../assets/image_1.jpg")}
                style={{resizeMode:'contain',width:Dimensions.get('window').width-60,height:250,
                borderRadius:10}}
              ></Image>
              </View>
              <View style={styles.titleContainer}>
              <View style = {styles.titleTextContainer}>


               <View style = {styles.storyTitle}>
          <Text style={styles.storyTitleText}>{this.props.story.title}</Text>
        </View>
        <View style = {styles.storyAuthor}>
        <Text style={styles.storyAuthorText}>{this.props.story.author}</Text>
        </View>
        </View>
        </View>
        <View style = {styles.discriptionContainer}>
        <Text style={styles.discriptionText}>{this.props.story.discription}</Text>
        </View>
        <View style = {styles.actionContainer}>
        <View style = {styles.likeButton}>
        <View style = {styles.likeIcon}>
        <Ionicons name={"heart"} size={30} color={"white"} style={{width:30,marginLeft:20,marginTop:5}}/>
                <Text style = {styles.likeText}>12k</Text>
        </View>
        </View>
        </View>
        </View>
        </View>
  
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  cardContainer:{
    marginTop:20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    backgroundColor:"pink",
    borderRadius:20,
    height:undefined,
    padding:10,
    width:300
  },
  titleContainer:{
    flexDirection:"row"
  },
  titleTextContainer:{
    flex:1
  },
  storyTitleText:{
    fontSize:25,
    color:"white"
  },
  storyAuthorText:{
    fontSize:18,
    color:"white"
  },
  discriptionContainer:{
    marginTop:5,
  },
  discriptionText:{
    fontSize:13,
    color:"white"
  },
  actionContainer:{
    marginTop:10,
    justifyContent:"center",
    alignItems:"center"
  },
  likeButton:{
    backgroundColor:"red",
    borderRadius:30,
    width:160,
    height:40,
    flexDirection:"row",
  },
  likeText:{
    color:"white",
    fontSize:25,
    marginLeft:65,
    marginTop:-35}

});

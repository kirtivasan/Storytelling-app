import React, { Component } from 'react';
import { Text, View , ScrollView ,Image , TextInput , Platform , StyleSheet , SafeAreaView, StatusBar} from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";

import DropDownPicker from "react-native-dropdown-picker"

export default class CreateStory extends Component {
  constructor() {
		super();
		this.state = {
      previewImage:"image_1",
      dropDownHeight:40,
		};
  }
	
    render() {
       let  preview_images ={
        image_1: require("../assets/image_1.jpg"),
        image_2: require("../assets/image_2.jpg"),
        image_3: require("../assets/image_3.jpg"),
        image_4: require("../assets/image_4.jpg"),
        image_5: require("../assets/image_5.jpg"),
      };

        return (
          
            <View style={styles.container}>
              <SafeAreaView styles={styles.droidSafeArea} />
               <View styles={styles.appTitle}>
                <View styles={styles.appIcon}>
                 <Image Source={require("../assets/logo.png")} 
                        style={styles.iconImage}>
                 </Image>
                </View>
                <View style={styles.stylesappTitletextContainer}>
                   <Text styles={styles.appTitleText}> New Post </Text>
                </View>
              </View>
              <View styles={styles.fieldsContainer}>
               <ScrollView>
                <Image
                   source={preview_images[this.state.previewImages]}
                   style={styles.previewImages}>
                </Image>

                <View styles={{height: RFValue(this.state.dropdownHeight) }}>

                <DropDownPicker 
                  items={[
                    { Label: "Image 1", value: "image_1"},
                    { Label: "Image 2", value: "image_2"},
                    { Label: "Image 3", value: "image_3"},
                    { Label: "Image 4", value: "image_4"},
                    { Label: "Image 5", value: "image_5"},
                    { Label: "Image 6", value: "image_6"},
                    { Label: "Image 7", value: "image_7"},
                  ]}

                  defaultValue={this.state.previewImages}

                  containerStyle={{
                    height:40,
                    borderRaduis:20,
                    marginBottom:10
                  }}

                  OnOpen={()=>{
                    this.setState({ dropdownHeight:170});
                  }}

                  OnClose={()=>{
                    this.setState({ dropdownHeight:40});
                  }}
                  style={{ backgroundColor: "transparent"}}
                    itemStyle={{
                      justifyContent: "flex-start"
                    }}
                     dropDownStyle={{ backgroundColor: "#2A2A2A  "
                     }}
                     labelStyle={{
                       color:"white"
                     }}
                     arrowStyle={{
                       color:"white"
                     }}

                     onChangeItem={item =>
                     this.set.state({
                       previewImages: item.value
                     })
                     }
                     />
                  </View>

                  <TextInput style={styles.inputFont} onChangeText={caption => this.setState({ caption })}

                  placeholder={"Caption"}
                  placeholderTextColor="white"
                  />
                  </ScrollView>

                </View>
                <View styles={{ flex:0.08 }} />
                </View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#15193c"
	},
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
	},
	appTitle: {
		flex: 0.07,
		flexDirection: "row"
	},
	appIcon: {
		flex: 0.3,
		justifyContent: "center",
		alignItems: "center"
	},
	iconImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain"
	},
	stylesappTitletextContainer: {
		flex: 0.7,
		justifyContent: "center"
	},
	appTitleText: {
		color: "white",
		fontSize: RFValue(28),
		fontFamily: "Bubblegum-Sans"
	},
  fieldsContainer:{
    flex: 0.85
  },
  previewImage:{
    width: "90%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius:RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont:{
    height: RFValue(40),
    borderRadius:RFValue(10),
    borderWidth:RFValue(1),
    paddingLeft:RFValue(10),
    borderColor:"WHITE",
    color:"white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra:{
    marginTop:RFValue(15)
  },
  inputTextBig:{
    textAlignVertical:"top",
    padding:RFValue(5)
  }
})
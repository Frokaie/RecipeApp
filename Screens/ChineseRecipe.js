
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Switch,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import firebase from "firebase";



export default class ChineseRecipe extends React.Component{
    render(){
        return(
<View style={styles.container}>
  <ScrollView>
     <View style={styles.cardContainer}>
        <Text style={styles.title}>Schezwan Roti Noodles</Text>

        <Image
          source={require("../assets/chinese1.jpg")}
          style={styles.iconImage}
        />

        <Text style={styles.titlesub}> Ingredients</Text>

        

     <Text style={styles.subpaste}>       
     1 Cabbage (Thinly Sliced), 1 Capsicum1, Onion1, Carrot1, Green Chillies(Chopped), to taste Black Pepper,
   2tbsp Oil, 5 nos Roti
    </Text>


    <Text style={styles.titlesub}> Method</Text>

    

    <Text style={styles.subpaste}>1.First of all, heat a pan by adding oil, add one chopped onion 
    and two lengthwise chopped green chilies and fry it lightly.</Text>

   <Text style={styles.subpaste}>2.Simultaneously, add julienne chopped carrots and capsicum and saute it. 
   Add finely chopped cabbage and fry it too.</Text>

   <Text style={styles.subpaste}>3.Now add a little black pepper and salt to it and mix.</Text>

   <Text style={styles.subpaste}>4.Keep the flame low and in the meantime roll the rotis and cut them thinly.</Text>

   <Text style={styles.subpaste}>5.Put the chopped rotis in the pan and mix well with the vegetables.</Text>

   <Text style={styles.subpaste}>6.Simultaneously, add 2 to 3 tablespoons of Schezwan sauce to it and mix well.
    Garnish with green coriander and serve hot.</Text>
    </View>
    </ScrollView>
</View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c"
      },
      iconImage: {
        width: RFValue(150),
        height: RFValue(70),
        marginTop:10
      },
      title:{
   
        fontSize:RFValue(25),
        fontWeight:"bold",
        
       
      },
      cardContainer:{
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor: "#8bc44e",
        borderRadius:50,
        marginTop:20,
        width:RFValue(300),
        height:RFValue(353)
      },
      titlesub:{
        fontSize:RFValue(11),
        fontWeight:"bold",
        margin:12,
        alignSelf:"flex-start",
        
      },
      sub:{
        fontSize:RFValue(8),
        alignSelf:"flex-start",
        margin:12,
      },
      subpaste:{
        fontSize:RFValue(7),
        alignSelf:"flex-start",
        margin:12,
      }
})
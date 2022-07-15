
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



export default class AmericanRecipe extends React.Component{
    render(){
        return(
<View style={styles.container}>
  <ScrollView>
     <View style={styles.cardContainer}>
        <Text style={styles.title}>Hot dogs with mustard</Text>

        <Image
          source={require("../assets/american1.jpg")}
          style={styles.iconImage}
        />

        <Text style={styles.titlesub}> Ingredients</Text>

        

     <Text style={styles.subpaste}>       
    
¼ hard green or white cabbage
½ green pepper
1 stick celery
2 tbsp French mustard or Dijon mustard, plus more for the rolls if you like
2 tbsp mayonnaise
2 tbsp soured cream
1 tbsp cider vinegar
2 tsp sugar
4 posh hot dog sausages or frankfurters
2 brioche hot dog or pretzel long rolls
to serve hot sauce, such as Tabasco
    </Text>


    <Text style={styles.titlesub}> Method</Text>

    <Text style={styles.sub}>STEP 1:</Text>

    <Text style={styles.subpaste}>Finely shred the cabbage, green pepper and celery into a bowl. 
    Mix the mustard, mayo, soured cream, cider vinegar and sugar with some seasoning. 
    Add it to the veg and use your hands to mix everything thoroughly. Leave in the fridge until you need it. 
    Cook the sausages and warm the rolls.</Text>

   <Text style={styles.sub}>STEP 2:</Text>

   <Text style={styles.subpaste}>Put the sausages in the rolls, pile on the slaw, shake on the hot sauce and 
   add a drizzle more mustard.</Text>
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
        width: RFValue(85),
        height: RFValue(85),
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
        backgroundColor: "#24b1b8",
        borderRadius:50,
        marginTop:20,
        width:RFValue(300),
        height:RFValue(350)
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
        margin:12,
      }
})

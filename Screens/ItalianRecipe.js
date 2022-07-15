

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



export default class ItalianRecipe extends React.Component{
    render(){
        return(
<View style={styles.container}>
  <ScrollView>
     <View style={styles.cardContainer}>
        <Text style={styles.title}>Neapolitan Pizza</Text>

        <Image
          source={require("../assets/italian1.jpg")}
          style={styles.iconImage}
        />

        <Text style={styles.titlesub}> Ingredients</Text>

        

     <Text style={styles.subpaste}>       
    
     20 ounces (4 cups) Italian tipo "00" flour (see note), plus extra for dusting dough
.3 ounces (about 2 1/4 teaspoons) kosher salt, plus extra for assembly
.2 ounces (about 1 teaspoon) instant yeast, such as SAF Instant Yeast
.2 ounces (about 2 teaspoons) sugar
12 ounces water
1 (14-ounce) can whole peeled Italian tomatoes
12 ounces buffalo mozzarella or fresh cow's milk mozzarella
6 tablespoons extra virgin olive oil
24 basil leaves
    </Text>


    <Text style={styles.titlesub}> Direction</Text>

    <Text style={styles.sub}>STEP 1:</Text>

    <Text style={styles.subpaste}>Combine flour, salt, yeast, and sugar in the bowl of a stand mixer fitted with 
    a dough hook attachment. Whisk to combine. Add water and knead on low speed until mixture just comes together 
    and no dry flour remains. Rest for 10 minutes.

Knead on low speed for an additional ten minutes. The mixture should come together into a cohesive mass that 
barely sticks to the bottom of the bowl as it kneads. Depending on the type of flour used, you may need to add up 
to 1/2 cup additional flour. If dough sticks heavily to bottom of bowl, add flour 1 tablespoon at a time with mixer 
running until it forms a mass that just barely sticks to the bowl. Cover bowl tightly with plastic or transfer the 
dough to two gallon-sized zipper lock bags, seal, and refrigerate for at least 8 and up to 72 hours.</Text>

   

   <Text style={styles.sub}>STEP 2:</Text>

   <Text style={styles.subpaste}>Have your tomato sauce, drained cheese, pizza dough, olive oil, kosher salt, 
    and basil leaves ready and close to the stovetop. Preheat broiler to high and arrange rack so you can just barely
     fit a 12-inch heavy-bottomed oven-proof cast iron or stainless steel skillet on top of it. Dust skillet with flour,
      tap out excess, then heat skillet over high heat until lightly smoking, about three minutes.

Transfer one dough round to the skillet. It should fill up the entire bottom surface. Working quickly, 
spread two tablespoons sauce evenly over dough, leaving the outer 1-inch border un-sauced. Top with 1/6 of 
the cheese chunks. Season with kosher salt. Drizzle with 1 tablespoon olive oil, and scatter four basil leaves
 over the surface.

Transfer skillet to broiler and broil until pizza is puffed and charred in spots 
(this can take anywhere between 1 1/2 to 4 minutes, depending on the strength of your broiler). 
Return skillet to the stovetop and cook until bottom is charred in spots, using a thin metal spatula to peek
 after about 1 minute (depending on the skillet you use, you may skip this step if pizza is already charred).
  Transfer the pizza to a cutting board and serve immediately. Repeat steps 4 and 5 to bake remaining pizzas.</Text>
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
        width: RFValue(140),
        height: RFValue(110),
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
        backgroundColor: "#c0549c",
        borderRadius:50,
        marginTop:20,
        width:RFValue(300),
        height:RFValue(570)
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
        margin:12
      },
      subpaste:{
        fontSize:RFValue(7),
        margin:12,
      }
})

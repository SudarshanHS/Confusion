import React, { Component } from 'react';
import Menu from './MenuComponents';
import { DISHES } from '../shared/dishes';
//import Dishdetail from './DishdetailComponenet';
import Dishdetail from './DishdetailComponenet';
import { View, Platform } from 'react-native'

/* import { createStackNavigator } from 'react-navigation';
 */

import Home from './HomeComponent';
import AboutUs from './AboutUsComponenet'
import ContactUs from './ContactUsComponenet'


import { createStackNavigator } from "react-navigation-stack";


import { createDrawerNavigator } from 'react-navigation-drawer';



import {

  createAppContainer
} from 'react-navigation';



const MenuNavigator = createAppContainer(createStackNavigator({
  Menu: { screen: Menu },
  Dishdetail: { screen: Dishdetail }

},
  {
    initialRouteName: 'Menu',
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }))



const HomeNavigator = createAppContainer(createStackNavigator({
  Home: { screen: Home },

},
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }))


  const AboutUsNavigator = createAppContainer(createStackNavigator({

    AboutUs : {screen: AboutUs },

  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: "#fff"
      }
    }


  }))


  const ContactUsNavigator = createAppContainer(createStackNavigator({

    ContactUs : {screen: ContactUs },

  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: "#fff"
      }
    }


  }))



const MainNavigator = createAppContainer(createDrawerNavigator({

  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      title: "Home",
      drawerLabel: 'Home'
    }
  },

  Menu: {
    screen: MenuNavigator,
    navigationOptions: {
      title: "Menu",
      drawerLabel: 'Menu'
    }
  },

  AboutUs : {
    screen: AboutUsNavigator,
    navigationOptions: {
      title: "AboutUs",
      drawerLabel: 'AboutUs'
    }
  },

  ContactUs : {
    screen: ContactUsNavigator,
    navigationOptions: {
      title: "ContactUs",
      drawerLabel: 'ContactUs'
    }
  }

},{
   drawerBackgroundColor : '#D1C4E9'
}))


class Main extends Component {

  render() {

    return (



      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
}

export default Main;


{/* <View style={{ flex: 1 }}>
<Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
<Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
</View> */}
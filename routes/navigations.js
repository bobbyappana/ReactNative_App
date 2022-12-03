import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Screens/Home";
import About from "../components/Screens/about";

const screen = {
    Home: {
        screen: Home,
        navigationOptions:{
            title:'Reactnative home',
            // headerStyle:{backgroundColor:'green'}
        }
    },
}

const Navigations = createStackNavigator(screen, {
    defaultNavigationOptions:{
        headerStyle: { backgroundColor: 'green' }
    }
})

export default Navigations
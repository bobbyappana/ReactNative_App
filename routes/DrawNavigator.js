import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../components/Screens/Home";
import About from "../components/Screens/about";

const screen = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'React native About',
            // headerStyle: { backgroundColor: 'green' }
        }
    }
}

const DrawNavigations = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: 'green' }
    }
})

// export default createAppContainer(Navigations)
export default DrawNavigations
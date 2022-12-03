import { createDrawerNavigator } from "react-navigation-drawer";
import Navigations from "./navigations";
import DrawNavigations from "./DrawNavigator";
import { createAppContainer } from "react-navigation";

const RootDrawerNavigator = createDrawerNavigator({
    home:{
        screen: Navigations
    }, 
    home: {
        screen: DrawNavigations
    }
})

export default createAppContainer(RootDrawerNavigator)
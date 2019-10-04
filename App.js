import {createAppContainer} from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'

import Home from './components/Home'
import Camera from './components/Camera'
import SelectedImage from './components/WelcomeScrren/SelectedImage'

const AppNavigator = createStackNavigator ({
  Home:{
    screen:Home
  },
  Camera:{
    screen:Camera
  },
  SelectedImage:{
    screen:SelectedImage
  }
},{
  initialRouteName: 'Home',
  headerMode: 'none',
})
export default createAppContainer(AppNavigator)
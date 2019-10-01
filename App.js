import {createAppContainer} from 'react-navigation'
import {createStackNavigator } from 'react-navigation-stack'

import Home from './components/Home'
import Camera from './components/Camera'

const AppNavigator = createStackNavigator ({
  Home:{
    screen:Home
  },
  Camera:{
    screen:Camera
  }
},{
  initialRouteName: 'Home',
  headerMode: 'none',
})
export default createAppContainer(AppNavigator)
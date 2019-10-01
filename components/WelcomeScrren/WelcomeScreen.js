import React from 'react';
import { StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';
import { Container, Button, Icon, } from 'native-base';
import {withNavigation} from 'react-navigation'

 class WelcomeScreen extends React.Component {
  render() {
    return (
      <Container style={Styles.Container}>
        <LottieView source={require('./selfie.json')} autoPlay />
        <Button  large rounded onPress={()=>this.props.navigation.navigate('Camera')}>
          <Icon name="camera" />
        </Button>
      </Container>
    );
  }
}

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin:'2%'
  }
})

export default withNavigation(WelcomeScreen)
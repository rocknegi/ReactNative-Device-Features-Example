import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import LottieView from 'lottie-react-native';
import { Container, Button, Icon, Content } from 'native-base';
import { withNavigation } from 'react-navigation'

class WelcomeScreen extends React.Component {
  render() {
    return (
      <Container style={styles.Container}>
        <LottieView
          source={require('./selfie.json')} autoPlay />
        <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate('Camera')} 
        >        
        <Icon style={{fontSize:60, color: '#455A64'}} name="camera"/>
        </TouchableOpacity>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: '3%',
    height: Dimensions.get('window').height/1.3,
  },
  box: {
    height: 70,
    width: 70,
    borderRadius:100,
    backgroundColor: '#e76e63',
  }
})

export default withNavigation(WelcomeScreen)
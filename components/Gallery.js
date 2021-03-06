import React from 'react';
import { StyleSheet, Modal, TouchableOpacity, PermissionsAndroid, Dimensions, Image,Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import CameraRoll from "@react-native-community/cameraroll";
import { Container, Content } from 'native-base';
import {withNavigation} from 'react-navigation'

const width = Dimensions.get('window').width

 class Gallery extends React.Component {
  state = {
    photos: [],
    selectedImage:false,
    uri:''
  }
  getPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'App Device Storage Permission',
          message:
            'App needs access to your Device Storage ' +
            'so you can see awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        CameraRoll.getPhotos({
          first: 20,
          assetType: 'Photos',
        })
          .then(r => {
            this.setState({ photos: r.edges })
          })
          .catch((err) => {
            alert(err)
          });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }

  }

  componentDidMount() {
    this.getPermission()

  }
  openImage = (uri) => {
    this.props.navigation.navigate('SelectedImage',{
      uri
    })
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content
          contentContainerStyle={styles.scrollView}>
          {this.state.photos.map((p, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => this.openImage(p.node.image.uri)}
              >
                <FastImage
                  style={{ width: width / 4, height: width / 3.2, marginBottom: 10 }}
                  source={{
                    uri: p.node.image.uri,
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>

            );
          })}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    height: Dimensions.get('window').height / 1.3,
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
})
export default withNavigation(Gallery)
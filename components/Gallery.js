import React from 'react';
import { StyleSheet, View, ScrollView, PermissionsAndroid, Dimensions } from 'react-native'
import FastImage from 'react-native-fast-image'
import CameraRoll from "@react-native-community/cameraroll";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Gallery extends React.Component {
  state = {
    photos: []
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
        contentContainerStyle={styles.scrollView}>
          {this.state.photos.map((p, i) => {
            return (
              <FastImage
                key={i}
                style={{ width:width/4, height: width/3 }}
                source={{
                  uri: p.node.image.uri ,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />

            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  scrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
})
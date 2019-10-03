import React, { Component } from 'react'
import { Dimensions } from 'react-native'
import { Container, Content } from 'native-base'
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import RetroMapStyles from './RetroMapStyles.json';

const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

export default class Maps extends Component {
    state = {
        region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }
    }
    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                      }
                });
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }
    render() {
        return (
            <Container>
                <Content>
                    <MapView
                        style={{
                            width: '100%',
                            height: Dimensions.get('screen').height
                        }}
                        customMapStyle={RetroMapStyles}
                        showsUserLocation={true}
                        region={this.state.region}
                    />
                </Content>
            </Container>
        )
    }
}

import React, { Component } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { Container, Content, Icon, Button } from 'native-base'
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import RetroMapStyles from './RetroMapStyles.json';

const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0122;
const LONGITUDE_DELTA = Dimensions.get('window').width / Dimensions.get('window').height * 0.0122;

export default class Maps extends Component {
    state = {
        region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
        locationChosen: false
    }
    componentDidMount() {
        this.getCurrentPosition()
    }
    getCurrentPosition = () =>
        Geolocation.getCurrentPosition(
            position => {
                const coordsEvent = {
                    nativeEvent: {
                        coordinate: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        }
                    }
                }
                this.pickedLocationHandler(coordsEvent)
            },
            (error) => console.log(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );

    pickedLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.region,
            latitude: coords.latitude,
            longitude: coords.longitude
        })
        this.setState(prevState => {
            return {
                region: {
                    ...prevState.region,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            }
        })

    }
    render() {
        let marker = null;
        if (this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.region} />
        }
        return (
            <Container style={{ height: Dimensions.get('window').height / 1.3, }}>
                <Content>
                    <MapView
                        style={{
                            width: '100%',
                            height: Dimensions.get('screen').height
                        }}
                        initialRegion={this.state.region}
                        onPress={this.pickedLocationHandler}
                        customMapStyle={RetroMapStyles}
                        showsUserLocation={true}
                        ref={ref => this.map = ref}
                    >
                        {marker}
                    </MapView>
                </Content>
                <Icon
                style={{fontSize:40,left:'85%'}}
                    onPress={this.getCurrentPosition}
                    type="MaterialIcons"
                    name="my-location" />
            </Container>
        )
    }
}

import React, { Component } from 'react'
import { Container } from 'native-base'

import TopNavigationBar from './TopNavigationBar'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <TopNavigationBar
                    h1="camera"
                    h2="Galery"
                    h3="Location"
                    icon="camera"
                />
            </Container>
        )
    }
}


import React from 'react';
import { Container, Header, TabHeading, Tab, Tabs, Icon, StyleProvider, Content } from 'native-base';
import { Text, StyleSheet } from 'react-native'
import propTypes from 'prop-types'
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

import WelcomeSreen from './WelcomeScrren/WelcomeScreen'
import Gallery from './Gallery';
import Maps from './maps/Maps';

const TopNavigationBar = ({
  h1,
  h2,
  h3,
  icon
}) => {
  TopNavigationBar.propTypes = {
    h1: propTypes.string.isRequired,
    h2: propTypes.string.isRequired,
    h3: propTypes.string.isRequired,
    icon: propTypes.string.isRequired
  }
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Header style={styles.Header} androidStatusBarColor='#455A64'>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>REACT NATIVE </Text>
        </Header>
        <Content>
          <Tabs>
            <Tab
              heading={
                <TabHeading>
                  <Icon name={icon} />
                  <Text style={[styles.text], { marginLeft: '5%' }}>{h1}</Text>
                </TabHeading>}>
              <WelcomeSreen />
            </Tab>
            <Tab heading={
              <TabHeading>
                <Text style={styles.text}>{h2}</Text>
              </TabHeading>}>
              <Gallery />
            </Tab>
            <Tab heading={
              <TabHeading>
                <Text style={styles.text}>{h3}</Text>
              </TabHeading>}>
              <Maps />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    </StyleProvider>
  );
}
export default TopNavigationBar

const styles = StyleSheet.create({
  Header: {
    borderRadius: 6,
    elevation:5,
    backgroundColor: '#FFF',
    marginVertical: '2%',
    marginHorizontal: '3%',
    height: 40
  },
  text: {
    color: '#000'
  }
})
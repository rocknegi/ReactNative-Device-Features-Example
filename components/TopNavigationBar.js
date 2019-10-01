import React from 'react';
import { Container, Header, TabHeading, Tab, Tabs, Icon } from 'native-base';
import { Text } from 'react-native'
import propTypes from 'prop-types'

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
    <Container>
      <Header />
      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Icon name={icon} />
              <Text style={{ color: '#fff', marginLeft: '5%' }}>{h1}</Text>
            </TabHeading>}>
        </Tab>
        <Tab heading={h2}>
        </Tab>
        <Tab heading={h3}>
        </Tab>
      </Tabs>
    </Container>
  );
}
export default TopNavigationBar
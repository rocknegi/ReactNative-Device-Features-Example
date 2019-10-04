import React from 'react'
import { Dimensions, Image } from 'react-native'
import { Container, Content, Header, Icon, Left, Body, Button} from 'native-base'

const height = Dimensions.get('window').height / 1.3
const width = Dimensions.get('window').width / 1

const SelectedImage = (props) => {
    const uri = props.navigation.getParam('uri');
    return (
        <Container>
            <Header style={{backgroundColor:'#607D8B',}}
            androidStatusBarColor='#455A64'
            >
                <Left>
                    <Button large transparent onPress={() => props.navigation.goBack()}>
                        <Icon name='arrow-back' style={{fontSize:26,color:'#fff'}}/>
                    </Button>
                </Left>
                <Body/>
            </Header>
            <Content>
                <Image
                    style={{ width: '100%', height: height, marginTop: '5%' }}
                    source={{ uri }}
                />
            </Content>
        </Container>
    )
}

export default SelectedImage

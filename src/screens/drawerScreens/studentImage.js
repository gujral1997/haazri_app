import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, ListView, View, ActivityIndicator, ToastAndroid } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, StyleProvider, Title } from 'native-base';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';

function boolean(string)
{
  if(string==='true')
  {
    return true;
  }
  else {
    {
      return false;
    }
  }
}
function reverse(bool)
{
  if(bool==='true')
  {
    return 'false';
  }
  else {
    {
      return 'true';
    }
  }
}
function string(bool)
{
  if(bool===true)
  {
    return 'true';
  }
  else {
    {
      return 'false';
    }
  }
}

export default class studentImage extends Component {

      toggleDrawer=()=> {
           this.props.navigator.toggleDrawer({
                 to: 'open',
                 side: 'left',
                 animated: true
           });
     }

      static navigatorStyle=startSingleScreenApplicationLogin;

      constructor(props) {
        super(props);
        this.state = {
          isLoading: true,
        }
      }

      componentDidMount() {
        return fetch('http://192.168.56.1:3000/images',{
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          }
        })
          .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.setState({
             isLoading: false,
             dataSource: ds.cloneWithRows(responseJson.message),
            }, function() {
             // do something with new state
            });
          })
          .catch(() => {
                this.props.navigator.push({
                     screen: "navigation.afterLogin"
              })
                ToastAndroid.showWithGravityAndOffset(
                         'Can\'t connect to Internet!',
                         ToastAndroid.LONG,
                         ToastAndroid.BOTTOM,
                         25,
                         50
                       );
          });
      }
  render() {

        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }

        return (
             <ScrollView>
             <StyleProvider style={getTheme(material)}>
                   <Container>
                        <Header>
                             <Left>
                                   <Button
                                          transparent onPress={this.toggleDrawer}
                                          >
                                                <Icon name="menu" />
                                   </Button>
                             </Left>
                         <Title>Attendance Manager</Title>
                         <Right>
                               <Button
                                      transparent onPress={()=>
                                            this.props.navigator.push({
                                                 screen: "navigation.studentImage"
                                          })
                                      }
                                      >
                                            <Icon name="refresh" />
                               </Button>
                        </Right>
                        </Header>
                      <Content>
                      <ListView
                            dataSource={this.state.dataSource}
                            renderRow={
                                  (rowData) =>
                                  <Card>
                                    <CardItem>
                                      <Left>
                                         <Thumbnail source={{uri: 'http://192.168.56.1:8000/data/work/haazri_model/dataset_original/'+rowData.id+'/0.jpg'}} />
                                         <Body>
                                          <Text>{rowData.name}</Text>
                                          <Text note>.{rowData.id}</Text>
                                         </Body>
                                      </Left>
                                    </CardItem>
                                    <CardItem cardBody>
                                      <Image source={{uri: 'http://192.168.56.1:8000/data/work/haazri_model/dataset_original/'+rowData.id+'/0.jpg'}} style={{height: 400, width: null, flex: 1}}/>
                                    </CardItem>
                                    <CardItem>
                                      <Left>
                                         <Button transparent>
                                          <Icon active name="thumbs-up" />
                                          <Text>12 Likes</Text>
                                         </Button>
                                      </Left>
                                      <Body>
                                         <Button transparent>
                                          <Icon active name="chatbubbles" />
                                          <Text>4 Comments</Text>
                                         </Button>
                                      </Body>
                                      <Right>
                                         <Text>11h ago</Text>
                                      </Right>
                                    </CardItem>
                                  </Card>
                              }
                      />
                      </Content>
                   </Container>
             </StyleProvider>
        </ScrollView>

        );
   }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

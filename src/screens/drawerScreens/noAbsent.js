import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, ListView, View, ActivityIndicator, ToastAndroid } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, StyleProvider, Title } from 'native-base';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';

export default class noAbsent extends Component {

      toggleDrawer=()=> {
           this.props.navigator.toggleDrawer({
                 to: 'open',
                 side: 'left',
                 animated: true
           });
     }

      static navigatorStyle=startSingleScreenApplicationLogin;

  render() {
        return (

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
                           <Text>No Student Is Absent</Text>
                      </Content>
                   </Container>

        );
   }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });

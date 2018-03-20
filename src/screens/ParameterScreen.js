import React,{Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import material from '../../native-base-theme/variables/material';
import getTheme from '../../native-base-theme/components';
import { ActivityIndicator, ListView,View,ScrollView,StyleSheet,Switch, ToastAndroid, ImageBackground } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input } from 'native-base';

export default class studentData extends Component {
  static navigatorStyle=startSingleScreenApplicationLogin;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <ScrollView>
      <StyleProvider style={getTheme(material)}>
        <ImageBackground source={require('../images/bg01.jpg')} style={styles.image}>
             <Container>
               <Header>
                 <Title>Attendance Manager</Title>
               </Header>
               <View style = {{flex:1, flexDirection: 'row'}}>
                     <View style = {{flex:1}} />
                     <View style = {{flex:2}}>
                           <View style ={{flex:10}} />
                           <View style ={{flex:10}}>
                                 <Item rounded>
                                       <Input placeholder='Course ID'/>
                                 </Item>
                           </View>
                           <View style ={{flex:10}}>
                                 <Item rounded>
                                       <Input placeholder='Class ID'/>
                                 </Item>
                           </View>
                           <View style ={{flex:10}}>
                                 <Item rounded>
                                       <Input placeholder='Room No.'/>
                                 </Item>
                           </View>
                           <View style ={{flex:10}}>
                                 <Item rounded>
                                       <Input placeholder='Rounded Textbox'/>
                                 </Item>
                           </View>
                           <View style ={{flex:10}} />
                           <View style ={{flex:10}} />
                           <View style ={{flex:10}}>
                                 <Item rounded>
                                       <Input placeholder='Rounded Textbox'/>
                                 </Item>
                           </View>
                           <View style ={{flex:10}} />
                     </View>
                     <View style = {{flex:1}} />
               </View>
               </Container>
         </ImageBackground>
         </StyleProvider>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'row'
  },
  list:{
 width: 128,
 justifyContent: 'center',
 alignItems: 'center',
  },
 listHeading:{
 width: 128,
 height: 50,
 justifyContent: 'center',
 alignItems: 'center',
  },
  textHeading:
  {
    fontWeight: 'bold',
    fontSize:20,
  },
  image: {

 }
});

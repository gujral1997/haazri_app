import React,{Component} from 'react';
import { ActivityIndicator, ListView,View,ScrollView,StyleSheet,Switch, ToastAndroid, ImageBackground, Image, KeyboardAvoidingView} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Item, Input, Button ,Left, Icon} from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';

var courseId = [{
value: 'UCS401',
}, {
value: 'UCS402',
}, {
value: 'UES100',
},
{
value: 'UTA007',
}
];

var classId = [{
value: 'COE',
}, {
value: 'ECE',
}, {
value: 'MEE',
},
{
value: 'EIC',
}
];

var roomNo = [{
value: '101',
}, {
value: '102',
}, {
value: '103',
},
{
value: '104',
}
];

export default class parameterScreen extends Component {



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

  render() {
    return (
      <ScrollView>
      <StyleProvider style={getTheme(material)}>
        <ImageBackground source={require('../../images/bg01.jpg')} style={styles.image}>
             <Container>
                   <Header>
                        <Left>
                              <Button
                                     transparent onPress={this.toggleDrawer}
                                     >
                                           <Icon name="menu" />
                              </Button>
                        </Left>
                    <Title style={{marginTop: 10}}>Attendance Manager</Title>
                   </Header>
               <View style = {{flex:1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                     <View style = {{flex:1}} />
                     <View style = {{flex:2}}>
                           <View style ={{flex:10}} />
                           <View style ={{flex:10}} />
                           <View style ={{flex:10}}>
                                 <Dropdown
                                      label='Course ID'
                                      baseColor='rgba(255, 255, 255, 1)'
                                      textColor='rgba(199, 147, 237, 1)'
                                      data={courseId}
                                    />
                           </View>
                           <View style ={{flex:10}}>
                                 <Dropdown
                                      label='Group ID'
                                      baseColor='rgba(255, 255, 255, 1)'
                                      textColor='rgba(199, 147, 237, 1)'
                                      data={classId}
                                    />
                           </View>
                           <View style ={{flex:10}}>
                                 <Dropdown
                                      label='Course ROom No'
                                      baseColor='rgba(255, 255, 255, 1)'
                                      textColor='rgba(199, 147, 237, 1)'
                                      data={roomNo}
                                    />
                           </View>
                           <View style ={{flex:10}} />
                           <View style ={{flex:10}} />
                           <View style ={{flex:10, flexDirection:'row'}}>
                                 <View style={{flex:1}}/>
                                <View style={{flex:3}}>
                                      <Button rounded success onPress={this.onpress}>
                                            <Text style ={styles.textHeading}>Haazri</Text>
                                      </Button>
                                </View>
                                <View style={{flex:1}}/>
                           </View>
                           <View style ={{flex:10}} />
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
  onpress=()=>
  {
        this.props.navigator.push({
          screen:'navigation.studentData'
        });
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
    // fontWeight: 'bold',
    fontSize:20,
  },
  image: {

 },
 icon: {
   width: 24,
   height: 24,
 },
});

import React,{Component} from 'react';
import { ActivityIndicator, ListView,View,ScrollView,StyleSheet,Switch, ToastAndroid, ImageBackground, Image, RefreshControl, Promise } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Left, Button, Icon, Right} from 'native-base';
import {Navigation} from 'react-native-navigation';
import PTRView from 'react-native-pull-to-refresh';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';



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

export default class studentData extends Component {

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
    return fetch('http://192.168.56.1:3000/users1',{
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

  refresh(){
        this.props.navigator.push({
             screen: "navigation.studentData"
      });
 }
 reload(){
      this.props.navigator.push({
           screen: "navigation.afterLogin"
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
                    <Title>Attendance Manager</Title>
                    <Right>
                          <Button
                                 transparent onPress={()=>
                                       this.props.navigator.push({
                                            screen: "navigation.studentData"
                                     })
                                 }
                                 >
                                       <Icon name="refresh" />
                          </Button>
                   </Right>
                   </Header>

               <Content>
                 <List>
                   <View style={{flex: 1, flexDirection: 'row'}}>
                     <View style={styles.listHeading}><Text style={styles.text}>ID</Text></View>
                     <View style={styles.listHeading}><Text style={styles.text}>Name</Text></View>
                     <View style={styles.listHeading}><Text style={styles.text}>Status</Text></View>
                   </View>
                   <ListView
                     dataSource={this.state.dataSource}
                     renderRow={(rowData) =>
                            <View style={styles.container}>
                                  <View style={styles.list}><Text style={styles.textHeading}>{rowData.id}</Text></View>
                       <View style={styles.list}><Text style={styles.textHeading}>{rowData.name}</Text></View>
                       <View style={styles.list}>
                         <Switch
                           onValueChange={ (value) =>
                             {
                               fetch('http://192.168.56.1:3000/switching',{
                                 method:'POST',
                                 headers:{
                                   'Accept':'application/json',
                                   'Content-Type':'application/json',
                                 },
                                 body:JSON.stringify({
                                   value:reverse(rowData.status),
                                   name:rowData.name,
                                 })
                               })
                               .then((response)=>response.json())
                               .then((res)=>{
                                 var value=reverse(rowData.status);
                                 var name=rowData.name;
                                 //AsyncStorage.setItem('value',rowData.status);
                                 //AsyncStorage.setItem('name',rowData.name);
                                 ToastAndroid.showWithGravityAndOffset(
                                           res.message,
                                           ToastAndroid.SHORT,
                                           ToastAndroid.BOTTOM,
                                           ToastAndroid.CENTER,
                                           50,
                                           30
                                         );
                                 // alert(res.message);
                                 this.props.navigator.push({
                           screen: "navigation.studentData"
                     		});

                               })
                               .catch(function(){
                                     ToastAndroid.showWithGravityAndOffset(
                                              'Can\'t connect to Internet!',
                                              ToastAndroid.LONG,
                                              ToastAndroid.BOTTOM,
                                              25,
                                              50
                                            );
                               });
                             }
                           }
                           value={boolean(rowData.status)}
                         />
                       </View>
                     </View>}
                   />
                   <View style={{flex: 1, flexDirection: 'row'}}>
                     <View style={styles.list} />
                     <View style={styles.list} />
                     <View style={styles.list} />
                   </View>
                 </List>
               </Content>
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
  text:
  {
    fontWeight: 'bold',
    fontSize:20,
    color:'white'
  },
  textHeading: {
        color:'white'
 },
  image: {

 },
 icon: {
   width: 24,
   height: 24,
 },
});

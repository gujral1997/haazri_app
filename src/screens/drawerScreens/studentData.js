import React,{Component} from 'react';
import { ActivityIndicator, ListView,View,ScrollView,StyleSheet,Switch, ToastAndroid, ImageBackground, Image, RefreshControl, Promise } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title, StyleProvider, Left, Button, Icon, Right} from 'native-base';
import {Navigation} from 'react-native-navigation';
import PTRView from 'react-native-pull-to-refresh';
import {startSingleScreenApplicationLogin} from '../../styles/navigatorStyles';
import material from '../../../native-base-theme/variables/material';
import getTheme from '../../../native-base-theme/components';

var hello = 'tick';

function image(string)
{
  if(string=='true')
  {
    return 'tick.png';
  }
  else {
    {
      return 'cross.png';
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
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
        };
  }


  componentDidMount() {
    return fetch('http://192.168.43.137:3000/users1',{
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
    if (this.state.dataSource.getRowCount() === 0) {
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
                              <Image source={{uri:'http://192.168.43.137:8000/data/sih/navigation/src/images/'+image(rowData.status)}} style={styles.icon}
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

    else {
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
                               <Image source={{uri:'http://192.168.43.137:8000/data/sih/navigation/src/images/'+image(rowData.status)}} style={styles.icon}
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

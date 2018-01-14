import React,{Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import { ActivityIndicator, ListView,View,ScrollView,StyleSheet,Switch } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title } from 'native-base';
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
  static navigatorStyle=startSingleScreenApplicationLogin;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
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
      .catch((error) => {
        console.error(error);
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
        <Container>
          <Header>
            <Title>Attendance Manager</Title>
          </Header>
          <Content>
            <List>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={styles.listHeading}><Text style={styles.textHeading}>ID</Text></View>
                <View style={styles.listHeading}><Text style={styles.textHeading}>Name</Text></View>
                <View style={styles.listHeading}><Text style={styles.textHeading}>Status</Text></View>
              </View>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <View style={styles.container}><View style={styles.list}><Text>{rowData.id}</Text></View>
                  <View style={styles.list}><Text>{rowData.name}</Text></View>
                  <View style={styles.list}>
                    <Switch
                      onValueChange={ (value) =>
                        {
                          fetch('http://192.168.43.137:3000/switching',{
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
                            alert(res.message);
                            this.props.navigator.push({
                              screen:'navigation.studentData'
                            });

                          })
                          .done();
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
    fontSize:20,
  },
});

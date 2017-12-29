import React,{Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {startSingleScreenApplicationLogin} from '../styles/navigatorStyles';
import { ActivityIndicator, ListView,View,ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Title } from 'native-base';
export default class studentData extends Component {
  static navigatorStyle=startSingleScreenApplicationLogin;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('http://192.168.63.1:3000/users1',{
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
            <ListItem>
              <Text>S.no                           Name                               Satus</Text>
            </ListItem>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>        {rowData.id}                           {rowData.name}                             {rowData.status}</Text>}
            />
          </List>
        </Content>
      </Container>
      </ScrollView>
    );
  }
}

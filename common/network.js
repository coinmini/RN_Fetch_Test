import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import request from './request'

export default class NetWork extends Component{
  constructor (props){
    super(props)
    this.state = {
      content: 'yesyes'
    }
  }

  componentDidMount(){
    console.log('check if have NetWork')
    this._network()
  }

_network(){
  request.get('https://op.juhe.cn/onebox/basketball/nba?key=12f024bad059da7267eb0b22ca99f0a4')
        .then((data) => {
          if(data){
            console.log('check if have data')
              console.log(data)
              this.setState({
                content: data.result.title
              })
            }
          })
        }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          follow contents are from biyerbuy.info
        </Text>
        <View>
          <Text style={styles.welcome}>
            {this.state.content}
          </Text>
        </View>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }

  })

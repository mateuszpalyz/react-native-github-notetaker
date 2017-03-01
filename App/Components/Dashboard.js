import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToRepos = this.goToRepos.bind(this);
    this.goToNotes = this.goToNotes.bind(this);
  }

  makeBackgroud(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0){
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  goToProfile(event) {
    1;
  }

  goToRepos(event) {
    1;
  }

  goToNotes(event) {
    1;
  }

  render () {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        <TouchableHighlight
          style={this.makeBackgroud(0)}
          onPress={this.goToProfile}
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackgroud(1)}
          onPress={this.goToRepos}
          underlayColor='#E39EBF'>
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackgroud(2)}
          onPress={this.goToNotes}
          underlayColor='#9BAAF3'>
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

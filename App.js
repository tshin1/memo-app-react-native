import Expo from 'expo';
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Container, Button, Text } from 'native-base';

export default class Setup extends Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });

    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Button>
            <Text>
                Button
            </Text>
        </Button>
      </Container>
    );
  }
}

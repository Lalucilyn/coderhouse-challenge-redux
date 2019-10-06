import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { authorize } from '../spotify-api-client'

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Necesitas estar logueado',
  }

  _handleAuthButtonPress = () => {
    authorize().then(loggedIn => {
      if (loggedIn) {
        this.props.navigation.navigate('App')
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Login con Spotify" onPress={this._handleAuthButtonPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

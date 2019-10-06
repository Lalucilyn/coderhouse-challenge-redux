import React from 'react'
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native'
import { authorize, logout, getUserArtistsPromise } from '../spotify-api-client'
import ArtistaFavorito from '../ArtistaFavorito'

export default class HomeScreen extends React.Component {
  state = {
    result: null,
  }

  componentDidMount() {
    getUserArtistsPromise().then(artistas => this.setState({ artistas }))
  }

  _handleLogoutButtonPress = () => {
    logout().then(() => {
      this.props.navigation.navigate('Auth')
    })
  }

  render() {
    const { loggedIn, artistas } = this.state

    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          {artistas && artistas.map(artist => <ArtistaFavorito artista={artist} key={artist.nombre} />)}
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <Button title="Logout" onPress={this._handleLogoutButtonPress} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000C0',
  },

  scrollView: {
    flex: 1,
    width: '100%',
  },

  scrollViewContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
})

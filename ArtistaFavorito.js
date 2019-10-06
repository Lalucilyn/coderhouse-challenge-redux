import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux';
import {UPDATE_FAVORITES} from './reducers/artists'

class ArtistaFavorito extends React.Component {
  handleStarButtonPress = () => {
    let currentFavorites = [...this.props.favorites]
    if (this.props.favorites.findIndex(fav => fav.id === this.props.artista.id) === -1) {
      currentFavorites.push(this.props.artista)
      this.props.updateFavorites(currentFavorites)
    } else {
      let newFavorites = currentFavorites.filter(fav => fav.id !== this.props.artista.id)
      this.props.updateFavorites(newFavorites)
    }
  }

  render() {
    const {
      artista: { nombre, imagen, id },
      favorites
    } = this.props
    const isItAfavorite = favorites.findIndex(fav => fav.id === id) !== -1

    return (
      <View style={[styles.container, styles.conSombra]}>
        <Image source={{ uri: imagen }} style={styles.imagen} />
        <View style={styles.dataContainer}>
          <Text style={styles.nombre}>{nombre}</Text>
          <TouchableOpacity onPress={this.handleStarButtonPress}>
            <Text onPress={this.handleStarButtonPress} style={[styles.starButton, isItAfavorite && styles.favorito]}>{isItAfavorite ? '💖' : '🌟'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

ArtistaFavorito.propTypes = {
  artista: PropTypes.shape({
    nombre: PropTypes.string,
    imagen: PropTypes.string,
  }),
}

ArtistaFavorito.defaultProps = {
  artista: {},
}

const mapStateToProps = (state) => {
  return {
    favorites: state.artists.favoritos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFavorites: (favorites) => {
      return dispatch ({
        type: UPDATE_FAVORITES,
        payload: {
          favorites: favorites
        },
      });
    },
  };
};
//connect = function(mapStateToProps, mapDispatchToProps ) => function(ArtistaFavorito)
export default connect (mapStateToProps, mapDispatchToProps) (ArtistaFavorito);

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 350,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    marginVertical: 7,
    flexDirection: 'row',
  },

  nombre: {
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  starButton: {
    textAlign: 'center',
    fontSize: 25,
    opacity: 0.7,
  },

  favorito: {
    fontSize: 35,
  },

  imagen: {
    height: 150,
    width: 150,
  },

  conSombra: {
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowRadius: 1.5,
    shadowOpacity: 0.4,
    elevation: 2,
  },

  dataContainer: {
    flex: 1,
  },
})

import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';

const backgrounds = [
  require('../../assets/backgrounds/background0.jpg'),
  require('../../assets/backgrounds/background1.jpg'),
  require('../../assets/backgrounds/background2.jpg'),
  require('../../assets/backgrounds/background3.jpg'),
  require('../../assets/backgrounds/background4.jpg'),
  require('../../assets/backgrounds/background5.jpg'),
  require('../../assets/backgrounds/background6.jpg'),
  require('../../assets/backgrounds/background7.jpg')
];

export default class Main extends Component {
  state = {
    imageIndex: 0
  }
  componentDidMount() {
    this.mounted = true;
    setInterval(() => {
      this.mounted && this.setState({imageIndex: this.state.imageIndex === 7 ? 0 : this.state.imageIndex + 1});
    }, 5000);
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.background}
          source={backgrounds[this.state.imageIndex]}
          resizeMode="cover"
        />
        <View style={styles.greyOverlay} />
        <Image 
          style={styles.logo}
          source={require('../../assets/logo.png')}
          resizeMode="contain"
        />
        <Text style={styles.description}>
          Genç sporcuların maçlarını ve turnuvalarını takip et.
        </Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => this.props.changePage('Register')}
          >
            <Text style={styles.buttonText}>Kayıt Ol</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => this.props.changePage('Login')}
          >
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  greyOverlay: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    opacity: .5
  },
  logo: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: Dimensions.get('window').height / 4 - 100,
    left: Dimensions.get('window').width / 2 - 100,
    borderRadius: 100
  },
  description: {
    color: 'white',
    flex: 1,
    margin: 20,
    marginTop: 50,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '200'
  },
  buttonGroup: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  registerButton: {
    backgroundColor: '#47AC6C',
    width: '45%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
  },
  loginButton: {
    width: '45%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    color: 'white'
  }
});

import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert
} from 'react-native';

import Loading from '../../components/shared/Loading/Loading';

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

export default class Register extends Component {
  state = {
    email: '',
    password: '',
    password2: '',
    imageIndex: 0
  };
  register = () => {
    if (this.state.password === this.state.password2) {
      this.props.register(this.state.email, this.state.password);
    } else {
      Alert.alert('Şifre doğrulanamadı, lütfen iki kutucuğa da aynı şifreyi girdiğinize emin olun.');
    }
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
        <TouchableOpacity 
          style={styles.backButtonContainer}  
          onPress={() => this.props.changePage('Main')}
        >
          <Text style={styles.backButton}>&lt; Geri</Text>
        </TouchableOpacity>
        <Image 
          style={styles.logo}
          source={require('../../assets/logo.png')}
          resizeMode="contain"
        />
        {this.props.loading ? 
          (
            <Loading message="Kayıt olunuyor" />
          ) : (
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="E-mail"
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
              />
              <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Şifre"
                value={this.state.password}
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={(password) => this.setState({password})}
              />
              <TextInput 
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Şifreyi Doğrula"
                value={this.state.password2}
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={(password2) => this.setState({password2})}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={this.register}
              >
                <Text style={styles.buttonText}>Kayıt Ol</Text>
              </TouchableOpacity>
            </View>
          )
        }
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
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
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
  backButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: '100'
  },
  logo: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: Dimensions.get('window').height / 4 - 100,
    left: Dimensions.get('window').width / 2 - 100,
    borderRadius: 100
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.75)',
    textAlign: 'center'
  },
  form: {
    width: Dimensions.get('window').width - 20,
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    marginTop: 100
  },
  input: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 40,
    borderWidth: 0,
    borderRadius: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#47AC6C',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2
  },
  buttonText: {
    color: 'white'
  }
});

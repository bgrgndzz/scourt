import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, AsyncStorage } from 'react-native';

import Main from './app/containers/Main/Main';
import Login from './app/containers/Login/Login';
import Register from './app/containers/Register/Register';
import Matches from './app/containers/Matches/Matches';
import Players from './app/containers/Players/Players';
import Player from './app/containers/Player/Player';
import Tournaments from './app/containers/Tournaments/Tournaments';
import Tournament from './app/containers/Tournament/Tournament';
import Clubs from './app/containers/Clubs/Clubs';
import Club from './app/containers/Club/Club';

export default class App extends Component {
  state = {
    loggedIn: false,
    loading: false,
    page: '',
    matches: [],
    players: [],
    tournaments: [],
    clubs: [],
    player: {},
    tournament: {},
    club: {},
    user: {},
  };
  toggleLoading = () => {
    this.setState({loading: !this.state.loading});
  }
  formatDate = (date) => {
    if (date.length === 10) {
      date = date.split('-');
      const [year, month, day] = date;
      const months = [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık'
      ];
      date = [day.replace(/(^0+|0+$)/mg, ''), months[Number(month) - 1], year].join(' ');
    }
    return date;
  }
  loadMatches = () => {
    if (this.state.loggedIn) {
      AsyncStorage.getItem('token', (err, token) => {
        if (err || !token) Alert.alert('Bilinmeyen bir hata oluştu');
        fetch('https://scourt.tk/app/matches', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
          if (response.err || response.error) {
            return Alert.alert(response.err || response.error.text);
          }
          this.setState({
            matches: response,
            page: 'Matches',
            loading: false
          });
        })
        .catch(err => Alert.alert('Bilinmeyen bir hata oluştu'));
      });
    }
  };
  loadTournament = (id) => {
    if (this.state.loggedIn) {
      AsyncStorage.getItem('token', (err, token) => {
        if (err || !token) Alert.alert('Bilinmeyen bir hata oluştu');
        fetch('https://scourt.tk/app/tournament/' + id, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
          if (response.err || response.error) {
            return Alert.alert(response.err || response.error.text);
          }
          this.setState({
            tournament: response,
            page: 'Tournament'
          });
        })
        .catch(err => Alert.alert(err));
      });
    }
  };
  loadTournaments = () => {
    if (this.state.loggedIn) {
      AsyncStorage.getItem('token', (err, token) => {
        if (err || !token) Alert.alert('Bilinmeyen bir hata oluştu');
        fetch('https://scourt.tk/app/tournaments', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
          if (response.err || response.error) {
            return Alert.alert(response.err || response.error.text);
          }
          this.setState({
            tournaments: response,
            page: 'Tournaments'
          });
        })
        .catch(err => Alert.alert(err));
      });
    }
  };
  loadPlayer = (id) => {
    if (this.state.loggedIn) {
      AsyncStorage.getItem('token', (err, token) => {
        if (err || !token) Alert.alert('Bilinmeyen bir hata oluştu');
        fetch('https://scourt.tk/app/player/' + id, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
          if (response.err || response.error) {
            return Alert.alert(response.err || response.error.text);
          }
          this.setState({
            player: response,
            page: 'Player'
          });
        })
        .catch(err => Alert.alert(err));
      });
    }
  };
  loadPlayers = () => {
    if (this.state.loggedIn) {
      AsyncStorage.getItem('token', (err, token) => {
        if (err || !token) Alert.alert('Bilinmeyen bir hata oluştu');
        fetch('https://scourt.tk/app/players', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
          if (response.err || response.error) {
            return Alert.alert(response.err || response.error.text);
          }
          this.setState({
            players: response,
            page: 'Players'
          });
        })
        .catch(err => Alert.alert(err));
      });
    }
  };
  loadClub = (id) => {
    if (this.state.loggedIn) {
      AsyncStorage.getItem('token', (err, token) => {
        if (err || !token) Alert.alert('Bilinmeyen bir hata oluştu');
        fetch('https://scourt.tk/app/club/' + id, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
          if (response.err || response.error) {
            return Alert.alert(response.err || response.error.text);
          }
          this.setState({
            club: response,
            page: 'Club'
          });
        })
        .catch(err => Alert.alert(err));
      });
    }
  };
  loadClubs = () => {
    if (this.state.loggedIn) {
      AsyncStorage.getItem('token', (err, token) => {
        if (err || !token) Alert.alert('Bilinmeyen bir hata oluştu');
        fetch('https://scourt.tk/app/clubs', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          method: 'GET'
        })
        .then(response => response.json())
        .then(response => {
          if (response.err || response.error) {
            return Alert.alert(response.err || response.error.text);
          }
          this.setState({
            clubs: response,
            page: 'Clubs'
          });
        })
        .catch(err => Alert.alert(err));
      });
    }
  };
  logout = () => {
    if (this.state.loggedIn) {
      AsyncStorage.getItem('token', (err, token) => {
        if (err || !token) Alert.alert('Bilinmeyen bir hata oluştu');
        AsyncStorage.removeItem('token', err => {
          if (err) Alert.alert('Bilinmeyen bir hata oluştu');
          this.setState({
            loggedIn: false,
            page: 'Main',
            matches: [],
            players: [],
            tournaments: [],
            player: {},
            tournament: {},
            user: {}
          });
        })
      });
    }
  }
  changePage = (page, id) => {
    if (this.state.loggedIn) {
      if (page === 'Matches') {
        this.loadMatches();
      } else if (page === 'Players') {
        this.loadPlayers();
      } else if (page === 'Player' && id) {
        this.loadPlayer(id);
      } else if (page === 'Tournaments') {
        this.loadTournaments();
      } else if (page === 'Tournament' && id) {
        this.loadTournament(id);
      } else if (page === 'Clubs') {
        this.loadClubs();
      } else if (page === 'Club' && id) {
        this.loadClub(id);
      } else if (page === 'Logout') {
        this.logout();
      }
    } else {
      if (page === 'Main') {
        this.setState({page: 'Main'});
      } else if (page === 'Login') {
        this.setState({page: 'Login'});
      } else if (page === 'Register') {
        this.setState({page: 'Register'});
      }
    }
  };
  login = (email, password) => {
    this.toggleLoading();
    fetch('https://scourt.tk/auth/login', {
      body: JSON.stringify({email, password}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    .then(response => response.json())
    .then(response => {
      if (response.err) {
        this.toggleLoading();
        return Alert.alert('Bir hata oluştu.', 'Şifre veya email yanlış olabilir.');
      }
      if (response.token) {
        AsyncStorage.setItem('token', response.token);
        this.setState({
          loggedIn: true,
          user: response.user
        });
        this.changePage('Matches');
      }
    })
    .catch(err => {
      this.toggleLoading();
      Alert.alert('Bilinmeyen bir hata oluştu');
    });
  }
  register = (email, password) => {
    this.toggleLoading();
    fetch('https://scourt.tk/auth/register', {
      body: JSON.stringify({email, password}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    .then(response => response.json())
    .then(response => {
      this.toggleLoading();
      if (response.err) {
        return Alert.alert(response.err);
      }
      Alert.alert('Hesap başarıyla oluşturuldu, şimdi giriş yapabilirsiniz.');
      this.changePage('Login');
    })
    .catch(err => {
      this.toggleLoading();
      Alert.alert('Bilinmeyen bir hata oluştu');
    });
  }
  componentDidMount() {
    AsyncStorage.getItem('token', (err, token) => {
      if (err) Alert.alert('Bilinmeyen bir hata oluştu');
      if (token) {
        this.setState({loggedIn: true});
        this.changePage('Matches');
      } else {
        this.setState({loggedIn: false});
        this.changePage('Main');
      }
    });
  }
  render() {
    if (this.state.page === 'Main') {
      return (
        <Main 
          changePage={this.changePage}
          user={this.state.user}
        />
      )
    } else if (this.state.page === 'Login') {
      return (
        <Login 
          changePage={this.changePage}
          login={this.login}
          toggleLoading={this.toggleLoading}
          user={this.state.user}
          loading={this.state.loading}
        />
      )
    } else if (this.state.page === 'Register') {
      return (
        <Register 
          changePage={this.changePage}
          register={this.register}
          toggleLoading={this.toggleLoading}
          user={this.state.user}
          loading={this.state.loading}
        />
      )
    } else if (this.state.page === 'Matches') {
      return (
        <Matches 
          changePage={this.changePage} 
          loadMatches={this.loadMatches}
          formatDate={this.formatDate}
          matches={this.state.matches}
          user={this.state.user}
        />
      );
    } else if (this.state.page === 'Players') {
      return (
        <Players 
          changePage={this.changePage} 
          loadPlayers={this.loadPlayers}
          players={this.state.players}
          user={this.state.user}
        />
      );
    } else if (this.state.page === 'Player') {
      return (
        <Player
          changePage={this.changePage} 
          loadPlayer={this.loadPlayer}
          formatDate={this.formatDate}
          player={this.state.player}
          user={this.state.user}
        />
      );
    } else if (this.state.page === 'Tournaments') {
      return (
        <Tournaments
          changePage={this.changePage} 
          loadTournaments={this.loadTournaments}
          tournaments={this.state.tournaments}
          user={this.state.user}
        />
      );
    } else if (this.state.page === 'Tournament') {
      return (
        <Tournament
          changePage={this.changePage} 
          loadTournament={this.loadTournament}
          formatDate={this.formatDate}
          tournament={this.state.tournament}
          user={this.state.user}
        />
      );
    } else if (this.state.page === 'Clubs') {
      return (
        <Clubs
          changePage={this.changePage} 
          loadClubs={this.loadClubs}
          clubs={this.state.clubs}
          user={this.state.user}
        />
      );
    } else if (this.state.page === 'Club') {
      return (
        <Club
          changePage={this.changePage} 
          loadClub={this.loadClub}
          club={this.state.club}
          user={this.state.user}
        />
      );
    } else {
      return null;
    }
  }
}

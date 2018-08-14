import React, { Component } from 'react';
import { 
  StyleSheet,
  Text
} from 'react-native';

export default class Loading extends Component {
  state = {
    dots: 0
  }
  componentDidMount() {
    this.mounted = true;
    setInterval(() => {
      this.mounted && this.setState({dots: this.state.dots === 3 ? 0 : this.state.dots + 1});
    }, 500);
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <Text style={styles.loading}>{this.props.message}{Array(this.state.dots).fill('.').join('')}</Text>
    );
  }
};

const styles = StyleSheet.create({
  loading: {
    fontSize: 40,
    fontWeight: '200',
    color: 'white'
  }
});
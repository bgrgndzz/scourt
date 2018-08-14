import React, { Component } from 'react';
import { 
  StyleSheet,
  Animated,
  Dimensions
} from 'react-native';

class Overlay extends Component {
  render() {
    return (
      <Animated.View 
        style={[
          styles.overlay, 
          this.props.styleOverlay
        ]} 
      />
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: Dimensions.get('window').height - 75,
    top: 75,
    left: 0,
    bottom: 0,
    right: 0,
    elevation: 2,
    backgroundColor: 'black'
  }
});

export default Overlay;
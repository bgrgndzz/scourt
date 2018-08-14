import React, { Component } from 'react';
import { 
  StyleSheet, 
  View,
  Animated,
  StatusBar
} from 'react-native';

import Drawer from '../../components/Page/Drawer/Drawer';
import Header from '../../components/Page/Header/Header';
import Overlay from '../../components/Page/Overlay/Overlay';

const Page = (BaseComponent) => {
  return class PageContent extends Component {
    state = {
      drawerOpen: false,
      left: new Animated.Value(-300),
      opacity: new Animated.Value(0)
    };
    toggleDrawer = () => {
      if (!this.state.drawerOpen) {
        this.setState({
          drawerOpen: true
        });
      }
      Animated.parallel([
        Animated.timing(
          this.state.left,
          {
            toValue: this.state.drawerOpen ? -300 : 0,
            duration: 400,
          }
        ),
        Animated.timing(
          this.state.opacity,
          {
            toValue: this.state.drawerOpen ? 0 : .75,
            duration: 400,
          }
        )
      ]).start(this.state.drawerOpen ? () => {
        this.setState({
          drawerOpen: false
        });
      } : null);
    };
    render() {
      return (
        <View style={styles.appContainer}>
          <StatusBar hidden />
          <Header toggleDrawer={this.toggleDrawer} />
          <BaseComponent {...this.props} />
          {this.state.drawerOpen ? [
          (<Overlay
            key="overlay" 
            styleOverlay={{
              opacity: this.state.opacity,
            }}
            drawerOpen={this.state.drawerOpen}
          />),
          (<Drawer
            key="drawer" 
            styleDrawer={{left: this.state.left}} 
            drawerOpen={this.state.drawerOpen}
            changePage={this.props.changePage}
            user={this.props.user}
          />)
          ] : null}
          
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({

});

export default Page;
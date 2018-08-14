import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.props.changePage('Tournament', this.props.item.id)}>
        <Text style={styles.name}>
            {
              this.props.search ? 
              this.props.item['İsim'].split(new RegExp(this.props.search, 'gi')).map((splitName, index, array) => {
                return [
                  (
                    <Text 
                      style={styles.normal}
                      key="normal"
                    >
                      {splitName}
                    </Text>
                  ),
                  index === array.length - 1 ? null : (
                    <Text 
                      style={styles.highlighted}
                      key="higlighted"
                    >
                      {this.props.item['İsim'].match(new RegExp(this.props.search, 'gi'))[index]}
                    </Text>
                  )
                ]
              }) :
              this.props.item['İsim']
            }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    marginBottom: 20,
    elevation: 1
  },
  name: {
    padding: 20,
    textAlign: 'center'
  },
  highlighted: {
    fontWeight: '600'
  }
});

export default ListItem;
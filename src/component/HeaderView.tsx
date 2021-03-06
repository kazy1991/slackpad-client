import * as React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { NavigationScreenProp, NavigationRoute } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Channel from '../model/Channel';

type Navigation = NavigationScreenProp<NavigationRoute<any>, any>;

interface Props {
  navigation: Navigation;
}
export default (props: Props) => {
  const navigation = props.navigation;
  const params = navigation.state.params;
  const channel: Channel = params && params.channel ? params.channel : { id: 101, name: 'general' };
  return (
    <View style={styles.header_container}>
      <TouchableHighlight
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <Ionicons name="md-menu" size={28} color="#eee" />
      </TouchableHighlight>
      <Text style={styles.header_text}>#{channel.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  header_text: {
    color: '#eee',
    fontWeight: 'bold',
    paddingLeft: 16,
    fontSize: 18,
  },
});

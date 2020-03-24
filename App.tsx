import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import BoxImage from '@components/boxImage';
import {Categories} from '@containers';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      {/* <BoxImage
          enableTick={true}
          onPress={() => console.log('d')}
          enableOverlay={true}
          uri={
            'https://i.ibb.co/p2MZYrh/starry-night-1149815-1920.jpg" alt="starry-night-1149815-1920'
          }
          title="Sports"
        /> */}
      <Categories />
    </View>
  );
};

export default App;

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {GlobalStyles} from '@modules';
import {CustomHeader, Drawer} from '@components';
import {ScrollView} from 'react-native-gesture-handler';
import {ExpressThoughts} from './expressThoughts';
import {SuggestedCommunities} from './suggestedCommunities';
import {Article} from './article';

export class HomePage extends React.Component {
  state = {
    showDrawer: false,
  };
  render() {
    return (
      <View style={[GlobalStyles.container]}>
        <SafeAreaView />
        <CustomHeader
          type={'HOME'}
          onLeftButtonPress={() => {
            this.setState({showDrawer: true});
          }}
        />
        <ScrollView
          stickyHeaderIndices={[0]}
          bounces={false}
          style={GlobalStyles.backgroundColorLightGray}>
          <ExpressThoughts />
          <SuggestedCommunities />
          <Article />
        </ScrollView>
        <Drawer
          open={this.state.showDrawer}
          onClose={() => {
            this.setState({showDrawer: false});
          }}
        />
      </View>
    );
  }
}

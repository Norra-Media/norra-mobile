import React from 'react';
import {
  View,
  SafeAreaView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {GlobalStyles} from '@modules';
import {CustomHeader, Drawer} from '@components';
import {ScrollView} from 'react-native-gesture-handler';
import {ExpressThoughts} from './expressThoughts';
import {SuggestedCommunities} from './suggestedCommunities';
import {Article} from './article';
import {BottomActionNavigator} from '@containers/bottomActionNavigator';

export class HomePage extends React.Component {
  state = {
    showDrawer: false,
    showBottomActionNavigator: true,
  };

  onScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {layoutMeasurement, contentOffset, contentSize} = event.nativeEvent;
    const paddingToBottom = 20;
    let showButton = true;
    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    ) {
      showButton = false;
    } else {
      showButton = true;
    }
    if (showButton !== this.state.showBottomActionNavigator) {
      this.setState({showBottomActionNavigator: showButton});
    }
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
          style={GlobalStyles.backgroundColorLightGray}
          onScrollEndDrag={this.onScrollEndDrag}>
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
        <BottomActionNavigator open={this.state.showBottomActionNavigator} />
      </View>
    );
  }
}

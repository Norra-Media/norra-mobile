import React from 'react';

import ActionButton from 'react-native-circular-action-menu';
import Profile from '@assets/profile.svg';
import WritePost from '@assets/write_post.svg';
import NorraBlue from '@assets/norra_blue.svg';
import HomeIcon from '@assets/home_blue_white_filled.svg';
import NotificationIcon from '@assets/notification_border_only.svg';
import {COLORS} from '@modules';
import {Animated, StyleSheet} from 'react-native';

interface Props {
  open: boolean;
}
export class BottomActionNavigator extends React.Component<Props> {
  animation = new Animated.Value(1);

  componentDidUpdate(PrevProps: Props) {
    if (this.props.open !== PrevProps.open && this.props.open) {
      this.startAnimation(1);
    }
    if (this.props.open !== PrevProps.open && !this.props.open) {
      this.startAnimation(0);
    }
  }

  startAnimation = (opacity: number) => {
    Animated.timing(this.animation, {
      toValue: opacity,
      duration: 400,
    }).start();
  };

  render() {
    const animatedStyle = {
      opacity: this.animation,
    };
    const buttonItemsProps = {
      height: 22,
      width: 20,
      style: {padding: 10},
    };
    return (
      <Animated.View style={[animatedStyle, Style.container]}>
        <ActionButton
          buttonColor={COLORS.WHITE}
          btnOutRange={COLORS.VERYLIGHTGRAY}
          icon={<NorraBlue width={25} height={22} />}>
          <ActionButton.Item
            buttonColor={COLORS.WHITE}
            title="Home"
            onPress={() => console.log('Home tapped!')}>
            <HomeIcon {...buttonItemsProps} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={COLORS.WHITE}
            title="New Post"
            onPress={() => {}}>
            <WritePost {...buttonItemsProps} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={COLORS.WHITE}
            title="Notifications"
            onPress={() => {}}>
            <NotificationIcon {...buttonItemsProps} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor={COLORS.WHITE}
            title="Profile"
            onPress={() => {}}>
            <Profile {...buttonItemsProps} />
          </ActionButton.Item>
        </ActionButton>
      </Animated.View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: '48%',
  },
});

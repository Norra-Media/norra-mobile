import React from 'react';

import Profile from '@assets/profile_white_filled.svg';
import WritePost from '@assets/post_white_filled.svg';
import NorraBlue from '@assets/norra_blue.svg';
import HomeIcon from '@assets/home_white_filled.svg';
import NotificationIcon from '@assets/notification_white_filled.svg';
import {COLORS, UserStackParamList} from '@modules';
import {ActionButton} from '@components';
import {StackNavigationProp} from '@react-navigation/stack';

type HomePageScreenNavigationProp = StackNavigationProp<
  UserStackParamList,
  'HomePage'
>;
interface Props {
  open: boolean;
  navigation: HomePageScreenNavigationProp;
}
export class BottomActionNavigator extends React.Component<Props> {
  render() {
    const buttonItemsProps = {
      height: 22,
      width: 20,
      style: {padding: 10},
    };
    const actionButtonItemProps = {
      size: 50,
      buttonColor: COLORS.PRIMARY,
    };
    return (
      <ActionButton
        open={this.props.open}
        buttonColor={COLORS.PRIMARY}
        btnOutRange={COLORS.VERYLIGHTGREY}
        icon={<NorraBlue width={25} height={22} />}>
        <ActionButton.Item
          {...actionButtonItemProps}
          title="Home"
          onPress={() => console.log('Home tapped!')}>
          <HomeIcon {...buttonItemsProps} />
        </ActionButton.Item>
        <ActionButton.Item
          {...actionButtonItemProps}
          title="New Post"
          buttonColor={COLORS.WHITE}
          onPress={() => this.props.navigation.push('NewPost')}>
          <WritePost {...buttonItemsProps} height={55} width={52} />
        </ActionButton.Item>
        <ActionButton.Item
          {...actionButtonItemProps}
          title="Notifications"
          onPress={() => {}}>
          <NotificationIcon {...buttonItemsProps} />
        </ActionButton.Item>
        <ActionButton.Item
          {...actionButtonItemProps}
          title="Profile"
          onPress={() => {}}>
          <Profile {...buttonItemsProps} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import {COLORS} from '@modules/colors';

interface IBottomModalProps {
  open: Boolean;
  onClose: () => void;
}
interface IBottomModalState {
  animation: AnimationEvent;
}
export default class BottomModal extends React.Component<
  IBottomModalProps,
  IBottomModalState
> {
  state = {
    animation: new Animated.Value(0),
  };

  componentDidUpdate(prevProps: IBottomModalProps) {
    if (this.props.open && prevProps.open !== this.props.open) {
      this.handleOpen();
    }
    if (!this.props.open && prevProps.open !== this.props.open) {
      this.handleClose();
    }
  }
  componentDidMount() {
    if (this.props.open) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  handleClose = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
    if (this.props.onClose) {
      this.props.onClose();
    }
  };
  render() {
    const screenHeight = Dimensions.get('window').height;

    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: 'clamp',
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: 'clamp',
          }),
        },
      ],
    };

    return (
      <Animated.View style={[StyleSheet.absoluteFill, Styles.cover, backdrop]}>
        <TouchableOpacity style={Styles.closeView} onPress={this.handleClose} />
        <View style={[Styles.sheet]}>
          <Animated.View style={[Styles.popup, slideUp]}>
            {this.props.children}
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    backgroundColor: 'rgba(0,0,0,.75)',
  },
  sheet: {
    position: 'absolute',
    top: Dimensions.get('window').height,
    left: 0,
    right: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  popup: {
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  closeView: {
    height: '100%',
    width: '100%',
  },
});

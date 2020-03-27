import React, {Component} from 'react';
import {
  Animated,
  Dimensions,
  Keyboard,
  StyleSheet,
  TextInput,
  UIManager,
  EmitterSubscription,
  StyleProp,
  ViewStyle,
} from 'react-native';

const {State: TextInputState} = TextInput;

interface IKeyboardShiftProps {
  extraStyles?: StyleProp<ViewStyle>;
}
export default class KeyboardShift extends Component<IKeyboardShiftProps> {
  keyboardDidShowSub: EmitterSubscription | null = null;
  keyboardDidHideSub: EmitterSubscription | null = null;
  state = {
    shift: new Animated.Value(0),
  };

  componentDidMount() {
    this.keyboardDidShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.handleKeyboardDidShow,
    );
    this.keyboardDidHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.handleKeyboardDidHide,
    );
  }

  componentWillUnmount() {
    if (this.keyboardDidShowSub && this.keyboardDidHideSub) {
      this.keyboardDidShowSub.remove();
      this.keyboardDidHideSub.remove();
    }
  }

  render() {
    const {children, extraStyles} = this.props;
    const {shift} = this.state;
    return (
      <Animated.View
        style={[
          styles.container,
          {transform: [{translateY: shift}]},
          extraStyles,
        ]}>
        {children}
      </Animated.View>
    );
  }

  handleKeyboardDidShow = event => {
    const {height: windowHeight} = Dimensions.get('window');
    const keyboardHeight = event.endCoordinates.height;
    const currentlyFocusedField = TextInputState.currentlyFocusedField();
    if (currentlyFocusedField) {
      UIManager.measure(
        currentlyFocusedField,
        (originX, originY, width, height, pageX, pageY) => {
          const fieldHeight = height;
          const fieldTop = pageY;
          const gap = windowHeight - keyboardHeight - (fieldTop + fieldHeight);
          if (gap >= 0) {
            return;
          }
          Animated.timing(this.state.shift, {
            toValue: gap,
            duration: 300,
            useNativeDriver: true,
          }).start();
        },
      );
    }
  };

  handleKeyboardDidHide = () => {
    Animated.timing(this.state.shift, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});

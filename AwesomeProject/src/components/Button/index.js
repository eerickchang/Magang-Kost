import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  title = 'Submit',
  subTitle,
  backgroundColor = 'green',
  height,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor, height)}
      onPress={onPress}>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (backgroundColor, height) => ({
    height: height,
    width: 120,
    backgroundColor: backgroundColor,
  }),
});

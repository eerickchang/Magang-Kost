import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Button = ({
  title = 'Erick',
  subTitle,
  backgroundColor = 'green',
  height,
}) => {
  return (
    <View style={styles.container(backgroundColor, height)}>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
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

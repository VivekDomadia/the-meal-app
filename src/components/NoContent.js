import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultText from './DefaultText';

const NoContent = ({ children }) => {
  return (
    <View style={styles.content}>
      <DefaultText>{children}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoContent;

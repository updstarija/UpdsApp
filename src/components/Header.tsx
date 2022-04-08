import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalColors} from '../theme/appTheme';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>COMUNICADOS</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  titleStyle: {
    color: globalColors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

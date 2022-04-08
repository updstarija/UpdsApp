import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NoticeCard} from '../components/NoticeCard';
import {globalColors} from '../theme/appTheme';

export const NoticeScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={styles.titleNotice}>COMUNICADOS</Text>
        </View>
        <View style={styles.containerNotice}>
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
          <NoticeCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerNotice: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleNotice: {
    color: globalColors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

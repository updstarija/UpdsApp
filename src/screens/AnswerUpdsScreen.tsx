import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalColors, globalStyle} from '../theme/appTheme';

export const AnswerUpdsScreen = () => {
  return (
    <SafeAreaView style={globalStyle.safeAreaStyle}>
      <View style={styles.container}>
        <View style={styles.boxStyle}>
          <Text>Horario de atencion</Text>
        </View>
        <TouchableOpacity style={styles.touchableStyle}>
          <View style={styles.buttonStyle}>
            <Icon
              name="support-agent"
              size={100}
              color={globalColors.primary}
            />
          </View>
          <Text style={styles.textStyle}>UPDS RESPONDE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableStyle}>
          <View style={styles.buttonStyle}>
            <Icon name="dvr" size={100} color={globalColors.primary} />
          </View>
          <Text style={styles.textStyle}>PREGUNTAS FRECUENTES</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
  },
  touchableStyle: {
    marginVertical: 50,
    alignItems: 'center',
  },
  buttonStyle: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginBottom: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  boxStyle: {
    width: deviceWidth - 50,
    height: 50,
    backgroundColor: 'white',
    borderLeftColor: globalColors.third,
    borderLeftWidth: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: globalColors.third,
  },
});

import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {globalColors} from '../theme/appTheme';

const facebookList = [
  {
    id: '1',
    image: require('../../assets/updsfacebook.jpeg'),
  },
  {
    id: '2',
    image: require('../../assets/inicioclases.jpeg'),
  },
  {
    id: '3',
    image: require('../../assets/inscribete.jpeg'),
  },
  {
    id: '4',
    image: require('../../assets/programa.jpeg'),
  },
  {
    id: '5',
    image: require('../../assets/inscribete.jpeg'),
  },
  {
    id: '6',
    image: require('../../assets/programa.jpeg'),
  },
];

export const SocialMediaScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={styles.titleNotice}>REDES SOCIALES</Text>
      </View>
      <View style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Image
              source={require('../../assets/facebook.png')}
              style={{width: 30, height: 30}}
            />
            <Text style={{fontWeight: 'bold'}}>Facebook</Text>
          </View>
          <FlatList
            data={facebookList}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.cardContainer}>
                  <View style={styles.cardHeader}>
                    <Image
                      source={require('../../assets/updsfacebook.jpeg')}
                      style={styles.imagePerfil}
                    />
                    <Text style={{fontSize: 11, marginLeft: 5}}>
                      UPDS - Sede Tarija
                    </Text>
                  </View>
                  <Text style={{fontSize: 10}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </Text>
                  <Image source={item.image} style={styles.imageContainer} />
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: 5,
                      }}>
                      <Icon name="thumb-up-off-alt" size={16} color="#4267B2" />
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: 'bold',
                          marginLeft: 5,
                        }}>
                        Me gusta
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon name="share" size={16} color="#4267B2" />
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: 'bold',
                          marginLeft: 5,
                        }}>
                        Conpartir
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Image
              source={require('../../assets/instagram.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={{fontWeight: 'bold'}}>Instagram</Text>
          </View>
          <FlatList
            data={facebookList}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.cardContainer}>
                  <View style={styles.cardHeader}>
                    <Image
                      source={require('../../assets/updsfacebook.jpeg')}
                      style={styles.imagePerfil}
                    />
                    <Text style={{fontSize: 11, marginLeft: 5}}>
                      UPDS - Sede Tarija
                    </Text>
                  </View>
                  <Text style={{fontSize: 10}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </Text>
                  <Image source={item.image} style={styles.imageContainer} />
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        margin: 5,
                      }}>
                      <Icon name="thumb-up-off-alt" size={16} color="#4267B2" />
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: 'bold',
                          marginLeft: 5,
                        }}>
                        Me gusta
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon name="share" size={16} color="#4267B2" />
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: 'bold',
                          marginLeft: 5,
                        }}>
                        Conpartir
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 10,
            }}>
            <Image
              source={require('../../assets/youtube.png')}
              style={{width: 30, height: 30}}
            />
            <Text style={{fontWeight: 'bold'}}>Youtube</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    width: 150,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  imagePerfil: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  imageContainer: {
    width: 150,
    height: 100,
  },
  titleNotice: {
    color: globalColors.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {IconSearch, Logo, ProfilePicture} from '../../assets';
import {
  Recommended,
  New,
  Traditional,
  Western,
  Asian,
  Gap,
} from '../../components';
import {WARNA_ABU_ABU, WARNA_DISABLE, WARNA_UTAMA} from '../../utils/constant';

const Tab = createMaterialTopTabNavigator();
const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hello}>
          <View>
            <Text style={styles.selamat}>Let’s get some foods</Text>
            <Text style={styles.username}>Vegetarian</Text>
          </View>
          <Image source={ProfilePicture} style={styles.profil} />
        </View>
        <View style={styles.search}>
          <IconSearch />
          <Text style={styles.searchText}>Temukan selera anda</Text>
        </View>
        <View>
          <Text style={styles.recommendText}>Recommended for You</Text>
        </View>
        <View style={{width: '100%'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Recommended />
          </ScrollView>
        </View>
        <Gap height={29} />
        <Tab.Navigator>
          <Tab.Screen name="New" component={New} />
          <Tab.Screen name="Traditional" component={Traditional} />
          <Tab.Screen name="Western" component={New} />
          <Tab.Screen name="Asian" component={Asian} />
        </Tab.Navigator>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  hello: {
    marginTop: windowHeight * 0.025,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 23,
    marginTop: 19,
  },
  selamat: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: '#757575',
  },
  username: {
    fontSize: 19,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  profil: {
    marginTop: 4,
    marginRight: 8,
  },
  search: {
    backgroundColor: WARNA_ABU_ABU,
    marginTop: 17,
    marginHorizontal: 23,
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderRadius: 8,
    flexDirection: 'row',
  },
  searchText: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    color: WARNA_DISABLE,
    marginLeft: 7.51,
  },
  recommendText: {
    marginTop: 24,
    marginBottom: 9,
    marginLeft: 23,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: WARNA_UTAMA,
  },
  container: {
    paddingLeft: 23,
  },
});

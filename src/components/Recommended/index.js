import React from 'react';
import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconAdd,
  IconFavorite,
  IconFavoriteActive,
  IconStar,
  TofuMushrooms,
  Urap,
  VeganDrumStick,
} from '../../assets';
import {WARNA_SEKUNDER} from '../../utils/constant';

const Recommended = ({onPress, onLongPress}) => {
  return (
    <View style={{flexDirection: 'row', paddingLeft: 23}}>
      <View style={styles.card}>
        <View>
          <Image source={TofuMushrooms} style={styles.picture} />
          <Text style={styles.title}>Tofu Mushrooms</Text>
          <Text style={styles.price}>Rp. 25.000</Text>
        </View>
        <View style={styles.status}>
          <View style={{flexDirection: 'row'}}>
            <IconStar />
            <Text style={styles.rating}>4.5</Text>
            <IconFavorite />
          </View>
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{marginTop: -6}}>
            <IconAdd />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Image source={Urap} style={styles.picture} />
          <Text style={styles.title}>Urap Surabaya</Text>
          <Text style={styles.price}>Rp. 15.000</Text>
        </View>
        <View style={styles.status}>
          <View style={{flexDirection: 'row'}}>
            <IconStar />
            <Text style={styles.rating}>4.5</Text>
            <IconFavoriteActive />
          </View>
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{marginTop: -6}}>
            <IconAdd />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Image source={VeganDrumStick} style={styles.picture} />
          <Text style={styles.title}>Vegan Drum Stick</Text>
          <Text style={styles.price}>Rp. 35.000</Text>
        </View>
        <View style={styles.status}>
          <View style={{flexDirection: 'row'}}>
            <IconStar />
            <Text style={styles.rating}>4.3</Text>
            <IconFavorite />
          </View>
          <IconAdd style={{marginTop: -6}} />
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Image source={TofuMushrooms} style={styles.picture} />
          <Text style={styles.title}>Tofu Mushrooms</Text>
          <Text style={styles.price}>Rp. 25.000</Text>
        </View>
        <View style={styles.status}>
          <View style={{flexDirection: 'row'}}>
            <IconStar />
            <Text style={styles.rating}>4.5</Text>
            <IconFavorite />
          </View>
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{marginTop: -6}}>
            <IconAdd />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Image source={Urap} style={styles.picture} />
          <Text style={styles.title}>Urap Surabaya</Text>
          <Text style={styles.price}>Rp. 15.000</Text>
        </View>
        <View style={styles.status}>
          <View style={{flexDirection: 'row'}}>
            <IconStar />
            <Text style={styles.rating}>4.5</Text>
            <IconFavoriteActive />
          </View>
          <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={{marginTop: -6}}>
            <IconAdd />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Image source={VeganDrumStick} style={styles.picture} />
          <Text style={styles.title}>Vegan Drum Stick</Text>
          <Text style={styles.price}>Rp. 35.000</Text>
        </View>
        <View style={styles.status}>
          <View style={{flexDirection: 'row'}}>
            <IconStar />
            <Text style={styles.rating}>4.3</Text>
            <IconFavorite />
          </View>
          <IconAdd style={{marginTop: -6}} />
        </View>
      </View>
    </View>
  );
};

export default Recommended;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.339,
    // height: windowHeight * 0.274,
    backgroundColor: WARNA_SEKUNDER,
    borderRadius: 15,
    marginRight: 12,
  },
  picture: {
    width: '100%',
    height: windowHeight * 0.176,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  status: {
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  rating: {
    fontFamily: 'Poppins-Regular',
    fontSize: 7,
    color: '#FFFFFF',
    marginLeft: 1,
    marginRight: 13,
  },
});

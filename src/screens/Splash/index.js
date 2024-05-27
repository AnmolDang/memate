import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {appColors} from '../../utils/appColors';
import LogoIcon from '../../assets/svg/LogoIcon';
import Tabs from '../../navigations/tabs';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.containerStyle}>
      <View style={styles.logoStyle}>
        <LogoIcon />
      </View>

      <Text style={styles.textStyle}>Right Way to do Business</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.black,
    flex: 1,
  },
  logoStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: appColors.white,
    bottom: 40,
    alignSelf: 'center',
    fontWeight: '800',
  },
});

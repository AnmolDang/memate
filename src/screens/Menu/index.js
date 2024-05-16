import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/appColors';
import DummyUserIcon from '../../assets/svg/DummyUserIcon';
import WhiteCrossIcon from '../../assets/svg/WhiteCrossIcon';

const Menu = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <DummyUserIcon />
        <View style={{marginLeft: 8, flex: 1}}>
          <Text style={styles.usernameStyle}>Username</Text>
          <Text style={styles.smallTextStyle}>Designer</Text>
        </View>
        <TouchableOpacity>
          <WhiteCrossIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: appColors.black,
    padding: 16,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  usernameStyle: {
    color: appColors.white,
    fontFamily: 'SF-Pro',
    fontWeight: '700',
  },
  smallTextStyle: {
    fontSize: 12,
    color: appColors.grey,
  },
});

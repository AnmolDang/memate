import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/appColors';
import OrganizationComponent from '../../components/OrganizationComponent';
import RateStar from '../../assets/svg/RateStar';

const ChooseOrganization = ({navigation}) => {
  const onNextClick = () => {
    navigation.navigate('BottomBar');
  };
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Choose Organization</Text>
      <OrganizationComponent onNextClick={onNextClick} />
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <View
          style={{
            backgroundColor: appColors.black,
            marginHorizontal: 16,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingVertical: 16,
          }}>
          <RateStar />
          <Text style={styles.rateTextStyle}>Rate MeMate</Text>
        </View>
        <Text style={styles.termsStyle}>Terms and Conditions</Text>
      </View>
    </View>
  );
};

export default ChooseOrganization;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  textStyle: {
    fontFamily: 'SF-Pro',
    textAlign: 'center',
    fontWeight: '700',
    color: appColors.black,
    marginTop: 16,
    fontSize: 16,
  },
  rateTextStyle: {
    color: appColors.white,
    marginLeft: 8,
    fontFamily: 'SF-Pro',
    fontWeight: '700',
    fontSize: 16,
  },
  termsStyle: {
    textAlign: 'center',
    color: appColors.black,
    marginVertical: 16,
    fontFamily: 'SF-Pro',
    fontWeight: '700',
  },
});

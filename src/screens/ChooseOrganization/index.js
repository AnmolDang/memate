import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { appColors } from '../../utils/appColors';
import OrganizationComponent from '../../components/OrganizationComponent';
import RateStar from '../../assets/svg/RateStar';
import { useDispatch } from 'react-redux';
import { getOrganization } from '../../redux/getOrganizationSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChooseOrganization = ({ navigation }) => {
  const dispatch = useDispatch();

  const onNextClick = () => {
    navigation.navigate('BottomBar');
  };

  useEffect(() => {
    dispatch(getOrganization());
  }, []);




  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text style={styles.textStyle}>Choose Organization</Text>
      <OrganizationComponent onNextClick={onNextClick} />
      <View style={{ justifyContent: 'flex-end', flex: 1 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomBar')}
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
        </TouchableOpacity>
        <Text style={styles.termsStyle} onPress={() => navigation.navigate('Conditions')}> Terms and Conditions </Text>
      </View>
    </SafeAreaView>
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

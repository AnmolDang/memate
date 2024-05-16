import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LogoIcon from '../../assets/svg/LogoIcon';
import {appColors} from '../../utils/appColors';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';
import CheckBox from '@react-native-community/checkbox';

const SignInWithPhone = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('1');
  const [countryPhoneCode, setCountryPhoneCode] = useState('+1');
  const [countryCode, setCountryCode] = useState('US'); // Assuming default country is US

  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const toggleCountryPicker = () => {
    setCountryPickerVisible(!countryPickerVisible);
  };

  const onSelectCountry = country => {
    setCountryCode(country.cca2);

    const callingCode = country.callingCode[0];
    console.log('callingCode ==>', callingCode);
    setPhoneNumber(callingCode);

    setCountryPickerVisible(false);
  };
  useEffect(() => {
    console.log('Phone number ==>', phoneNumber);
  }, [phoneNumber]);

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>Sign in</Text>
      <View style={styles.logoStyle}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <LogoIcon width={100} />
        </View>

        <View
          style={{
            backgroundColor: '#212528',
            marginHorizontal: 16,
            padding: 15,
            borderRadius: 8,
            marginTop: 80,
          }}>
          <PhoneInput
            onPressFlag={toggleCountryPicker}
            initialCountry={countryCode}
            initialValue={phoneNumber}
            value={phoneNumber}
            onChangePhoneNumber={number => setPhoneNumber(number)}
            textStyle={{color: 'white'}}
          />
        </View>

        {countryPickerVisible && (
          <CountryPicker
            withFilter
            withFlagButton={false}
            withCountryNameButton={false}
            onSelect={onSelectCountry}
            onClose={() => setCountryPickerVisible(false)}
            visible={countryPickerVisible}
            containerButtonStyle={styles.countryPickerButton}
            closeButtonImageStyle={styles.countryPickerCloseButton}
          />
        )}

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('OtpScreen')}>
          <Text style={{color: appColors.black, fontWeight: '700'}}>
            Send Code
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            boxType={'square'}
            lineWidth={2}
            tintColors={{true: '#FFFFFF', false: '#FFFFFF'}}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={{color: appColors.grey}}>Remember Me</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.signInStyle}
        onPress={() => {
          navigation.navigate('SignInWithEmail');
        }}>
        <Text style={{color: appColors.white, fontWeight: '700'}}>
          Sign in with Email
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInWithPhone;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.black,
    flex: 1,
  },
  logoStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    color: appColors.white,
    alignSelf: 'center',
    top: 20,
    fontWeight: '500',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: appColors.inputColor,
  },
  buttonStyle: {
    color: appColors.black,
    backgroundColor: appColors.white,
    marginHorizontal: 16,
    padding: 15,
    borderRadius: 24,
    marginTop: 20,
    alignItems: 'center',
  },
  phoneInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  countryButton: {
    marginBottom: 20,
  },
  countryPickerButton: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  countryPickerCloseButton: {
    width: 20,
    height: 20,
  },
  signInStyle: {
    marginHorizontal: 16,
    borderRadius: 24,
    borderColor: appColors.white,
    borderWidth: 1,
    alignItems: 'center',
    padding: 16,
    bottom: 36,
  },
});

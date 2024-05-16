import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {appColors} from '../../utils/appColors';
import LogoIcon from '../../assets/svg/LogoIcon';
import OTPTextView from 'react-native-otp-textinput';
import Tabs from '../../navigations/tabs';

const OtpScreen = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <View style={{marginTop: 150, alignSelf: 'center'}}>
        <LogoIcon width={100} />
      </View>
      <View style={styles.logoStyle}>
        <OTPTextView
          containerStyle={{marginTop: 60}}
          textInputStyle={styles.roundedTextInput}
          tintColor={appColors.white}
          offTintColor={appColors.white}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('ChooseOrganization')}>
        <Text style={{color: appColors.black, fontWeight: '700'}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.black,
    flex: 1,
  },
  logoStyle: {
    flex: 2,
    alignItems: 'center',
  },
  viewStyle: {
    flex: 3,
  },
  inputStyle: {
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: appColors.inputBackground,
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  buttonStyle: {
    color: appColors.black,
    backgroundColor: appColors.white,
    marginHorizontal: 16,
    padding: 15,
    borderRadius: 24,
    marginBottom: 20,
    alignItems: 'center',
  },
  textStyle: {color: appColors.white, fontWeight: '600'},
  signInStyle: {
    marginHorizontal: 16,
    borderRadius: 24,
    borderColor: appColors.white,
    borderWidth: 1,
    alignItems: 'center',
    padding: 16,
    marginTop: 48,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    color: appColors.white,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
    paddingVertical: 20,
    borderWidth: 1,
  },
});

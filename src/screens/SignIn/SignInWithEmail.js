import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {appColors} from '../../utils/appColors';
import LogoIcon from '../../assets/svg/LogoIcon';
import CheckBox from '@react-native-community/checkbox';

const SignInWithEmail = ({navigation}) => {
  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputPassFocused, setIsPassInputFocused] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // Function to handle focus change
  const handleFocusChange = () => {
    setIsInputFocused(inputEmailRef.current.isFocused());
  };
  const handlePasswordFocusChange = () => {
    setIsPassInputFocused(inputPassRef.current.isFocused());
  };

  return (
    <View style={styles.containerStyle}>
      <View style={styles.logoStyle}>
        <LogoIcon width={100} />
      </View>
      <View style={styles.viewStyle}>
        <TextInput
          ref={inputEmailRef}
          style={[
            styles.inputStyle,
            {
              borderColor: isInputFocused
                ? appColors.placeholderColor
                : appColors.appColors,
            },
          ]}
          placeholder="Email"
          placeholderTextColor={appColors.placeholderColor}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
        />
        <TextInput
          ref={inputPassRef}
          placeholder="Password"
          placeholderTextColor={appColors.placeholderColor}
          style={[
            styles.inputStyle,
            {
              borderColor: isInputPassFocused
                ? appColors.placeholderColor
                : appColors.inputBackground,
            },
          ]}
          onFocus={handlePasswordFocusChange}
          onBlur={handlePasswordFocusChange}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('ChooseOrganization')}>
          <Text style={{color: appColors.black, fontWeight: '700'}}>
            Sign In
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginHorizontal: 16,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
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
          <View>
            <Text style={styles.textStyle}>Forgot Password?</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.signInStyle}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={{color: appColors.white, fontWeight: '700'}}>
            Sign in with Phone
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInWithEmail;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.black,
    flex: 1,
  },
  logoStyle: {
    flex: 2,
    justifyContent: 'center',
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
    marginTop: 20,
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
});

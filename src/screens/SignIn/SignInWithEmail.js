import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { appColors } from '../../utils/appColors';
import LogoIcon from '../../assets/svg/LogoIcon';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/loginSlice';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ApiBaseUrl, BASE_URL } from '../../utils/Constants';
import _fetch from '../../utils/_fetch';

const SignInWithEmail = ({ navigation }) => {
  const dispatch = useDispatch();

  // const loginResponse = useSelector(state => state.profileReducer.data);

  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputPassFocused, setIsPassInputFocused] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const loginSuccess = useSelector(state => state.loginReducer.data);

  const onLoginClick = async () => {
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/;
    // const isValidEmail = emailRegex.test(email);
    // setIsValid(isValidEmail);
    // if (isValidEmail) {
    //   if (email.length == 0) {
    //     alert('Please enter email!');
    //   } else if (password.length == 0) {
    //     alert('Please enter password');
    //   } else {

    const body = {
      "deviceId": "android",
      "email": "autonuke@gmail.com",
      "password": "7924"
    }
    console.log(body);

    let res = await _fetch(`${BASE_URL}/m/login`, "POST", body, {});
    console.log({ res });



  };

  const handleEmailChange = e => {
    setEmail(e);
  };

  useEffect(() => {
    console.log('loginSuccess ===>', loginSuccess);
    if (loginSuccess != null) {
      localStorage.setItem('token', loginSuccess.access);
      navigation('/ChooseOrganization');
    } else if (loginSuccess != null) {
      alert('Invalid credentials!');
    }
  }, [loginSuccess]);

  // Function to handle focus change
  const handleFocusChange = () => {
    setIsInputFocused(inputEmailRef.current.isFocused());
  };
  const handlePasswordFocusChange = () => {
    setIsPassInputFocused(inputPassRef.current.isFocused());
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.logoStyle}>
        <LogoIcon width={100} />
      </View>
      <View style={styles.viewStyle}>
        <TextInput
          ref={inputEmailRef}
          style={[styles.inputStyle, { borderColor: isInputFocused ? appColors.placeholderColor : appColors.inputBackground, color: appColors.white, },]}
          placeholder="Email"
          placeholderTextColor={appColors.placeholderColor}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
          onChangeText={e => { handleEmailChange(e); }}
          keyboardType='email-address'
        />
        <TextInput
          ref={inputPassRef}
          placeholder="Password"
          placeholderTextColor={appColors.placeholderColor}
          style={[styles.inputStyle, { borderColor: isInputPassFocused ? appColors.placeholderColor : appColors.inputBackground, color: appColors.white, },]}
          onFocus={handlePasswordFocusChange}
          onBlur={handlePasswordFocusChange}
          onChangeText={e => { setPassword(e); }}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={() => { onLoginClick(); }}>
          <Text style={{ color: appColors.black, fontWeight: '700' }}> Sign In </Text>
        </TouchableOpacity>

        <View
          style={styles.row_between}>
          <View
            style={styles.row__}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              boxType={'circle'}
              lineWidth={2}
              onCheckColor={appColors.white}
              tintColors={appColors.grey}
              onTintColor={appColors.white}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              style={{ width: 20, height: 20, }}
            />
            <Text style={{ color: appColors.grey, fontSize: 14 }}>Remember Me</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>Forgot Password?</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.signInStyle}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={{ color: appColors.white, fontWeight: '700' }}> Sign in with Phone </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    paddingHorizontal: 10,
    height: 45
  },
  row_between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 16,
  },
  row__: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  buttonStyle: {
    color: appColors.black,
    backgroundColor: appColors.white,
    marginHorizontal: 16,
    borderRadius: 24,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45
  },
  textStyle: {
    color: appColors.white,
    fontWeight: '600',
  },
  signInStyle: {
    marginHorizontal: 16,
    borderRadius: 24,
    borderColor: appColors.grey,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginTop: 50,
  },
});

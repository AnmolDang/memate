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

const SignInWithEmail = ({ navigation }) => {

  const dispatch = useDispatch();

  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputPassFocused, setIsPassInputFocused] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const loginSuccess = useSelector((state) => state.loginReducer.data);

  const onLoginClick = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,4}$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    if (isValidEmail) {
      if (email.length == 0) {
        alert("Please enter email!");
      } else if (password.length == 0) {
        alert("Please enter password");
      } else {
        const payload = {
          device_id: "abc",
          email: email,
          password: password
        };
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          "device_id": "abc",
          "email": "Raj.w3web@gmail.com",
          "password": "2377009"
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        fetch("https://dev.memate.com.au/api/v1/login/", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.error(error));
        // dispatch(loginUser(payload));
      }
    } else {
      alert("Invalid Email")
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e);
  };

  useEffect(() => {
    console.log("loginSuccess ===>", loginSuccess)
    if (loginSuccess != null) {
      navigation("/ChooseOrganization");
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
              color: appColors.white
            },
          ]}
          placeholder="Email"
          placeholderTextColor={appColors.placeholderColor}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
          onChangeText={(e) => {
            handleEmailChange(e);
          }}
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
              color: appColors.white
            },
          ]}
          onFocus={handlePasswordFocusChange}
          onBlur={handlePasswordFocusChange}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => { onLoginClick() }}>
          <Text style={{ color: appColors.black, fontWeight: '700' }}>
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
              tintColors={{ true: '#FFFFFF', false: '#FFFFFF' }}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={{ color: appColors.grey }}>Remember Me</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>Forgot Password?</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.signInStyle}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={{ color: appColors.white, fontWeight: '700' }}>
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
  textStyle: { color: appColors.white, fontWeight: '600' },
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

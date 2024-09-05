import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { appColors } from '../../../utils/appColors';
import WhiteBackIcon from '../../../assets/svg/WhiteBackIcon';
import CalenderIcon from '../../../assets/svg/CalenderIcon';
import MenuIcon from '../../../assets/svg/MenuIcon';
import NotificationIcon from '../../../assets/svg/NotificationIcon';
import ClockIcon from '../../../assets/svg/ClockIcon';
import MapMarkerIcon from '../../../assets/svg/MapMarkerIcon';
import StatusIcon from '../../../assets/svg/StatusIcon';
import AllJobsIcon from '../../../assets/svg/AllJobsIcon';
import { SafeAreaView } from 'react-native-safe-area-context';


const JobsScreen = ({ navigation }) => {

  const [active, setInActive] = useState(0);

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <View style={{ height: 40, width: 40 }} >
          <WhiteBackIcon onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.usernameStyle}>Jobs</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <TouchableOpacity style={{ marginRight: 5 }}>
            <NotificationIcon />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 8 }}>
            <CalenderIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')} >
            <MenuIcon />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

        <Text style={styles.headStyle}>Jobs</Text>

        <View style={{ flexDirection: 'row', marginBottom: 10, gap: 10 }}>
          <TouchableOpacity onPress={() => setInActive(0)} style={{
            flexDirection: 'row',
            backgroundColor: active === 0 ? appColors.black : appColors.white,
            alignItems: 'center',
            borderRadius: 25,
            paddingHorizontal: active === 0 ? 15 : 15,
            paddingVertical: active === 0 ? 10 : 10,
            borderColor: active === 0 ? appColors.black : appColors.lightGrey,
            borderWidth: 1,
          }}>
            <Text
              style={{
                backgroundColor: active === 0 ? appColors.black : appColors.white,
                color: active === 0 ? appColors.white : appColors.grey,
                paddingRight: 10,
                fontSize: 12,
              }}
            >
              All
            </Text>

            <Text style={{
              borderWidth: 1, fontSize: 12, paddingHorizontal: 5, borderRadius: 50, borderColor: appColors.white, color: appColors.white, backgroundColor: active === 0 ? appColors.black : appColors.grey, textAlign: 'center'
            }}>23</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setInActive(1)} style={{
            flexDirection: 'row',
            backgroundColor: active === 1 ? appColors.black : appColors.white,
            alignItems: 'center',
            borderRadius: 25,
            paddingHorizontal: active === 1 ? 15 : 15,
            paddingVertical: active === 1 ? 10 : 10,
            borderWidth: 1,
            borderColor: active === 1 ? appColors.black : appColors.lightGrey
          }}>
            <Text
              style={{
                backgroundColor: active === 1 ? appColors.black : appColors.white,
                color: active === 1 ? appColors.white : appColors.grey,
                paddingRight: 10,
                fontSize: 12,
              }}
            >
              Сonfirmed
            </Text>

            <Text style={{
              borderWidth: 1, fontSize: 12, paddingHorizontal: 5, borderRadius: 50, borderColor: appColors.white, color: appColors.white, backgroundColor: active === 1 ? appColors.black : appColors.grey, textAlign: 'center'
            }}>23</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setInActive(2)} style={{
            flexDirection: 'row',
            backgroundColor: active === 2 ? appColors.black : appColors.white,
            alignItems: 'center',
            borderRadius: 25,
            paddingHorizontal: active === 2 ? 15 : 15,
            paddingVertical: active === 2 ? 10 : 10,
            borderWidth: 1,
            borderColor: active === 2 ? appColors.black : appColors.lightGrey
          }}>
            <Text
              style={{
                backgroundColor: active === 2 ? appColors.black : appColors.white,
                color: active === 2 ? appColors.white : appColors.grey,
                paddingRight: 10,
                fontSize: 12,
              }}
            >
              Require
            </Text>

            <Text style={{
              borderWidth: 1, fontSize: 12, paddingHorizontal: 5, borderRadius: 50, borderColor: appColors.white, color: appColors.white, backgroundColor: active === 2 ? appColors.black : appColors.grey, textAlign: 'center'
            }}>23</Text>
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row', gap: 10 }}>

          <TouchableOpacity onPress={() => setInActive(3)} style={{
            flexDirection: 'row',
            backgroundColor: active === 3 ? appColors.black : appColors.white,
            alignItems: 'center',
            borderRadius: 25,
            paddingHorizontal: active === 3 ? 15 : 15,
            paddingVertical: active === 3 ? 10 : 10,
            borderWidth: 1,
            borderColor: active === 3 ? appColors.black : appColors.lightGrey
          }}>
            <Text
              style={{
                backgroundColor: active === 3 ? appColors.black : appColors.white,
                color: active === 3 ? appColors.white : appColors.grey,
                paddingRight: 10,
                fontSize: 12,
              }}
            >
              Open
            </Text>

            <Text style={{
              borderWidth: 1, fontSize: 12, paddingHorizontal: 5, borderRadius: 50, borderColor: appColors.white, color: appColors.white, backgroundColor: active === 3 ? appColors.black : appColors.grey, textAlign: 'center'
            }}>23</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setInActive(4)} style={{
            flexDirection: 'row',
            backgroundColor: active === 4 ? appColors.black : appColors.white,
            alignItems: 'center',
            borderRadius: 25,
            paddingHorizontal: active === 4 ? 15 : 15,
            paddingVertical: active === 4 ? 10 : 10,
            borderWidth: 1,
            borderColor: active === 2 ? appColors.black : appColors.lightGrey
          }}>
            <Text
              style={{
                backgroundColor: active === 4 ? appColors.black : appColors.white,
                color: active === 4 ? appColors.white : appColors.grey,
                paddingRight: 10,
                fontSize: 12,
              }}
            >
              Waiting
            </Text>

            <Text style={{
              borderWidth: 1, fontSize: 12, paddingHorizontal: 5, borderRadius: 50, borderColor: appColors.white, color: appColors.white, backgroundColor: active === 4 ? appColors.black : appColors.grey, textAlign: 'center'
            }}>23</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: appColors.black }}>All Jobs </Text>
          <AllJobsIcon width={40} height={40} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('JobCard')}>
          <View style={styles.shiftCard}>
            <View style={styles.viewStyle}>
              <View style={styles.headerViewStyle}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: appColors.yellow,
                    alignItems: 'center',
                    borderRadius: 16,
                  }}>
                  <Text
                    style={{
                      backgroundColor: appColors.yellow,
                      paddingLeft: 8,
                      paddingVertical: 3,
                      color: appColors.black,
                      borderRadius: 16,
                      fontSize: 12,
                    }}>
                    Shift
                  </Text>
                  <Text
                    style={{
                      backgroundColor: appColors.white,
                      marginLeft: 4,
                      marginRight: 4,
                      borderTopRightRadius: 8,
                      borderBottomRightRadius: 8,
                      paddingHorizontal: 4,
                      fontSize: 12,
                    }}>
                    Fix
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <ClockIcon />
                  <Text style={styles.headerTextStyle}>2h</Text>
                  <Text style={[styles.headerTextStyle, { marginLeft: 8 }]}>$100</Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: appColors.lightGrey,
                  marginHorizontal: 16,
                }}
              />
              <View style={{ padding: 16 }}>
                <Text
                  style={{
                    color: appColors.black,
                    fontSize: 12,
                    fontFamily: 'SF-Pro',
                    fontWeight: '600',
                  }}>
                  THE-JB-113-134568
                </Text>
                <Text style={[styles.headerTextStyle, { marginTop: 8 }]}>
                  SMM | theAd Tempaltes
                </Text>
                <View
                  style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
                  <MapMarkerIcon />
                  <Text
                    style={{
                      color: appColors.placeholderColor,
                      fontFamily: 'SF-Pro',
                      fontWeight: 700,
                      fontSize: 12,
                    }}>
                    9/89-97 Jones St, Ultimo NSW 2007, Australia
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      marginTop: 8,
                      paddingVertical: 4,
                      backgroundColor: appColors.white,
                      paddingHorizontal: 8,
                      borderRadius: 16,
                      color: appColors.black,
                      fontWeight: '600',
                      fontSize: 12,
                    }}>
                    09.04.2024 {'  '}
                    <Text style={{ color: appColors.placeholderColor }}>09:32</Text>
                  </Text>
                  <View
                    style={{
                      width: 10,
                      backgroundColor: appColors.placeholderColor,
                      height: 1.5,
                      marginHorizontal: 5,
                      marginTop: 8,
                    }}
                  />
                  <Text
                    style={{
                      marginTop: 8,
                      paddingVertical: 4,
                      backgroundColor: appColors.white,
                      paddingHorizontal: 8,
                      borderRadius: 16,
                      color: appColors.black,
                      fontWeight: '600',
                      fontSize: 12,
                    }}>
                    09.04.2024 {'  '}
                    <Text style={{ color: appColors.placeholderColor }}>09:32</Text>
                  </Text>
                </View>
                <View
                  style={{
                    height: 1,
                    backgroundColor: appColors.lightGrey,
                    marginTop: 16,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 16,
                    alignItems: 'center',
                    marginBottom: 16,
                  }}>
                  <StatusIcon />
                  <Text
                    style={{
                      marginLeft: 8,
                      color: appColors.black,
                      fontFamily: 'SF-Pro',
                      fontSize: 12,
                      fontWeight: '700',
                    }}>
                    In Progress
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView >
    </SafeAreaView >
  );
};

export default JobsScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: appColors.white,
    paddingHorizontal: 16,
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  usernameStyle: {
    color: appColors.black,
    fontFamily: 'SF-Pro',
    fontWeight: '700',
    fontSize: 16
  },
  headStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: appColors.black,
    marginBottom: 15
  },
  shiftCard: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  titleStyle: {
    color: appColors.black,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'SF-Pro',
  },
  viewStyle: {
    backgroundColor: appColors.offWhite,
    borderRadius: 16,
    marginTop: 16,
  },
  headerViewStyle: {
    flexDirection: 'row',
    margin: 10,
  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: appColors.black,
    fontFamily: 'SF-Pro',
  },
});

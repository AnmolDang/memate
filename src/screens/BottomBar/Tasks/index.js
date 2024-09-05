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
import AllJobsIcon from '../../../assets/svg/AllJobsIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

const TasksScreen = ({ navigation }) => {

  const [active, setInActive] = useState(0);

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <View style={{ height: 40, width: 40 }} >
          <WhiteBackIcon onPress={() => navigation.goBack()} />
        </View>
        <Text style={styles.usernameStyle}>Tasks</Text>
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

        <Text style={styles.headStyle}>Tasks</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', marginBottom: 10, gap: 10 }} >
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
                Not Complete
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
                Complete
              </Text>

              <Text style={{
                borderWidth: 1, fontSize: 12, paddingHorizontal: 5, borderRadius: 50, borderColor: appColors.white, color: appColors.white, backgroundColor: active === 2 ? appColors.black : appColors.grey, textAlign: 'center'
              }}>23</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: appColors.black }}>All Tasks</Text>
          <AllJobsIcon width={40} height={40} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('NotCompleteTask')}>
          <View style={styles.noteCardStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: appColors.black, fontWeight: '600', marginBottom: 4, fontSize: 12, backgroundColor: "#FFA6D1", paddingHorizontal: 10, paddingVertical: 2, borderRadius: 14, }}>Not Complete</Text>
            </View>
            <Text style={{ color: appColors.black, marginTop: 10, fontSize: 16, letterSpacing: .3 }}>Convert a layout from Ai format to PDF format</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: appColors.grey, fontSize: 12, fontWeight: '600' }}>Created:</Text>
              <Text
                style={{
                  paddingVertical: 4,
                  backgroundColor: appColors.white,
                  paddingHorizontal: 8,
                  borderRadius: 16,
                  color: appColors.black,
                  fontWeight: '600',
                  fontSize: 12,
                  marginLeft: 6
                }}>
                09.04.2024
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('NotCompleteTask')} >
          <View style={styles.noteCardStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: appColors.black, fontWeight: '600', marginBottom: 4, fontSize: 12, backgroundColor: appColors.yellow, paddingHorizontal: 10, paddingVertical: 2, borderRadius: 14, }}>Complete</Text>
            </View>
            <Text style={{ color: appColors.black, marginTop: 10, fontSize: 16, letterSpacing: .3 }}>Convert logo from raster to vector</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: appColors.grey, fontSize: 12, fontWeight: '600' }}>Created:</Text>
              <Text
                style={{
                  paddingVertical: 4,
                  backgroundColor: appColors.white,
                  paddingHorizontal: 8,
                  borderRadius: 16,
                  color: appColors.black,
                  fontWeight: '600',
                  fontSize: 12,
                  marginLeft: 6
                }}>
                09.04.2024
              </Text>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView >
    </SafeAreaView >
  );
};

export default TasksScreen;

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
  noteCardStyle: {
    backgroundColor: appColors.offWhite,
    padding: 14,
    borderRadius: 24,
    borderBottomRightRadius: 0,
    marginTop: 15
  },
});

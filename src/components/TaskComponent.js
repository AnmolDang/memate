import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { appColors } from '../utils/appColors';
import ClockIcon from '../assets/svg/ClockIcon';
import MapMarkerIcon from '../assets/svg/MapMarkerIcon';
import StatusIcon from '../assets/svg/StatusIcon';

const TaskComponent = ({ navigation }) => {
  return (
    <View style={styles.containerStyle}>
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
              This Frame
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
            Design Stationary and Company profile and broucher
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
  );
};

export default TaskComponent;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: appColors.white,
    width: '96%',
    maxWidth: '96%',
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

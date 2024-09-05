import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { appColors } from '../utils/appColors';
import OrgIcon from '../assets/svg/OrgIcon';
import ListIcon from '../assets/svg/ListIcon';
import FrameIcon from '../assets/svg/Frame';
import ArrowRight from '../assets/svg/ArrowRight';
import JobsListIcon from '../assets/svg/JobsListIcon';


const OrganizationComponent = ({ onNextClick }) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.viewStyle}>
        <OrgIcon />
        <View style={styles.valueStyle}>
          <JobsListIcon />
          <Text style={styles.textStyle}>23</Text>
          <ListIcon />
          <Text style={styles.textStyle}>7</Text>
          <FrameIcon />
          <Text style={styles.textStyle}>7</Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: appColors.lightGrey,
          marginHorizontal: 16,
        }}
      />
      <TouchableOpacity style={styles.viewStyle} onPress={() => onNextClick()}>
        <Text style={styles.titleStyle}>TheAd Pty Lmd</Text>
        <ArrowRight />
      </TouchableOpacity>
    </View>
  );
};

export default OrganizationComponent;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: appColors.offWhite,
    margin: 16,
    borderRadius: 16,
  },
  viewStyle: {
    flexDirection: 'row',
    padding: 16,
  },
  valueStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    color: appColors.black,
    marginHorizontal: 8,
  },
  titleStyle: {
    color: appColors.black,
    fontFamily: 'SF-Pro',
    fontSize: 16,
    flex: 1,
  },
});

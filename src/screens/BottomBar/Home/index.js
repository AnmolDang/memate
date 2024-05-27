import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {appColors} from '../../../utils/appColors';
import DummyUserIcon from '../../../assets/svg/DummyUserIcon';
import NotificationIcon from '../../../assets/svg/NotificationIcon';
import CalenderIcon from '../../../assets/svg/CalenderIcon';
import MenuIcon from '../../../assets/svg/MenuIcon';
import DollerIcon from '../../../assets/svg/DollerIcon';
import AcceptedIcon from '../../../assets/svg/AcceptedIcon';
import ReportIcon from '../../../assets/svg/ReportIcon';
import RightArrowWhite from '../../../assets/svg/RightArrowWhite';
import PinkRightArrow from '../../../assets/svg/PickRightArrow';
import TaskComponent from '../../../components/TaskComponent';

// const { height, width } = Dimensions.get("window");

const HomeScreen = ({navigation}) => {
  const [JobsData, setJobsData] = useState([
    {
      number: 23,
      name: 'Require Confirmation',
    },
    {
      number: 23,
      name: 'Require Confirmation',
    },
    {
      number: 23,
      name: 'Require Confirmation',
    },
  ]);

  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerStyle}>
        <DummyUserIcon />
        <View style={{marginLeft: 8}}>
          <Text style={styles.usernameStyle}>Username</Text>
          <Text style={styles.smallTextStyle}>Designer</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <NotificationIcon />
          </TouchableOpacity>

          <TouchableOpacity style={{marginHorizontal: 8}}>
            <CalenderIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <MenuIcon />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.resultViewStyle}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: appColors.white,
                marginRight: 8,
                flex: 1,
                padding: 8,
                borderRadius: 16,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={styles.lightTextStyle}>Income</Text>
                  <Text style={styles.smallTextStyle}>This week</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <DollerIcon />
                </View>
              </View>

              <Text style={[styles.bigTextStyle, {fontSize: 22}]}>$400.00</Text>
              <Text style={styles.lightTextStyle}>Potential</Text>
              <Text style={styles.bigTextStyle}>$0.00</Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: appColors.white,
                marginLeft: 8,
                padding: 8,
                borderRadius: 16,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text style={styles.lightTextStyle}>Finished</Text>
                  <Text style={styles.smallTextStyle}>This week</Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <AcceptedIcon />
                </View>
              </View>

              <Text style={[styles.bigTextStyle, {fontSize: 22}]}>23</Text>
              <Text style={styles.lightTextStyle}>Accepted</Text>
              <Text style={styles.bigTextStyle}>16</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: appColors.black,
              borderRadius: 40,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 16,
              paddingHorizontal: 16,
              marginTop: 16,
            }}>
            <ReportIcon />
            <View style={{marginHorizontal: 16}}>
              <Text style={styles.rateTextStyle}>Results Report</Text>
              <Text style={styles.smallTextStyle}>see previous weeks</Text>
            </View>
            <View style={{alignItems: 'flex-end', flex: 1}}>
              <RightArrowWhite />
            </View>
          </View>
        </View>
        <View style={styles.tabStyle}>
          <Text
            style={{
              color: appColors.white,
              borderRadius: 20,
              paddingVertical: 10,
              backgroundColor: appColors.black,
              flex: 1,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Jobs
          </Text>
          <Text
            style={{
              color: appColors.black,
              borderRadius: 20,
              paddingVertical: 10,
              backgroundColor: appColors.white,
              flex: 1,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Tasks
          </Text>
        </View>
        <FlatList
          data={JobsData}
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                width: 120,
                marginRight: 16,
                backgroundColor: appColors.white,
                marginTop: 16,
                padding: 8,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: appColors.offWhite,
              }}>
              <Text style={[styles.bigTextStyle, {fontSize: 22}]}>23</Text>
              <Text style={styles.bigTextStyle}>Require Confirmation</Text>
              <Text style={[styles.lightTextStyle, {fontSize: 14}]}>
                {'View Jobs >'}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View style={{alignItems: 'flex-end', marginTop: 16}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: appColors.black,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              paddingVertical: 12,
              paddingHorizontal: 16,
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: appColors.white,

                textAlign: 'center',
                fontWeight: '600',
                width: '25%',
              }}>
              View All
            </Text>
            <PinkRightArrow />
          </View>
        </View>
        <Text style={styles.titleStyle}>Jobs in Progress</Text>

        <FlatList
          key={0}
          data={JobsData}
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{width: 320}}>
              <TaskComponent />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Text style={styles.titleStyle}>Upcoming Deadlines</Text>

        <FlatList
          key={1}
          data={JobsData}
          style={{marginBottom: 100}}
          horizontal
          nestedScrollEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{width: 320}}>
              <TaskComponent />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: appColors.white,
    padding: 16,
    justifyContent: 'center',
  },
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  usernameStyle: {
    color: appColors.black,
    fontFamily: 'SF-Pro',
    fontWeight: '700',
  },
  smallTextStyle: {
    fontSize: 12,
    color: appColors.grey,
  },
  resultViewStyle: {
    backgroundColor: appColors.offWhite,
    borderRadius: 16,
    width: '100%',
    marginTop: 16,
    padding: 16,
  },
  lightTextStyle: {
    color: appColors.grey,
    fontSize: 16,
  },
  bigTextStyle: {
    color: appColors.black,
    fontSize: 18,
    fontWeight: '600',
  },
  rateTextStyle: {
    color: appColors.white,
    fontFamily: 'SF-Pro',
    fontWeight: '700',
    fontSize: 16,
  },
  tabStyle: {
    borderColor: appColors.offWhite,
    borderWidth: 1,
    borderRadius: 24,
    padding: 2,
    flexDirection: 'row',
    marginTop: 16,
  },
  titleStyle: {
    color: appColors.black,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'SF-Pro',
    marginTop: 12,
  },
});

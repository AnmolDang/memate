import {
    PanResponder,
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
import { SafeAreaView } from 'react-native-safe-area-context';

const NotCompleteTask = ({ navigation }) => {

    const [swiped, setSwiped] = useState(false);

    const panResponder = React.useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                setSwiped(false);
            },
            onPanResponderMove: (evt, gestureState) => {
                if (gestureState.dx > 50) {
                    setSwiped(true);
                }
            },
            onPanResponderRelease: () => {
                if (swiped) {
                    console.log('Swipe completed!');
                    // Add your logic here for when the swipe is completed
                }
            },
        })
    );

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

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: appColors.black, fontWeight: '600', marginBottom: 4, fontSize: 12, backgroundColor: "#FFA6D1", paddingHorizontal: 10, paddingVertical: 2, borderRadius: 14, }}>Not Complete</Text>
                </View>
                <Text style={{ color: appColors.black, marginTop: 10, fontSize: 16, letterSpacing: .3, fontWeight: '600', fontSize: 22 }}>Convert a layout from Ai format to PDF format</Text>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <View style={{ flexDirection: 'column', marginTop: 10, gap: 6 }}>
                        <Text style={{ color: appColors.grey, fontSize: 12, fontWeight: '600' }}>Created:</Text>
                        <Text
                            style={{
                                paddingVertical: 4,
                                backgroundColor: appColors.lightGrey,
                                paddingHorizontal: 8,
                                borderRadius: 16,
                                color: appColors.black,
                                fontWeight: '600',
                                fontSize: 12,
                            }}>
                            09.04.2024
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: 10, gap: 6 }}>
                        <Text style={{ color: appColors.grey, fontSize: 12, fontWeight: '600' }}>Due Date:</Text>
                        <Text
                            style={{
                                paddingVertical: 4,
                                backgroundColor: appColors.lightGrey,
                                paddingHorizontal: 8,
                                borderRadius: 16,
                                color: appColors.black,
                                fontWeight: '600',
                                fontSize: 12,
                            }}>
                            09.04.2024
                        </Text>
                    </View>
                </View>

                <View style={styles.descriptionCardStyle}>
                    <Text style={{ marginBottom: 4 }}>Description:</Text>
                    <Text style={{ color: appColors.black, fontSize: 16 }}>Convert a layout from Ai format to PDF format</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('CompleteTask')}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View {...panResponder.panHandlers} style={styles.swipeButton} >
                                <View style={styles.arrowContainer}>
                                    <Text style={styles.arrow}>→</Text>
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.text} >Swipe for Done</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView >
        </SafeAreaView >
    );
};

export default NotCompleteTask;

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
    descriptionCardStyle: {
        borderWidth: 1,
        borderColor: appColors.grey,
        padding: 20,
        borderRadius: 24,
        marginVertical: 20
    },
    swipeButton: {
        backgroundColor: appColors.black,
        padding: 0,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%'
    },
    arrowContainer: {
        backgroundColor: appColors.yellow,
        padding: 10,
        borderRadius: 35,
        marginRight: 20,
    },
    arrow: {
        fontSize: 26,
        marginBottom: 6,
        paddingHorizontal: 6,
        fontWeight: 'bold',
        color: appColors.black,
    },
    text: {
        color: '#FFF',
        fontSize: 16,
    },
});

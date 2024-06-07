import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import { appColors } from '../../utils/appColors';
import WhiteBackIcon from '../../assets/svg/WhiteBackIcon';
import CalenderIcon from '../../assets/svg/CalenderIcon';
import MenuIcon from '../../assets/svg/MenuIcon';
import FrameBoy from '../../assets/svg/FrameBoy';
import DoubleTick from '../../assets/svg/DoubleTick';
import SingleTick from '../../assets/svg/SingleTick';
import BagIcon from '../../assets/svg/BagIcon';
import GirlFrame from '../../assets/svg/GirlFrame';
import YellowBagIcon from '../../assets/svg/YellowBagIcon';
import ChatGirl from '../../assets/svg/ChatGirl';


const BellaMeillenia = ({ navigation }) => {

    return (
        <View style={styles.containerStyle}>
            <View style={styles.headerStyle}>
                <View style={{ height: 40, width: 40 }} >
                    <WhiteBackIcon onPress={() => navigation.goBack()} />
                </View>
                <Text style={styles.usernameStyle}>Bella Meillenia</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{ marginHorizontal: 8 }}>
                        <CalenderIcon />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')} >
                        <MenuIcon />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ flex: 1, backgroundColor: appColors.offWhite, paddingHorizontal: 16 }} >

                <Text style={{ textAlign: 'center', marginTop: 20 }}>Monday, 9 April </Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <ChatGirl width={40} height={40} />
                    <View style={{ flexDirection: 'column', flex: 1, marginLeft: 10 }}>
                        <Text style={{ color: appColors.black, fontWeight: '600' }}>Bella Meillenia</Text>
                        <Text style={{ fontSize: 12 }}>Organisation Name</Text>
                    </View>
                </View>

                <View style={{ marginLeft: 50, }}>
                    <Text style={styles.girlChatStyle}>I'm great, thanks for asking. I wanted to touch base with you about the project deadline. Are you on track to complete your tasks by the end of the week?</Text>
                    <Text style={{ textAlign: 'right', marginTop: 12, fontSize: 12 }}>18:46</Text>
                </View>

                <View style={{ marginLeft: 50, }}>
                    <Text style={styles.boyChatStyle}>I'm great, thanks for asking. I wanted to touch base with you about the project deadline. Are you on track to complete your tasks by the end of the week?</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 5 }}>
                        <View style={{ marginTop: 12 }}>
                            <DoubleTick width={20} height={20} />
                        </View>
                        <Text style={{ fontSize: 12 }}>18:51</Text>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
};

export default BellaMeillenia;

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    usernameStyle: {
        color: appColors.black,
        fontFamily: 'SF-Pro',
        fontWeight: '700',
        fontSize: 16
    },
    girlChatStyle: {
        marginTop: 10,
        backgroundColor: appColors.white,
        color: appColors.black,
        fontSize: 14,
        lineHeight: 20,
        padding: 14,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 14,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },
    boyChatStyle: {
        marginTop: 20,
        backgroundColor: appColors.lightGrey,
        color: appColors.black,
        fontSize: 14,
        lineHeight: 20,
        padding: 14,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 0,
    },
});

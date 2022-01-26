import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View, ImageBackground, KeyboardAvoidingView  } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import path from '../../../constants/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import BackgroundTheme from '../../../component/backgroundtheme';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP } from '../../../utility';
const styles = StyleSheet.create({
    root: { flex: 1, padding: 10 },
    title: { textAlign: 'center', fontSize: 18, fontWeight: '500', color: '#484C76' },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        borderRadius: 6,
        color: '#484C76'

    },
    focusCell: {
        borderColor: '#000',
        borderRadius: 6,
        color: '#484C76'
    },
});

const CELL_COUNT = 5;

const Signinverify = ({ navigation }) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <View >
            <BackgroundTheme />
            <KeyboardAvoidingView>
                <View style={{ top: heightPercentageToDP('-120%') }}>
                    <Image source={path.familyIcon} resizeMode='contain' style={{ justifyContent: 'center', alignSelf: 'center' }} ></Image>
                    <ImageBackground source={require('../../../assets/abcddesign.png')} style={{ height: "75%", width: '100%', marginTop: '-55%' }}>
                    <View style={{ marginTop: '10%', alignSelf: 'center' }}>
                    <Text style={styles.title}>Check Your messages</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: '#484C76',fontSize:14,fontWeight:'500' }}>Delivious has sent a code to verify the Code</Text>
                </View>
                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View style={{margin:widthPercentageToDP('2%'),alignSelf:'center'}} key={index}>
                            <Text
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
                
                <TouchableOpacity onPress={() => navigation.navigate('ParentsProfile')}>
                    <View style={{ margin: '4%', backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Verify</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        </View>

    )
};
export default Signinverify;

import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Image,View } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import path from '../../../constants/imagePath';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30,fontWeight:'900',color:'#484C76' },
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
        color:'#484C76'
        
    },
    focusCell: {
        borderColor: '#000',
        borderRadius: 6,
        color:'#484C76'
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
        // <SafeAreaView style={styles.root}>
        <View style={{ backgroundColor: "#A7CECB", height: '100%', width: '100%' }}>

        <Image source={path.familyIcon} style={{ height: '50%', width: '50%', alignSelf: 'center' }}></Image>
        <View style={{backgroundColor:'white',top:"-25%",height:'100%',width:'100%',borderTopLeftRadius:50,borderTopRightRadius:50}}>
            <View style={{marginTop:'10%',alignSelf:'center'}}>
            <Text style={styles.title}>Check Your messages</Text>
            </View>
            <View style={{alignSelf:'center'}}>
                <Text style={{color:'#484C76'}}>Delivious has sent a code to verify the Code</Text>
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
                    <View style={{margin:'5%'}}   key={index}>
                    <Text
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                    </View>
                )}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ParentsProfile')}>
            <View style={{ margin: '5%', backgroundColor: '#A7CECB', padding: 13, alignItems: 'center', borderRadius: 6 }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Verify</Text>
                        </View>
                </View>
            </TouchableOpacity>
            </View>
            </View>
     
    );
};
export default Signinverify;

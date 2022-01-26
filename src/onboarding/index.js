import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, ImageBackground, Image } from 'react-native';
import { COLORS, SIZES } from '../constants/index';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import data from '../constants/data';
import Path from '../constants/imagePath';
import { color } from 'react-native-reanimated';
const Onboarding = ({ navigation }) => {
    const flatlistRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);
    const [viewableItems, setViewableItems] = useState([])

    const handleViewableItemsChanged = useRef(({ viewableItems }) => {
        setViewableItems(viewableItems)
    })
    useEffect(() => {
        if (!viewableItems[0] || currentPage === viewableItems[0].index)
            return;
        setCurrentPage(viewableItems[0].index)

    }, [viewableItems])

    const handleNext = () => {
        if (currentPage == data.length - 1)
            return;

        flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage + 1
        })
    }

    const handleBack = () => {
        if (currentPage == 0)
            return;
        flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage - 1
        })
    }

    const handleSkipToEnd = () => {
        flatlistRef.current.scrollToIndex({
            animate: true,
            index: data.length - 1
        })
    }

    const renderTopSection = () => {
        return (
            <SafeAreaView>
                {/* <View style={{
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.base * 2
                }}> */}
                {/* Back button */}
                {/* <TouchableOpacity
                     onPress={handleBack}
                     style={{
                        padding: SIZES.base
                    }}>
                        {/* Back icon */}
                {/* Hide back button on 1st screen */}
                {/* <AntDesignIcons name="left" style={{
                            fontSize: 25,
                            color: COLORS.black,
                            opacity: currentPage == 0 ? 0 : 1
                        }} />
                    </TouchableOpacity>  */}

                {/* Skip button */}
                {/* Hide Skip button on last screen */}
                {/* <TouchableOpacity onPress={handleSkipToEnd}>
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.black,
                            opacity: currentPage == data.length-1 ? 0 : 1
                        }}>Skip</Text>
                    </TouchableOpacity> */}

                {/* </View> */}
            </SafeAreaView>
        )
    }

    const renderBottomSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: SIZES.base * 2,
                    paddingVertical: SIZES.base * 2
                }}>
                    <TouchableOpacity  onPress={()=>navigation.navigate('Signin')}>
                    <View>
                        <Text>SKIP</Text>
                    </View>
                    </TouchableOpacity>
                    {/* Pagination */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            // No. of dots
                            [...Array(data.length)].map((_, index) => (
                                <View
                                    key={index}
                                    style={{

                                        width: index==currentPage?20:10,
                                        height:index==currentPage? 10:10,
                                        borderRadius: 4,
                                        backgroundColor: index == currentPage
                                            ? COLORS.dots
                                            : COLORS.secondDots,
                                        marginRight: 8
                                    }} />
                            ))
                        }


                    </View>

                    {
                        currentPage != data.length - 1 ? (
                            <TouchableOpacity
                                onPress={handleNext}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 50,
                                    height: 50,
                                    borderRadius: 50,
                                    backgroundColor: COLORS.primary
                                }}
                                activeOpacity={0.8}
                            >
                                <Image source={Path.Routing} style={{ height: 15, width: 15, alignSelf: 'center' }}></Image>
                            </TouchableOpacity>
                        ) : (
                            // Get Started Button
                            <TouchableOpacity style={{
                                paddingHorizontal: SIZES.base * 2,
                                height: 50,
                                width:50,
                                borderRadius: 50,
                                backgroundColor: COLORS.primary,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} onPress={() => navigation.navigate('Signin')}>
                                <Image source={Path.Routing} style={{ height: 15, width: 15 }}></Image>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </SafeAreaView>
        )
    }

    const renderFlatlistItem = ({ item }) => {
        return (
            <View style={{
                width: SIZES.width,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    alignItems: 'center',
                    marginVertical: SIZES.base * 2
                }}>
                    <ImageBackground
                        source={item.img}
                        style={{ height:290,width:330}}
                    />
                </View>
                <View style={{ paddingHorizontal: SIZES.base * 2, marginVertical: SIZES.base * 2 }}>
                    <Text style={{ fontSize: 28, textAlign: 'center', fontWeight: '700',color:'#484C76' }}>
                        {item.title}
                    </Text>
                    <View style={{ borderBottomColor: '#096964',
                                        borderBottomWidth: 2,
                                        width: '100%',height:10,alignSelf:'center',top:-8}}>
                                            <Text>----------</Text>
                    </View>

                    <Text style={{ fontSize: 18, textAlign: 'center',color:'#484C76',fontWeight:'500'}}>{item.subtitle}</Text>
                    <Text style={{
                        fontSize: 12,
                        // opacity: 0.4,
                        textAlign: 'center',
                        marginTop: 15,
                        lineHeight: 28,
                        color:'#484C76'
                    }}>
                        {item.description}
                    </Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.background,
            justifyContent: 'center'
        }}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

            {/* TOP SECTION - Back & Skip button */}
            {renderTopSection()}

            {/* FLATLIST with pages */}
            <FlatList
                data={data}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item._id}
                renderItem={renderFlatlistItem}

                ref={flatlistRef}
                onViewableItemsChanged={handleViewableItemsChanged.current}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                initialNumToRender={1}
                extraData={SIZES.width}
            />
            {renderBottomSection()}

        </View>
    )
}

export default Onboarding
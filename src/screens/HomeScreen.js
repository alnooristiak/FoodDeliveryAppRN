import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView } from 'react-native'
import React from 'react'
import HomeHeadNav from './components/HomeHeadNav'
import Categories from './components/Categories'
import OfferSlaider from './components/OfferSlaider'
import { spacing } from '../theme/spacing'

const HomeScreen = () => {
    return (
        <ScrollView style={styles.scroll}>
            <StatusBar />
            {/* Home head nav section */}
            <HomeHeadNav />

            <View style={styles.secondContainer}>
                <TextInput 
                style={styles.searchInput} 
                placeholder='search' />
                <Categories />
                <OfferSlaider />
                <Text>HomeScreen</Text>
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    scroll: {
        padding: spacing[5],
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    searchInput: {
        width: '90%',
        // height: spacing[10],
        borderWidth: 1,
        padding: spacing[4],
        marginTop: spacing[4],
        borderRadius: spacing[4],
    },
    secondContainer: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
})
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { spacing } from '../../theme/spacing';

const HomeHeadNav = () => {
    return (
       <View style={styles.mC}>
         <View style={styles.container}>
            <Fontisto name="nav-icon-list" size={24} color="black" />
            <View style={styles.foodSec}>
                <MaterialCommunityIcons name="hamburger" size={24} color="black" />
                <Text>Foods</Text>
            </View>
            <FontAwesome name="user-circle-o" size={24} color="black" />
        </View>
       </View>
    )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center'
        justifyContent: 'space-between',
        height: spacing[14],
        borderBottomWidth: 1,
        marginTop: spacing[4]
    },
    foodSec: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
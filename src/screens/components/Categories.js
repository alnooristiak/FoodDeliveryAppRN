import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      <ScrollView horizontal={true}>
        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>

        <View style={styles.box}>
          <MaterialCommunityIcons name="hamburger-minus" size={24} color="black" />
          <Text>Text</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: colors.lightGreen,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: spacing[4],
    padding: 20,
    borderWidth: 1,
    borderRadius: 10
  },
  box: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5
  }
})
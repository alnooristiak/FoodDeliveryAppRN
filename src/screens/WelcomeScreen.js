import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomtTextContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.welcomeText}>Food Delevery app</Text>
      </View>
      <View>
        <Image source={require('../../assets/images/welcome_img.png')} />
      </View>
      <View style={styles.WcNoteContainer}>
        <Text style={styles.WcNoteText}>We provide best food and delevery time, wihch time to you need!</Text>
      </View>
      {/* sign up sign in section */}
      <View  style={styles.barLine}>
        <View style={styles.inoutSec}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        alignItems: 'center',
        padding: spacing[5],
        width: '100%'
    },
    welcomtTextContainer: {
        marginTop: spacing[16],
    },
    welcomeText: {
        color: colors.green,
        fontSize: spacing[16]
    },
    WcNoteText: {
        fontSize: spacing[9],
        marginTop: spacing[6]
    },
    barLine: {
        borderTopColor: colors.darkBlue,
        width: '100%',
        marginTop: spacing[10]
    },
    inoutSec: {
        justifyContent: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        marginTop: spacing[8],
        alignItems: 'center'
    },
    btn: {
        marginTop: spacing[10],
        backgroundColor: colors.greay,
        margin: spacing[5],
        padding: spacing[4],
        borderRadius: spacing[2],
    },
    btnText: {
        fontSize: spacing[8]
    }
})
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.signInText}>Sign up</Text>
      <View style={styles.inputContainer}>
        <AntDesign name="user" size={24} color="black" />
        <TextInput style={styles.inputSec}
          onFocus={() => {
            setEmail(true)
            setPassword(false)
          }} placeholder='Enter Email' />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="eye-slash" size={24} color="black" />
        <TextInput secureTextEntry={true} style={styles.inputSec} placeholder='Password' />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="eye-slash" size={24} color="black" />
        <TextInput
        secureTextEntry={true}
        style={styles.inputSec}
        placeholder='Conferm Password' />
      </View>

      {/* btn section */}
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      {/* forgote password sec */}
      <View style={styles.optionalText}>
        <Text style={{ fontSize: spacing[8], marginTop: spacing[5] }}>Forgote Password</Text>
        <Text style={{ fontSize: spacing[8], marginTop: spacing[5] }}>OR</Text>
        <Text style={{ fontSize: spacing[8], marginTop: spacing[5] }}>Sign in With</Text>
      </View>
      {/* sign in with sec */}
      <View style={styles.icons}>
        <TouchableOpacity style={{ margin: spacing[4] }}>
          <FontAwesome name="facebook-f" size={24} color="orange" />
        </TouchableOpacity>

        <TouchableOpacity style={{ margin: spacing[4] }}>
          <FontAwesome name="google" size={24} color="orange" />
        </TouchableOpacity>
      </View>
      {/* dont have an account */}
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: spacing[8] }}>
          Already Have an account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={{ marginLeft: spacing[3], fontSize: spacing[8], color: colors.lightGreen }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signInText: {
    fontSize: spacing[10],
    color: colors.orange,
  },
  inputSec: {
    borderColor: colors.orange,
    borderWidth: 1,
    padding: spacing[3],
    marginTop: spacing[5],
    width: '80%',
  },
  optionalText: {
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
},
icons: {
    marginTop: spacing[5],
    flexDirection:'row',
}
})
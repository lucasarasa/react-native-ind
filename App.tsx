import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
// import CircleIcon from './CircleIcon.png';

export default function App () {
  return <View style={styles.container}>
    <Text style={styles.title}>
      Skills
    </Text>
    <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
      {/* <Image source={CircleIcon} style={styles.image}/> */}
      <Text style={styles.textSkill}>
        Habilidade 1
      </Text>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
      {/* <Image source={CircleIcon} style={styles.image}/> */}
      <Text style={styles.textSkill}>
        Habilidade 2
      </Text>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
      {/* <Image source={CircleIcon} style={styles.image}/> */}
      <Text style={styles.textSkill}>
        Habilidade 3
      </Text>
    </TouchableOpacity>
  </View>
}
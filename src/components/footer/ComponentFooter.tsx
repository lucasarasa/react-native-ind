import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

// Definindo a tipagem para as props
type FooterItemProps = {
  icon: ImageSourcePropType;
  text: string;
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};

const FooterItem = ({ icon, text, selectedTab, setSelectedTab }: FooterItemProps) => {
  return (
    <TouchableOpacity onPress={() => setSelectedTab(text)}>
      <View style={styles.footerBox}>
        <Image
          source={icon}
          style={selectedTab === text ? styles.footerIconRed : styles.footerIcon}
        />
        <Text style={selectedTab === text ? styles.footerTextRedColor : styles.footerText}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FooterItem;

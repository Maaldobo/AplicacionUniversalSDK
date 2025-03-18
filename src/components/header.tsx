import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import RNImage from '../atoms/RNImage';
import RNText from '../atoms/RNText';
import headerStyles from '../styles/headerStyles';

type HeaderProps = {
  onPressHome: () => void;
};

const Header: React.FC<HeaderProps> = ({ onPressHome }) => {
  return (
    <View style={headerStyles.header}>
      
      {/* Menú Hamburguesa */}
      <View style={headerStyles.leftContainer}>
        <TouchableOpacity style={headerStyles.iconButton} onPress={() => console.log('Menú')}>
          <RNText variant="title">☰</RNText>
        </TouchableOpacity>
      </View>

      {/* Logo Central */}
      <View style={headerStyles.centerContainer}>
        <TouchableOpacity onPress={onPressHome}>
          <RNImage source={require('../../assets/eluniversal.png')} style={headerStyles.logo} />
        </TouchableOpacity>
      </View>

      {/* Íconos de la derecha */}
      <View style={headerStyles.rightContainer}>
        <TouchableOpacity style={headerStyles.iconButton} onPress={() => console.log('Buscar')}>
          <RNText variant="title">🔍</RNText>
        </TouchableOpacity>

        <TouchableOpacity style={headerStyles.iconButton} onPress={() => console.log('Guardados')}>
          <RNText variant="title">⭐</RNText>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default Header;

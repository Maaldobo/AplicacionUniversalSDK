import React, { ReactNode } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import layoutStyles from '../styles/layoutStyles';
import Header from '../components/header';


type LayoutProps = {
    children: ReactNode;
  };
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <SafeAreaView style={layoutStyles.safeContainer}>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          <Header onPressHome={() => console.log('Ir a Home')} />
          <View style={layoutStyles.content}>{children}</View>
        </SafeAreaView>
      </>
    );
  };
  
  export default Layout;
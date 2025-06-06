import React, { ReactNode } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import layoutStyles from '../styles/layoutStyles';
import Header from '../components/header';
import TabNavigator from '../components/TabNavigator';


type LayoutProps = {
    children: ReactNode;
  };
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <SafeAreaView style={layoutStyles.safeContainer}>
          <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
          {/* <Header onPressHome={() => console.log('Ir a Home')} /> */}
          <Header />
          <TabNavigator />
          <View style={layoutStyles.content}>{children}</View>
        </SafeAreaView>
      </>
    );
  };
  
  export default Layout;
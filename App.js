/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type { Node } from 'react';
import Slick from 'react-native-slick';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import Video from 'react-native-video';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  AppRegistry,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <Slick style={styles.wrapper} showsButtons={true}>
          <View style={{justifyContent: 'center',alignItems: 'center', backgroundColor: '#fff'}}>
          <Image
           style = {{  width: 300,height: 400, marginTop: 100 }}
        source={{
          uri: 'https://5.imimg.com/data5/RP/FF/PA/GLADMIN-82212497/garammas-500x500.png',
        }}
      />
          </View>
          <View style={{justifyContent: 'center',alignItems: 'center', backgroundColor: '#fff'}}>
          <Image
           style = {{  width: 300,height: 400, marginTop: 100 }}
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0173/7644/4470/products/1_4895c991-42ac-4fc2-87d6-1294dcb735ca_1024x1024.jpg?v=1613469880',
        }}
      />
          </View>
          <Card style = {{justifyContent: 'center',alignItems: 'center',}}>
            <CardImage
              source={{ uri: 'https://5.imimg.com/data5/RP/FF/PA/GLADMIN-82212497/garammas-500x500.png' }}
            />
            <CardTitle
              title="This is a title"
              subtitle="This is subtitle"
            />
            <CardContent text="Your device will reboot in few seconds once successful, be patient meanwhile" /> 
          </Card>

        </Slick>


      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default App;

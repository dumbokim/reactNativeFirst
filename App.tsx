/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import MapView from 'react-native-maps';
// import {WebView} from 'react-native-we'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import {Marker} from 'react-native-maps';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  Icon.loadFont();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <MapView
          style={{height: 500, width: '100%'}}
          initialRegion={{
            latitude: 37.496556,
            longitude: 127.025162,
            latitudeDelta: 0.0005,
            longitudeDelta: 0.005,
          }}>
          <Marker
            coordinate={{latitude: 37.496556, longitude: 127.025162}}
            title="this is a marker"
            description="this is a marker example"
          />
        </MapView>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="첫번째">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <Text>Hello</Text>
          </Section>
          <Name>hi!</Name>
          <View>
            <Icon name="circledowno" size={30} color="#3143e8" />
            <Icon name="circledowno" size={30} color="#3143e8" />
          </View>
          <NewBtn onPress={() => {}} title={'hello'} />
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              borderColor: 'gray',
            }}
            placeholder="Type here to translate!"
          />
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          {/* <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Name = styled.Text`
  text-align: center;
  height: 50px;
`;

const NewBtn = styled.Button`
  border-width: 2px;
  border-color: black;
`;

const styles = StyleSheet.create({
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 20,
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
});

export default App;

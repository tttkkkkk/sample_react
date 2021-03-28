/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [paused, setPaused] = useState(false);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Text>{"Videoテスト\n"}</Text>
        <Text>{"■やりたいこと \n 実機が消音（ボリューム 0 やミュート）の状態でも「音」を出したい\n （イメージ：カメラのシャッター音 or Paypayの決済音\n"}</Text>
        <Text>{"■やったこと \n ignoreSilentSwitch をignoreにすると、音が出る？　\n → 出ない。。"}</Text>
        <Video
          source={require('./broadchurch.mp4')}
          resizeMode={"cover"}
          paused={paused}
          volume={1}
          ignoreSilentSwitch={'ignore'}
          repeat={true}
          resizeMode={'contain'}
          style={{ margin: 'auto', width: '100%', height: '70%' }}
        />
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => setPaused(true)}><Text>Stop</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => setPaused(false)}><Text>Start</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    height: 36,
    width: 136,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 5,
  }


});

export default App;

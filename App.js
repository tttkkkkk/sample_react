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
import Sound from 'react-native-sound';

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

  // var Sound = require('react-native-sound')
  const PlayLocalSoundFile = () => {

    //1  音ならず
    // Sound.setCategory('Playback');
    // Sound.enableInSilenceMode(true);

    //2  音ならず
    // Sound.setActive(true)
    // Sound.setCategory('Playback', true);
    // Sound.enableInSilenceMode(true);
    
    //3  音ならず
    Sound.setActive(true)
    Sound.setCategory('Playback');
    Sound.enableInSilenceMode(true);

    var mySound = new Sound('se.mp3',  Sound.MAIN_BUNDLE ,(error)=>{
        if(error){
          console.log('Error loading sound: ' + error);
          console.log(error);
          return;
        }else{

          console.log('volume: ' + mySound.getVolume());
          mySound.setVolume(0.9);
          console.log('volume: ' + mySound.getVolume());

          mySound.play((success)=>{
          if(success){
            console.log('Sound playing')
          }else{
            console.log('Issue playing file');
          }
          })
        }
      });
  
    // mySound.setVolume(0.9);
    mySound.release();
  }

  const [paused, setPaused] = useState(false);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Text>{"テスト\n"}</Text>
        <Text>{"■やりたいこと \n 実機が消音（ボリューム 0 やミュート）の状態でも「音」を出したい\n （イメージ：カメラのシャッター音 or Paypayの決済音\n"}</Text>
        <Text>{"■試したこと[１] \n 【react-native-video】ignoreSilentSwitch をignore"}</Text>

        {/* Videoテスト */}
        <Video
          source={require('./broadchurch.mp4')}
          resizeMode={"cover"}
          paused={paused}
          volume={1}
          ignoreSilentSwitch={'ignore'}
          repeat={true}
          resizeMode={'contain'}
          style={{ margin: 'auto', width: '100%', height: '30%' }}
        />
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => setPaused(true)}><Text>Stop</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => setPaused(false)}><Text>Start</Text></TouchableOpacity>
        </View>

        {/* Soundテスト */}
        <Text>{"\n\n■試したこと[２] \n 【react-native-sound】 setVolume(0.9) \n"}</Text>
        <View style={styles.sectionContainer}>
          <TouchableOpacity style={styles.btnSound} onPress={()=>PlayLocalSoundFile()}><Text>Start(sound)</Text></TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  btn: {
    height: 36,
    width: 136,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 5,
  },
  btnSound: {
    height: 36,
    width: 136,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCA955',
    borderRadius: 5,
  }

});

export default App;

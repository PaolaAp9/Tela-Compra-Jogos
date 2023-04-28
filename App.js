import React from 'react';

import {SafeAreaView, View} from 'react-native';
import Jogos from './src/telas/Jogos';
import { useFonts, Mukta_400Regular, Mukta_700Bold, } from '@expo-google-fonts/mukta';
import jogos from './src/mocks/jogos';

export default function App() {
  const [fontCarregada] = useFonts({
    "MuktaRegular":Mukta_400Regular,
    "MuktaBold":Mukta_700Bold,
  })
  if(!fontCarregada){
    return <View />
  }
  return (
    <SafeAreaView>
      <Jogos {...jogos}/>
      </SafeAreaView>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//qeusta renderizza
import Login from './src/components/login/Login';

export default function App() {
  return (
    <View className = "grid h-screen place-items-center">
      <View className="bg-green-500">
        <Login />
      </View>
    </View>
  );
}
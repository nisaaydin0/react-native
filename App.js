import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,TouchableWithoutFeedback ,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-web';

export default function App() {
  
  return (


    <SafeAreaView style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={()=>{console.log("image tapped")}}>
      <Image blurRadius={2} source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/seed/picsum/200/300"}}/>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={()=>{console.log("image tapped")}}>
      <Image source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300?grayscale"}}/>


      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

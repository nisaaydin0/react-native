import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,TouchableWithoutFeedback ,TouchableOpacity,TouchableHighlight,Alert,Pressable} from 'react-native';
import { Button, SafeAreaView, ScrollView } from 'react-native-web';

export default function App() {
  
  return (


    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Button color='orange' style={buttonStyle} title="Click Me" onPress={()=>{alert("Somebody pressed the button ! Call the police !")}} />
        <Button color='red' title="Click Me" onPress={()=>Alert.alert("My Title","My message",
          [{ text:"Yes" },
          { text:"No" }])} />

<Button
          color="blue"
          title="Message"
          onPress={() =>
            Alert.prompt("My Title", "My message", (text) =>
              console.log("Entered text:", text)
            )
          }
        />
      <Text>Hello!</Text>
      <StatusBar style="auto" />
      <Pressable onPress={()=>{console.log("image tapped")}}>
      <Image blurRadius={2} source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/seed/picsum/200/300"}}/>
      </Pressable>

      <TouchableOpacity onPress={()=>{console.log("image tapped")}}>
      <Image source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300?grayscale"}}/>
      </TouchableOpacity>

      <TouchableHighlight onPress={()=>{console.log("image tapped")}} >
      <Image source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/id/237/200/300"}}/>
      </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
}

const buttonStyle = {color:"black"};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:50,
  },
});

import { StyleSheet, View } from 'react-native';
import SignIn from './navigation';
import 'react-native-gesture-handler';


export default function App() {
  return (
    <View style={styles.container}>
      <SignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, TextInput, Button} from "@react-native-material/core";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      color: Colors.white
    },
    subtitleText:{
        color: Colors.white
    },
    
  });

export default function SignUp() {
  return (
    <Stack spacing={2} style={{ margin: 16, width: 300 }}>

      <Text style={styles.titleText}>Welcome to CarRental!</Text>
      <Text style={styles.subtitleText}>Let's get you a ride as fast as possible!</Text>
      <TextInput
      label="First Name"
      variant="outlined"
    />
    <TextInput 
      label="Last Name"
      variant="outlined"
    />
    <TextInput
      label="Email"
      variant="outlined"
    />
    <TextInput
      label="Password"
      variant="outlined"
      type="password"
    />
    <TextInput
      label="Confirm Password"
      variant="outlined"
      type="password"
    />
    <TextInput
      label="Phone"
      variant="outlined"
      type="password"
    />
    <TextInput
      label="DateOfBirth"
      variant="outlined"
      type="password"
    /><TextInput
    label="Country"
    variant="outlined"
    type="password"
  /><TextInput
  label="City"
  variant="outlined"
  type="password"
/><TextInput
      label="Address"
      variant="outlined"
      type="password"
    />
    <Button title="Register" color="#1B82A3" tintColor="white"/>
    
    </Stack>
  );
}


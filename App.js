import React,  { useState, useEffect }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Linking, Image, TextInput, Button, StyleSheet } from 'react-native';
import { UpperPane, BottomPane } from './components/pane/pane';
import {styles} from './App.style'
// import { useFonts } from 'expo-font';
import { authenticateWithTaiga, fetchUserDetails } from './services/taigaAPI';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import * as NavigationBar from 'expo-navigation-bar';
import { FontAwesome } from '@expo/vector-icons';




const Stack = createStackNavigator();

const openURL = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Don't know how to open URL: ${url}`);
      }
    })
    .catch((err) => console.error('An error occurred', err));
};


// function HomeScreen({ navigation, route }) {
//   const { fullName } = route.params;
//   return (
//     <View style={{flex: 1}}>
//       <UpperPane/>
//       <View style={{flex: 1, backgroundColor: '#1D91AD', alignItems:'center', justifyContent: 'center', borderColor: '#ffb800', borderWidth: 15, shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//               },
//     shadowOpacity: 0.29,
//     shadowRadius: 4.65,
//     elevation: 7,}}>
//         <Text style={{textAlign: 'center', fontSize: 15, fontFamily: 'Bangers_400Regular', color: '#ffb800',}}>Welcome aboard, {fullName}!</Text>
//       </View>
//       <View style={{flex: 2, backgroundColor: '#1D91AD', alignItems:'center', justifyContent: 'center', borderColor: '#ffb800', borderWidth: 15, shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//               },
//     shadowOpacity: 0.29,
//     shadowRadius: 4.65,
//     elevation: 7,}}>
//             <Text style={{textAlign: 'center', fontSize: 70, fontFamily: 'Bangers_400Regular', color: '#ffb800',}}> 
//                Testie   
//             </Text>
//           </View>
//             <TouchableOpacity style={styles.button}>
//               {/* <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25, fontFamily: 'Vazirmatn-Medium', color: '#ffb800'}}>شروع</Text> */}
//               <Text style={{textAlign: 'center', fontSize: 40, fontFamily: 'Bangers_400Regular', color: '#ffb800'}}>Start</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} >
//               {/* <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25, fontFamily: 'Vazirmatn-Medium', color: '#ffb800'}}>راهنما</Text> */}
//               <Text style={{textAlign: 'center', fontSize: 40, fontFamily: 'Bangers_400Regular', color: '#ffb800'}}>Help</Text>      
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Links')}>
//               {/* <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 25, fontFamily: 'Vazirmatn-Medium', color: '#ffb800'}}>پیوندها</Text> */}
//               <Text style={{textAlign: 'center', fontSize: 40, fontFamily: 'Bangers_400Regular', color: '#ffb800'}}>Links</Text>   
//             </TouchableOpacity>
//             <View style={styles.powered}>
//             <Text style={{textAlign: 'center', fontFamily: 'Bangers_400Regular', color: '#1D91AD', backgroundColor: '#ffb800'}}>Powered by okaeiz!</Text>
//             </View>
//       <BottomPane/>
//     </View>
//   );
// }

function HomeScreen({ navigation, route }) {
  const { fullName } = route.params;

  return (
    <View style={{flex: 1}}>
      {/* <NavigationBar title="Dashboard" /> */}
      
      <UpperPane/>

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome aboard, {fullName}!</Text>
      </View>

      <View style={styles.calendarContainer}>
        <Text style={styles.calendarText}>Testie</Text>
      </View>

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Links')}>
          <Text style={styles.buttonText}>Links</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.poweredByContainer}>
        <Text style={styles.poweredByText}>Powered by okaeiz!</Text>
      </View>

      <BottomPane/>
    </View>
  );
}

function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const token = await authenticateWithTaiga(username, password);
      console.log(`User ${username} was authenticated! Token:`, token);
      const userDetails = await fetchUserDetails(token);
      const fullName = userDetails.username; // Assuming the API returns a 'full_name' field.
      navigation.navigate('Home', { fullName: fullName });
      // Store the token, navigate to another screen, etc.
    } catch (error) {
      console.error('Authentication failed:', error.message);
      setError('Authentication failed. Please check your credentials.');
    }
  };

  return (
    // <View style={{flex: 1}}>
    //   <UpperPane/>
    //   <TextInput 
    //     style={styles.input} 
    //     placeholder="Username"
    //     onChangeText={setUsername} 
    //     value={username} 
    //   />
    //   <TextInput 
    //     style={styles.input} 
    //     placeholder="Password" 
    //     onChangeText={setPassword} 
    //     value={password} 
    //     secureTextEntry 
    //   />
    //   <TouchableOpacity style={styles.loginButton}>
    //     <Text style={styles.loginButtonText} onPress={handleLogin}>Login</Text>
    //     </TouchableOpacity>
    //   <BottomPane/>

    // </View>
    <View style={styles.container}>
    <UpperPane/>
    
    <View style={styles.loginForm}>
      <TextInput 
        style={styles.input2} 
        placeholder="Username"
        placeholderTextColor="#1D91AD"
        onChangeText={setUsername} 
        value={username} 
      />
      <TextInput 
        style={styles.input2} 
        placeholder="Password" 
        placeholderTextColor="#1D91AD"
        onChangeText={setPassword} 
        value={password} 
        secureTextEntry 
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.loginButton2} onPress={handleLogin}>
        <Text style={styles.loginButtonText2}>Login</Text>
      </TouchableOpacity>
    </View>

    <BottomPane/>
  </View>
  );
}

function LinksScreen() {
  return (
    // <View style={{flex: 1}}>
    //   <UpperPane/>
    //   <View style={{flex: 1, flexDirection: 'row'}}>
    //        <TouchableOpacity style={styles.linksBox1} onPress={() => openURL('https://docs.sarmadinst.ir')}>
    //           {/* <Text style={styles.linksText}>سامانه مدیریت دانش</Text> */}
    //           <Text style={styles.linksText}>Bookstack</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity style={styles.linksBox2} onPress={() => openURL('https://taiga.sarmadinst.ir')}>
    //           <Text style={styles.linksText}>Taiga</Text>
    //         </TouchableOpacity>
    //         </View>    
    //   <View style={{flex: 1, flexDirection: 'row'}}>
    //         <TouchableOpacity style={styles.linksBox3} onPress={() => openURL('https://my.sarmadinst.ir')}>
    //           <Text style={styles.linksText}>Metabase</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity style={styles.linksBox4} onPress={() => openURL('https://pm.sarmadinst.ir')}>
    //           {/* <Text style={styles.linksText}>سامانه مدیریت فرآیندهای سازمانی</Text> */}
    //           <Text style={styles.linksText}>ProcessMaker</Text>
    //         </TouchableOpacity> 
    //         </View>    
    //   <BottomPane/>
    // </View>
    <View style={styles.container2}>
    <UpperPane/>
    
    <View style={styles.linksRow}>
      <TouchableOpacity style={styles.linkBox} onPress={() => openURL('https://docs.sarmadinst.ir')}>
        <FontAwesome name="book" size={24} color="#ffb800" />
        <Text style={styles.linkText}>Bookstack</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkBox} onPress={() => openURL('https://taiga.sarmadinst.ir')}>
        <FontAwesome name="code-fork" size={24} color="#ffb800" />
        <Text style={styles.linkText}>Taiga</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.linksRow}>
      <TouchableOpacity style={styles.linkBox} onPress={() => openURL('https://my.sarmadinst.ir')}>
        <FontAwesome name="bar-chart" size={24} color="#ffb800" />
        <Text style={styles.linkText}>Metabase</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkBox} onPress={() => openURL('https://pm.sarmadinst.ir')}>
        <FontAwesome name="cogs" size={24} color="#ffb800" />
        <Text style={styles.linkText}>ProcessMaker</Text>
      </TouchableOpacity>
    </View>

    <BottomPane/>
  </View>
  );
}

export default function App() {
  const visibility = NavigationBar.useVisibility()
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });
  if (!fontsLoaded) {
    return (
      <View>
        <Text>An error occured!</Text>
      </View>
    );
  } else {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Links" component={LinksScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}


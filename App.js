import React,  { useState, useEffect, useRef }  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Linking, TextInput, Animated } from 'react-native';
import { UpperPane, BottomPane } from './components/pane/pane';
import {styles} from './App.style';
import { authenticateWithTaiga, fetchUserDetails, fetchFromExpress, fetchCurrentProject } from './services/taigaAPI';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import { Lalezar_400Regular } from '@expo-google-fonts/lalezar';
import * as NavigationBar from 'expo-navigation-bar';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



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

function HomeScreen({ navigation, route }) {
  const { fullName } = route.params;
  const { username } = route.params;
  const { id } = route.params;
  const circlePosition = useRef(new Animated.ValueXY()).current;
  const squarePosition = useRef(new Animated.ValueXY()).current;
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const blinkingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ])
    );

    blinkingAnimation.start();
  }, []);

  const moveShapesRandomly = () => {
    // Generate random positions for the circle and square
    const randomCirclePosition = {
      x: Math.random() * 100 - 50, // Random value between -50 and 50
      y: Math.random() * 100 - 50,
    };

    const randomSquarePosition = {
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    };
        // Animate the shapes to the new positions
        Animated.spring(circlePosition, {
          toValue: randomCirclePosition,
          useNativeDriver: false,
        }).start();
    
        Animated.spring(squarePosition, {
          toValue: randomSquarePosition,
          useNativeDriver: false,
        }).start();
      };

  return (
    <View style={{flex: 1}}>      
      <UpperPane/>
      <View style={styles.outerContainer}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>خوش اومدی، {fullName}!</Text>
      </View>
      </View>
      {/* <View style={styles.calendarOuterContainer}>
      <TouchableOpacity style={[styles.calendarContainer, { opacity: opacity }]} onPress={moveShapesRandomly}>
      <Animated.View style={[styles.circle, { transform: circlePosition.getTranslateTransform() }]} />
      <Animated.View style={[styles.square, { transform: squarePosition.getTranslateTransform() }]} />
      </TouchableOpacity>
      </View> */}
      <View style={styles.calendarOuterContainer}>
        <TouchableOpacity onPress={moveShapesRandomly}>
          <Animated.View style={[styles.calendarContainer, { opacity: opacity }]}>
            <Animated.View style={[styles.circle, { transform: circlePosition.getTranslateTransform() }]} />
            <Animated.View style={[styles.square, { transform: squarePosition.getTranslateTransform() }]} />
          </Animated.View>
        </TouchableOpacity>
      </View>
      <View style={styles.actionButtonsContainer}>
      <LinearGradient colors={['#9c2f40', '#8c2230']} style={styles.homeButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile', { fullName: fullName })} style={{alignItems:'center'}}>
          <FontAwesome name="address-card" size={24} color="#deb99d" />    
          <Text style={styles.buttonText}>پروفایل من</Text>
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient colors={['#9c2f40', '#8c2230']} style={styles.homeButton}>
        <TouchableOpacity style={{alignItems:'center'}} onPress={async () => {
        try {
            const results = await fetchFromExpress();
            console.log(results);
        } catch (error) {
            console.error("Error fetching from Express:", error);
        }
    }}>
          <FontAwesome name="question-circle" size={24} color="#deb99d" />
          <Text style={styles.buttonText}>راهنما</Text>
        </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.actionButtonsContainer}>
      <LinearGradient colors={['#9c2f40', '#8c2230']} style={styles.homeButton}>
      <TouchableOpacity onPress={() => navigation.navigate('Daily scrum', { id:id })} style={{alignItems:'center'}}>
          <FontAwesome name="calendar" size={24} color="#deb99d" />
          <Text style={styles.buttonText}>دیلی اسکرام</Text>
        </TouchableOpacity>
        </LinearGradient>
        <LinearGradient colors={['#9c2f40', '#8c2230']} style={styles.homeButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Links')} style={{alignItems:'center'}}>
          <FontAwesome name="link" size={24} color="#deb99d" />
          <Text style={styles.buttonText}>پیوندها</Text>
        </TouchableOpacity>
        </LinearGradient>
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
      const fullName = userDetails.full_name; // Assuming the API returns a 'full_name' field.
      const user_name = userDetails.username;
      const user_id = userDetails.id;
      navigation.navigate('Home', { fullName: fullName, username: user_name, id: user_id });
    } catch (error) {
      console.error('Authentication failed:', error.message);
      setError('نام کاربری یا رمز عبورت رو اشتباه وارد کردی!');

    }
  };

  return (
    <View style={styles.container}>
    <UpperPane/>
    <View style={styles.loginForm}>
      <TextInput 
        style={styles.input2} 
        placeholder="نام کاربری"
        placeholderTextColor="#c18477"
        onChangeText={setUsername} 
        value={username} 
      />
      <TextInput 
        style={styles.input2} 
        placeholder="رمز عبور" 
        placeholderTextColor="#c18477"
        onChangeText={setPassword} 
        value={password} 
        secureTextEntry 
      />
      {error && <Text style={styles.errorText}>نام کاربری یا رمز عبورت رو اشتباه وارد کردی!</Text>}
      <TouchableOpacity style={styles.loginButton2} onPress={handleLogin}>
        <Text style={styles.loginButtonText2}>بزن بریم!</Text>
      </TouchableOpacity>
    </View>

    <BottomPane/>
  </View>
  );
}

function LinksScreen() {
  return (
    <View style={styles.container2}>
    <UpperPane/>
    
    <View style={styles.linksRow}>
      <TouchableOpacity style={styles.linkBox} onPress={() => openURL('https://docs.sarmadinst.ir')}>
        <FontAwesome name="book" size={24} color="#deb99d" />
        <Text style={styles.linkText}>بوک‌استک</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkBox} onPress={() => openURL('https://taiga.sarmadinst.ir')}>
        <FontAwesome name="code-fork" size={24} color="#deb99d" />
        <Text style={styles.linkText}>تایگا</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.linksRow}>
      <TouchableOpacity style={styles.linkBox} onPress={() => openURL('https://my.sarmadinst.ir')}>
        <FontAwesome name="bar-chart" size={24} color="#deb99d" />
        <Text style={styles.linkText}>متابیس</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkBox} onPress={() => openURL('https://pm.sarmadinst.ir')}>
        <FontAwesome name="cogs" size={24} color="#deb99d" />
        <Text style={styles.linkText}>پروسس‌میکر</Text>
      </TouchableOpacity>
    </View>

    <BottomPane/>
  </View>
  );
}

function ProfileScreen({ route }) {
  const { fullName } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: '#8c2230' }}>
      <UpperPane/>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Your username is: {fullName}!</Text>
      </View>
      <BottomPane/>
    </View>
  );
}

function DailyScrum({ route }) {
  const { id } = route.params;
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCurrentProject(id);
        setUserDetails(data);
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError(err.message);
      }
    };

    fetchData();
  }, [id]); // The effect will re-run if 'id' changes

  return (
    <View style={{ flex: 1, backgroundColor: '#8c2230' }}>
      <UpperPane/>
      <View style={styles.welcomeContainer}>
        {error && <Text>Error: {error}</Text>}
        {userDetails && <Text style={styles.welcomeText}>پروژه‌ت رو انتخاب کن!</Text>}
      </View>
      <View style={styles.scrumDailyProjectsContainer}>
              {/* Render a TouchableOpacity for each project */}
              {userDetails && userDetails.map((project, index) => (
        <LinearGradient colors={['#a0484b', '#8c2230']} style={styles.scrumDailyProjects}>
          <TouchableOpacity 
            key={index}>
            <Text style={styles.scrumDailyProjectsText}>{project.name}</Text>
          </TouchableOpacity>
          </LinearGradient>
        ))}
        </View>
      <BottomPane/>
    </View>
  );
}

export default function App() {
  const visibility = NavigationBar.useVisibility()
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
    Lalezar_400Regular
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Daily scrum" component={DailyScrum} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}


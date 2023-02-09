import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [servingNum, setServingNum] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Bruschetta Recipe</Text>
      <Image source={require('./assets/bruschetta.png')} />
      <TextInput
        placeholder="Enter the Number of Servings"
        style={styles.input}
        onChangeText={newServingNum => setServingNum(newServingNum)}
        keyboardType="numeric"
      />
       <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Ingredients', { servingNum, });
        }}>
          <Text style={styles.buttonText}>View Recipe</Text>  
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
function IngredientsPage({route, navigation}){
  const { servingNum } = route.params;
  return(
    <View>
      <Text style={styles.ingTitle}>Bruschetta</Text>
      <Text style={styles.ingSubTitle}>Ingredients</Text>
      <Text style={styles.detail}>{servingNum * 4} plum tomatoes</Text>
      <Text style={styles.detail}>{servingNum * 6} basil leaves</Text>
      <Text style={styles.detail}>{servingNum * 3} garlic cloves, chopped</Text>
      <Text style={styles.detail}>{servingNum * 3} TB olive oil</Text>
      <Text style={styles.ingSubTitle}>Directions</Text>
      <Text style={styles.detail}>Combine the ingredients. add salt to taste. Top French bread slices with mixture</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Healthy Recipes" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: '#f4511e',
            textAlign: 'center',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}
        />
        <Stack.Screen name="Ingredients" component={IngredientsPage} options={{
          headerStyle: {
            backgroundColor: '#f4511e',
            textAlign: 'center',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    width: 275,
    marginTop: 25,
    marginBottom: 25,
  },
  Title: {
    marginTop: -10,
    fontWeight: "bold",
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginBottom: 30,
    height: 40,
    alignItems: 'center',
    backgroundColor: "grey",
    width: 120,
    margin: 12,
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
  ingTitle: {
    marginTop: 100,
    fontWeight: "bold",
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 20,
  },
  ingSubTitle: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20,
  },
  detail: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 40,
  }
});

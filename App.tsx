import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const BottomNavigation = ()=> {

  const Tab = createBottomTabNavigator();

  return (<View style={{flex: 1}}>
  <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: '#3fb9f2'},
      headerStyle: { backgroundColor: '#3fb9f2'},
      headerTitle: () => <Text>Header Text</Text>,
      headerTitleAlign: 'center'      
    }}>
      <Tab.Screen name="Something" options={{ 
        title: "something",
        headerShown: false, 
        tabBarActiveTintColor: '#FFFFFF', 
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabelStyle: {fontSize: 14}
      }}>
        {(props) => { return <DivesNavigation {...props}/>}}
      </Tab.Screen>       
    </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}

const DivesNavigation = ({navigation}:any) => {
  const Stack = createNativeStackNavigator();

  const focusDiveProfile = () => {
    navigation.navigate("MyModalWindow");
  }

  return (
    <View style={{flex: 1}}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#3fb9f2'
            },
            headerTintColor: '#fff',
            headerTitle: () => <Text>My header</Text>,
            headerTitleAlign: 'center'           
          }}          
        >
        
        <Stack.Screen name="Demo">
          {(props) => {return <Text>
            <TouchableOpacity onPress={() => focusDiveProfile()}>
              <Text style={{padding: 30}}>This is to demonstrate a problem with transparentModal on iOS devices 
                with a notch or dynamic island. 
                Click to open modal in LANDSCAPE mode and then close it.
              </Text>
            </TouchableOpacity>
          </Text>}}
        </Stack.Screen>
        
        <Stack.Screen
          name="MyModalWindow"
          component={Modalcontent}
          options={{ presentation: 'transparentModal', headerShown: false }}
        />   

      </Stack.Navigator>   
    </View>
  );
};


const Modalcontent = ({navigation}:any) => {

  const closeModal = () => {
    navigation.pop()
  }

  return (
    <View style={{flex: 1, padding: 30, backgroundColor: '#FFFFFF'}}>
        <Text>This modal needs to be full screen, as it will contain a lot of (interactive) content and I do not want 
          the title or bottom bar to show. Click on close in the next line, and the header and footer will be higher than before, 
          taking up much more space until you force close the app:
        </Text>
        <TouchableOpacity onPress={closeModal}>
            <Text style={{fontWeight: 'bold'}}>Close Modal</Text>
        </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation
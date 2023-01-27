
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './Login';
import Register from './Register';
import { NavigationContainer } from '@react-navigation/native';
const stack = createNativeStackNavigator();

export default function App (){
  return (
    <NavigationContainer>
     <stack.Navigator initialRouteName="login">
        <stack.Screen name="login" component={Login} />
            <stack.Screen name="register" component={Register} />
          </stack.Navigator>
        </NavigationContainer>
  );
};




// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="login">
//         <Drawer.Screen name="login" component={Login} />
//         <Drawer.Screen name="register" component={Register} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }




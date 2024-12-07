import Login from "./components/screens/login/login.jsx";
import Register from "./components/screens/register/register.jsx";
import Register2 from "./components/screens/register2/register2.jsx";
import Search from "./components/screens/search/search.jsx";
import RestaurantMenu from "./components/screens/restaurantmenu/restaurantmenu.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Routes() {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="login" component={Login} options={{
                headerShown: false
            }} />

            <Stack.Screen name="register" component={Register} options={{
                headerShadowVisible: false,
                title: "",
                headerBackTitle: "Voltar"
            }} />

            <Stack.Screen name="register2" component={Register2} options={{
                headerShadowVisible: false,
                title: "",
                headerBackTitle: "Voltar"
            }} />

        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;
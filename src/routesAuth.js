import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme, { COLORS } from "./constants/theme.js";
import Principal from "./components/screens/principal/principal";
import RestaurantMenu from "./components/screens/restaurantmenu/restaurantmenu.jsx";
import Search from "./components/screens/search/search.jsx";
import ProductDetail from "./components/screens/product-detail/product-detail.jsx";
import OrderDetail from "./components/screens/order-detail/order-detail.jsx";
import Checkout from "./components/screens/checkout/checkout.jsx";
import { TouchableOpacity, Text } from "react-native";


const Stack = createNativeStackNavigator();


function RoutesAuth() {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="principal" component={Principal} options={{
                headerShown: false
            }} />

            <Stack.Screen name="checkout" component={Checkout} options={{
                headerShadowVisible: false,
                title: "Meu pedido",
                headerTitleAlign: "center",
                headerRight: () => {
                    return <TouchableOpacity>
                        <Text style={{ color: COLORS.red }}>Limpar</Text>
                    </TouchableOpacity>
                }
            }} />

            <Stack.Screen name="detalhe-pedido" component={OrderDetail} options={{
                headerShadowVisible: false,
                title: "Detalhes do Pedido",
                headerTitleAlign: "center"
            }} />

            <Stack.Screen name="detalhe-produto" component={ProductDetail} options={{
                headerShadow: false,
            }} />

            <Stack.Screen name="cardapio" component={RestaurantMenu} options={{
                headerShown: false
            }} />

            <Stack.Screen name="busca" component={Search} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    </NavigationContainer>
}
export default RoutesAuth;
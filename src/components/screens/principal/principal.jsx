import {Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icons from "../../../constants/icons.js";
import LayerHome from "../layer-home/layer-home.jsx";
import LayerFavorites from "../layer-favorites/layer-favorites.jsx";
import LayerOrders from "../layer-orders/layer-orders.jsx";
import LayerProfile from "../layer-profile/layer-profile.jsx";

const Tab = createBottomTabNavigator();

function Principal() {
    return <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShadowVisible: false, headerTitleAlign: "center" }}>

        <Tab.Screen name="Home" component={LayerHome} options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={focused ? icons.homeTabSelected : icons.homeTab} style={{ width: 30, height: 30 }} />
            }
        }} />
        <Tab.Screen name="Favoritos" component={LayerFavorites} options={{
            tabBarIcon: ({ focused }) => {
                return <Image source={focused ? icons.favoriteTabSelected : icons.favoriteTab} style={{ width: 30, height: 30 }} />
            }
        }} />
        <Tab.Screen name="Pedidos" component={LayerOrders} options={{
            tabBarIcon: ({ focused }) => {
                return <Image source={focused ? icons.orderTabSelected : icons.orderTab} style={{ width: 30, height: 30 }} />
            }
        }} />
        <Tab.Screen name="Perfil" component={LayerProfile} options={{
            tabBarIcon: ({ focused }) => {
                return <Image source={focused ? icons.profileTabSelected : icons.profileTab} style={{ width: 30, height: 30 }} />
            }
        }} />

    </Tab.Navigator>
}

export default Principal;
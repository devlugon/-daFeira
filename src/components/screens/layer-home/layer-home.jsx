import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./layer-home.style.js";
import icons from "../../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../textbox/textbox.jsx";
import { useState } from "react";
import Category from "../../category/category.jsx";
import { category, banners, feiras } from "../../../constants/data.js";
import Banners from "../../banners/banners.jsx";
import Feira from "../../feira/feira.jsx";

function LayerHome(props) {

    function OpenRestaurantMenu() {
        props.navigation.navigate("cardapio");
    }

    const [search, setSearch] = useState("");

    return <>
        <SafeAreaView style={styles.container}>
            <View style={styles.headerBar}>
                <Image source={icons.logo} style={styles.logo} />

                <TouchableOpacity onPress={() => props.navigation.navigate("checkout")}>
                    <Image source={icons.cart} style={styles.cart} />
                </TouchableOpacity>
            </View>
            <View style={styles.search}>
                <TextBox placeholder="O que vamos pedir hoje?"
                    onChangeText={(text) => setSearch(text)}
                    value={search} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Category data={category} />

                <Banners data={banners} />
                {
                    feiras.map((feiras, index) => {
                        return <View key={index}>
                            <Feira
                                logotipo={feiras.logotipo}
                                nome={feiras.nome}
                                endereco={feiras.endereco}
                                icone={icons.favoritefull}
                                onPress={OpenRestaurantMenu}
                            />
                        </View>
                    })
                }

            </ScrollView>

        </SafeAreaView>
    </>
}
export default LayerHome;
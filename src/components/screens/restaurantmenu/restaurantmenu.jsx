import { Image, TouchableOpacity, View, Text, ScrollView } from "react-native";
import { styles } from "./restaurantmenu.style.js";
import { feira } from "../../../constants/data.js";
import Product from "../../product/product.jsx";
import icons from "../../../constants/icons.js";

function RestaurantMenu(props) {
    return <View style={styles.container}>
        <View style={styles.containerPhoto}>
            <Image source={feira.foto} style={styles.photo} resizeMode="contain" />

            <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back} />
            </TouchableOpacity>
        </View>



        <View style={styles.header}>
            <View style={styles.headerTexts}>
                <Text style={styles.name}>Nome do restaurante</Text>
                <Text style={styles.tax}>Taxa de entrega</Text>
            </View>

            <Image source={icons.favoritefull} style={styles.favorito} />

        </View>

        <View style={styles.location}>
            <Image source={icons.location2} style={styles.locationImg} />
            <Text style={styles.adress}>Adress</Text>
        </View>
        <ScrollView>
            {
                feira.cardapio.map((item) => {
                    return <View key={item.idCategoria} style={styles.containerProduct}>
                        <Text style={styles.category}>{item.categoria}</Text>

                        {
                            item.itens.map((prod) => {
                                return <Product key={prod.idProduto}
                                    idProduto={prod.idProduto}
                                    foto={prod.foto}
                                    nome={prod.nome}
                                    descricao={prod.descricao}
                                    valor={prod.valor} />
                            })
                        }

                    </View>

                })
            }
        </ScrollView >
    </View>
}

export default RestaurantMenu;
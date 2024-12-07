import { TouchableOpacity, Image, Text, View } from "react-native";
import { styles } from "./product.styles.js";
import icons from "../../constants/icons.js";

function Product(props) {
    return <TouchableOpacity style={styles.product}>
        <Image source={props.foto} style={styles.foto} />

        <View style={styles.texts}>
            <Text style={styles.name}>{props.nome}</Text>
            <Text style={styles.desc}>{props.descricao}</Text>
        </View>

        <View >
            <Text style={styles.price}>{
                new Intl.NumberFormat("pt-BR",
                    { style: "currency", currency: "BRL" }).format(props.valor)
            } </Text>

            {
                props.onClickDelete && <TouchableOpacity style={styles.containerDelete} onPress={() => props.onClickDelete()}>
                    <Image source={icons.remove} style={styles.delete} />
                </TouchableOpacity>
            }
        </View>
    </TouchableOpacity>
}

export default Product;
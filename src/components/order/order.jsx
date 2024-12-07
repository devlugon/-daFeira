import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./order.style.js";

function Order(props) {
    return <TouchableOpacity style={styles.order} onPress={() => props.onClickOrder()}>
        <Image source={props.logotipo} style={styles.logotipo} />

        <View style={styles.texts}>
            <Text style={styles.name}>{props.nome}</Text>

            <View style={styles.containerValue}>
                <Text style={styles.value}>
                    {
                        new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(props.valor)
                    }
                </Text>
                <Text style={styles.value}>{props.dt_pedido}</Text>
            </View>

            <Text style={styles.status}>{props.status}</Text>
        </View>
    </TouchableOpacity>
}

export default Order;
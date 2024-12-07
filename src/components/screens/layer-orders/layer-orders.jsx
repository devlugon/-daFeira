import { FlatList, View, Image, Text } from "react-native";
import { orders } from "../../../constants/data.js";
import  Order from "../../order/order.jsx";
import icons from "../../../constants/icons.js";
import { styles } from "./layer-orders.style.js";

function LayerOrders(props) {

    function OrderDetail() {
        props.navigation.navigate("detalhe-pedido");
    }

    return <View style={styles.container}>
        <FlatList data={orders}
            keyExtractor={(feira) => feira.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Order logotipo={item.logotipo}
                nome={item.nome}
                valor={item.vl_total}
                dt_pedido={item.dt_pedido}
                status={item.status}
                onClickOrder={OrderDetail} />
            }}

            contentContainerStyle={styles.containerList}

            ListEmptyComponent={() => {
                return <View style={styles.empty}>
                    <Image source={icons.empty} />
                    <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
                </View>
            }}
        />
    </View>
}
export default LayerOrders;
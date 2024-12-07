import { TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import { styles } from "./checkout.style.js";
import icons from "../../../constants/icons.js";
import { order } from "../../../constants/data.js";
import Product from "../../../components/product/product.jsx"
import Button from "../../button/button.jsx";


function Checkout(props) {

    function ClickDelete(){
        alert("OK");
    }

    return <View style={styles.container}>

        <FlatList data={order.itens}
            keyExtractor={(item) => item.idItem}
            showVerticalScrollIndicarot={false}
            renderItem={({ item }) => {
                return <Product key={item.idItem}
                    foto={item.foto}
                    nome={item.nome} 
                    descricao={item.descricao} 
                    valor={item.vlTotal}
                    onClickDelete={ClickDelete}/>
            }}
        />

        <View style={styles.footer}>
            <View style={styles.values}>
                <Text style={styles.total}>Resumo dos valores</Text>
            </View>

            <View style={styles.values}>
                <Text style={styles.value}>Subtotal</Text>
                <Text style={styles.value}>R$66,00</Text>
            </View>

            <View style={styles.values}>
                <Text style={styles.value}>Taxa de entrega</Text>
                <Text style={styles.value}>R$5,00</Text>
            </View>

            <View style={styles.values}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>R$71,00</Text>
            </View>
        </View>
        
        <View style={styles.containerBtn}>
            <Button texto="Finalizar Pedido"/>
        </View>
        
    </View>
}

export default Checkout;
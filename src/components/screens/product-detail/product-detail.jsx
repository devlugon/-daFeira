import { Image, TouchableOpacity, View, Text, ScrollView, TextInput } from "react-native";
import { styles } from "./product-detail.style.js";
import Button from "../../button/button.jsx";
import icons from "../../../constants/icons.js";

function ProductDetail(props) {
    return <View style={styles.container}>
        <View style={styles.containerPhoto}>
            <Image source={icons.product_cheese} style={styles.photo} resizeMode="cover" />

            <TouchableOpacity style={styles.containerBack} onPress={props.navigation.goBack}>
                <Image source={icons.back2} style={styles.back} />
            </TouchableOpacity>
        </View>



        <View style={styles.header}>
            <View style={styles.headerTexts}>
                <Text style={styles.name}>Queijo Canastra</Text>
                <Text style={styles.desc}>Um dos mais famosos queijos artesanais do Brasil,
                    originário da Serra da Canastra MG. É um queijo de leite cru,
                    com sabor suave e levemente ácido quando fresco, que se intensifica
                    com o tempo de maturação.
                </Text>
                <Text style={styles.price}>R$ 30,00</Text>
            </View>
        </View>

        <View style={styles.headerObs}>
            <Text style={styles.desc}>Observações</Text>
            <TextInput style={styles.multiline} multiline={true} numberOfLines={5} />
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={icons.less} style={styles.imgQtd} />
            </TouchableOpacity>
            
            <Text style={styles.qtd}>1</Text>

            <TouchableOpacity>
                <Image source={icons.plus} style={styles.imgQtd} />
            </TouchableOpacity>

            <View style={styles.footerBtn}>
                <Button texto="Inserir"/>
            </View>

        </View>
    </View>
}

export default ProductDetail;
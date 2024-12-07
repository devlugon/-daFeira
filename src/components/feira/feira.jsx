import { Image, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./feira.style.js";

function Feira(props) {
    return <TouchableOpacity style={styles.feira} onPress={() => props.onPress()}>
        <Image source={props.logotipo} style={styles.logotipo} />
        <View style={styles.text}>
            <Text style={styles.name}>{props.nome}</Text>
            <Text style={styles.adress}>{props.endereco}</Text>
        </View>
        <TouchableOpacity>
            <Image source={props.icone} style={styles.favorites} />
        </TouchableOpacity>
    </TouchableOpacity>
}

export default Feira;
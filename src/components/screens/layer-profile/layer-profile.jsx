import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles } from "./layer-profile.style.js";
import icons from "../../../constants/icons.js";

function LayerProfile() {
    return <View style={styles.container}>

        <TouchableOpacity style={[styles.item, styles.borderTop]}>
            <View>
                <Image source={icons.location} style={styles.icon}/>
            </View>

            <View style={styles.texts}>
                <Text style={styles.title}>Endereço</Text>
                <Text style={styles.subtitle}>Meu endereço de entrega</Text>
            </View>

            <View>
                <Image source={icons.more} style={styles.more}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
            <View>
                <Image source={icons.mydata} style={styles.icon}/>
            </View>

            <View style={styles.texts}>
                <Text style={styles.title}>Meus Dados</Text>
                <Text style={styles.subtitle}>Informações da minha conta</Text>
            </View>

            <View>
                <Image source={icons.more} style={styles.more}/>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
            <View>
                <Image source={icons.logout} style={styles.icon}/>
            </View>

            <View style={styles.texts}>
                <Text style={styles.title}>Desconectar</Text>
                <Text style={styles.subtitle}>Desconectar seu usuário deste aparelho</Text>
            </View>

            <View>
                <Image source={icons.more} style={styles.more}/>
            </View>
        </TouchableOpacity>

    </View>
}

export default LayerProfile;
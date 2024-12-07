import { View, Image, Text } from "react-native";
import { styles } from "./header.style";
import icons from "../../constants/icons.js";

function Header(props) {

    return <View styles={styles.header}>
        <Image style={styles.logo} source={icons.logo} />
        <Text style={styles.titulo}>{props.texto}</Text>
    </View>
}

export default Header;
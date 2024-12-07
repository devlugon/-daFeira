import { FlatList, View, Text, Image } from "react-native";
import { styles } from "./search.style.js";
import { feiras } from "../../../constants/data.js";
import Feira from "../../feira/feira.jsx";
import icons from "../../../constants/icons.js";

function Search() {
    return <View style={styles.container}>
        <FlatList data={feiras}
            keyExtractor={(feira) => feira.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Feira nome={item.nome}
                    endereco={item.endereco}
                    logotipo={item.logotipo}
                    icone={icons.favoritefull}
                />
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

export default Search;
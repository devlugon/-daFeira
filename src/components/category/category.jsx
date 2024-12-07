import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./category.style.js"

function Category(props) {
    return <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                props.data.map((category, index) => {
                    return <View key={index} style={styles.category}>
                        <TouchableOpacity>
                            <Image style={styles.icone} source={category.icone} />
                            <Text style={styles.descricao}>{category.descricao}</Text>
                        </TouchableOpacity>
                    </View>
                })
            }
        </ScrollView>
    </View>
}

export default Category;
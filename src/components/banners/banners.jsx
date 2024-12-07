import { View, Image, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./banners.style.js"

function Banners(props) {

    const getIconStyle = (banner, index) => {
        if (index % 2 === 0) {
            return styles.specialIcon;
        }
        else {
            return styles.regularIcon;
        }
    };

    return <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                props.data.map((banner, index) => {
                    return <View key={index} style={styles.banner}>
                        <TouchableOpacity>
                            <Image style={getIconStyle(banner, index)} source={banner.icone} />
                        </TouchableOpacity>
                    </View>
                })
            }
        </ScrollView>
    </View>
}

export default Banners;
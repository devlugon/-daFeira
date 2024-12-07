import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    feira: {
        flexDirection: "row",
        alignItems: "center", 
        marginBottom: 10,
        marginTop: 10
    },
    logotipo: {
        width: 80,
        height: 80,
        borderRadius: 6
    },
    text: {
        flex: 1,
        padding: 8
    },
    name: {
        color: COLORS.dark_gray,
        marginBottom:3,
        fontSize: FONT_SIZE.sm
    },
    adress: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm
    },
    favorites: {
        width: 30,
        height: 30
    }
}

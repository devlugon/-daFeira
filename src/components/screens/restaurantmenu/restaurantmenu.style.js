import { COLORS, FONT_SIZE } from "../../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: COLORS.white,
    },
    containerPhoto: {
        alignItems: "center"
    },
    photo: {
        height: 190
    },
    containerBack: {
        position: "absolute",
        top: 50,
        left: 15
    },
    back: {
        width: 40,
        height: 40
    },
    header: {
        width: "100%",
        flexDirection: "row",
        paddingTop: 15,
        paddingBottom: 10
    },
    headerTexts: {
        flex: 1
    },
    name: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2
    },
    tax: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.medium_gray,
    },
    favorito: {
        height: 40,
        width: 40
    },
    location: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    locationImg: {
        height: 30,
        width: 30,
        marginLeft: -5,
        marginTop: 10,
        marginBottom: 10
    },
    adress: {
        flex: 1,
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
    },
    containerProduct: {
        padding: 1
    },
    category: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        padding: 2
    }
}

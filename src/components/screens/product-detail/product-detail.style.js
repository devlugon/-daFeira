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
    desc: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.medium_gray,
    },
    price: {
        fontSize: FONT_SIZE.md,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        marginBottom: 2,
        marginTop: 20
    },
    headerObs: {
        width: "100%",
        padding: 10
    },
    multiline: {
        flex: 1,
        backgroundColor: COLORS.light_gray,
        padding: 10,
        color: COLORS.dark_gray,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.gray,
        minHeight: 120,
        textAlignVertical: "top"
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        paddingLeft: 20,
        paddingBottom: 20,
        alignItems: "center"
    },
    footerBtn:{
        flex: 1,
        margin: 5,
        marginLeft: 20,
    },
    imgQtd: {
        height: 40,
        width: 40
    },
    qtd: {
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.dark_gray,
        width: 35,
        textAlign: "center"
    }
}

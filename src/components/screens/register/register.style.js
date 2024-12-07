import { COLORS, FONT_SIZE } from "../../../constants/theme"

export const styles ={
    container: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: "center",
        backgroundColor: COLORS.white,
    },
    form: {
        width: "100%",
        marginBottom: 20
    },
    scrollView: {
        width: "100%"
    },
    formGroup: {
        width: "100%",
        marginTop: 25,
        marginBottom: 40
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        padding: 20,
        height: 70
        
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    }
}

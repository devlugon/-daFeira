import { COLORS, FONT_SIZE } from "../../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20
    },
    values: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 4,
        marginBottom: 4
    },
    value: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
    },
    total: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray,
        fontWeight: "bold"
    }
}
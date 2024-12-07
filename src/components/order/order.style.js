import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles ={
    order: {
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
    texts: {
        flex: 1,
        padding: 8
    },
    containerValue: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    value: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm
    },
    status: {
        color: COLORS.green
    }
}

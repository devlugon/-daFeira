import { COLORS, FONT_SIZE } from "../../../constants/theme.js";

export const styles ={
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: COLORS.white,
    },
    containerList: {
        flexGrow: 1,
    },
    empty: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
    },
    emptyText: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.dark_gray
    }
}

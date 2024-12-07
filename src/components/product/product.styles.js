import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    product: {
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        backfroundColor: COLORS.white,
        marginBottom: 10,
        marginTop: 10
    },
    foto: {
        height: 80,
        width: 80,
        borderRadius: 6
    },
    texts: {
        flex: 1,
        padding: 8
    },
    name: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm
    },
    desc: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.xsm
    },
    price:{
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,
        marginTop: 8
    },
    delete:{
        width:28,
        height:28
    },
    containerDelete:{
        alignItems: "flex-end",
        marginTop: 8
    }
}

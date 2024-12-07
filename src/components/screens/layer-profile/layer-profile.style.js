import { COLORS, FONT_SIZE } from "../../../constants/theme.js";

export const styles = {
    container: {
        flex: 1,
        
        backgroundColor: COLORS.white,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray
    },
    icon: {
        width: 30,
        height: 30
    },
    texts: {
        flex: 1,
        marginLeft: 10
    },
    title: {
        fontSize: FONT_SIZE.md
    },
    subtitle: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm
    },
    more:{
        width: 20,
        height: 20
    },
    borderTop:{
        borderTopWidth: 1,
        borderTopColor: COLORS.gray
    }
}

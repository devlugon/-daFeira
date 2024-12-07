import { COLORS, FONT_SIZE } from "../../../constants/theme"

export const styles ={
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.white,
    },
    headerBar:{
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logo: {
        width: 160,
        height: 50,
        marginLeft: -12
    },
    cartSelected: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    cart: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    search: {
        marginTop: 20
    }
}

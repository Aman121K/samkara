import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');
export const COLORS = {
    primary : "white",
    dots:'#096964',
    secondDots:'white',
    black: "#171717",
    white: "#FFFFFF",
    background: "#A7CECB"
}
export const SIZES = {
    base: 10,
    width,
    height
}


const theme = { COLORS, SIZES };

export default theme;
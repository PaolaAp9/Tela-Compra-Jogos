import { Text, StyleSheet } from "react-native";

export default function Texto ({children, style }) {
    let estilo = estilos.textoRegular

    if(style?.fontWeight === 'bold') {
        estilo = estilos.textoBold
    }
    return <Text style={[style, estilo]}>{children}</Text>
}
const estilos = StyleSheet.create ({
    textoRegular: {
        fontFamily:"MuktaRegular",
        fontWeight: "normal"
    },
    textoBold:{
        fontFamily:"MuktaBold",
        fontWeight:"normal"
    }
})

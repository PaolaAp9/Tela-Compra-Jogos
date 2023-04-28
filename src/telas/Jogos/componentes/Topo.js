import { Image, StyleSheet, Dimensions} from "react-native";
import Texto from "../../../componentes/Texto";
import topo from "../../../../assets/topo.jpg";

const width = Dimensions.get("screen").width;

export default function Topo ({titulo}){
    return<>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>{titulo}</Texto>
     </>
}
const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 400,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        color: '#FFFFFF',
        padding: 26,
        textAlign: "center",
        fontSize: 28,
    }
})
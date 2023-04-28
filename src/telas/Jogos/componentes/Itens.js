import { Image, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";
import logo from "../../../../assets/logo.png"

export default function Itens ({titulo, lista }) {
    return <>
        <Texto style={estilos.titulo}>{titulo} </Texto>
        <View style={estilos.card}>
        {lista.map (({nome, imagem}) =>{
            return <View key={nome} style={estilos.lista}>
                <Texto style={estilos.nome}>{nome}</Texto>
                <Image source={imagem} style={estilos.imagem}/>
            </View>
        })}
        </View>
        <Image source={logo} style={estilos.logo}/>
    </>
    
}


const estilos = StyleSheet.create ({
    imagem: {
        width:"100%",
        height:200,
        borderRadius: 40
    },
    card: {
        //flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    lista: {
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical:12,
    },
    titulo: {
        color:"sienna",
        fontSize:30,
        lineHeight:32,
        marginTop: 20,
        textAlign:"center",
    },
    nome: {
        fontSize:20,
        lineHeight:26,
        marginLeft:30,
        color:"#464646"
    },
    logo:{
        height:50,
        width:50,
        marginHorizontal:220,   
    }
    
})
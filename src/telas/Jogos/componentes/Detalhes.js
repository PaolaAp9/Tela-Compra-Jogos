import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from "../../../componentes/Texto";


export default function Detalhes ({nome, logo, nomeColecao, detalhe, preco, botao}) {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.colecao}>
            <Image source={logo} style={estilos.logo}/>
            <Texto style={estilos.nomeColecao}>{nomeColecao}</Texto>
        </View>
        <Texto style={estilos.descricao}>{detalhe}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    nome:{
        color:"#464646",
        fontSize:35,
        fontWeight:"bold",
        textAlign:"center"
    },
    nomeColecao:{
        fontSize: 20,
        lineHeight:50,
        marginLeft:5,
    },
    descricao:{
        color:"#A3A3A3",
        fontSize:20,
        lineHeight:25,
        textAlign:"center"
    },
    preco:{
        color:"#2A9F85",
        fontWeight: "bold",
        fontSize:30,
        lineHeight:40,
        marginTop:8
    },
    logo:{
        width: 80,    
        height: 50
    },
    colecao:{
        flexDirection: "row",
        paddingVertical: 30
    },
    botao:{
        margin:16,
        backgroundColor:"#2A9F85",
        padding:15,
        borderRadius:60
    },
    textoBotao:{
        textAlign:"center",
        color:"#FFFFFF",
        fontSize:25,
        lineHeight:20,
        fontWeight:"bold"
    }
  
})
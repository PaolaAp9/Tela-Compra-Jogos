import { View, StyleSheet, ScrollView } from "react-native";
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";
import Topo from "./componentes/Topo";

export default function Jogos ({topo, descricao, itens}) {
    return <ScrollView>
        <Topo {...topo}/>
        <View style={estilos.lista}>
            <Detalhes {...descricao}/>
            <Itens {...itens}/>
            
            
        </View>
    </ScrollView>
}
const estilos = StyleSheet.create ({
    lista:{
        paddingHorizontal:16,
        paddingVertical:26
    }
})
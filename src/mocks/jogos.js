import logo from "../../assets/logo.png";
import zelda from "../../assets/zelda.png"
import mario from "../../assets/mario.png"
import mine from "../../assets/mine.png"

const jogos = {
    topo: {
        titulo: "Meus Jogos Retro",
    },
    descricao: {
        nome: "Lista de Jogos",
        logo: logo,
        nomeColecao: "Joguitos",
        detalhe: "Venda e compra de jogos antigos. Fazemos trocas e vendas ... e muito mais. Venha conferir nosso catálago de jogos",
        preco: "R$290,00",
        botao: "Comprar"
    },
    itens: {
        titulo: "Itens para venda",
        lista: [
            {
                nome:"The Legend of Zelda",
                imagem: zelda
            },
            {
                nome:"The Super Mario Bros Z Patreon",
                imagem: mario
            },
            {
                nome:"Minecraft",
                imagem: mine
            }
        ]
    }
}
export default jogos
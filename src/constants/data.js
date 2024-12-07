export const category = [
    {
        id: 1,
        descricao: "Comidas",
        icone: require("../assets/comidasprontas.png")
    },
    {
        id: 2,
        descricao: "Frutas",
        icone: require("../assets/frutas.png")
    },
    {
        id: 3,
        descricao: "Legumes",
        icone: require("../assets/legumes.png")
    },
    {
        id: 4,
        descricao: "Vegetais",
        icone: require("../assets/vegetais.png")
    },
    {
        id: 5,
        descricao: "Bebidas",
        icone: require("../assets/bebidas.png")
    },
    {
        id: 6,
        descricao: "Doces",
        icone: require("../assets/doces.png")
    }
];

export const banners = [
    {
        id: 1,
        descricao: "Horti-Fruti",
        icone: require("../assets/banner1.png")
    },
    {
        id: 2,
        descricao: "Comida Saudável",
        icone: require("../assets/banner2.png")
    }
];

export const feiras = [
    {
        id: 1,
        nome: "Feira Pastelzão",
        endereco: "Alamensa Santos, 954",
        logotipo: require("../assets/feira1.png")
    },
    {
        id: 2,
        nome: "Sabor Natural",
        endereco: "Rua Rui Barbosa, 512",
        logotipo: require("../assets/feira2.png")
    }

    
];

export const orders = [
    {
        id: 1,
        nome: "Feira Pastelzão",
        endereco: "Alameda Santos, 954",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 149,
        logotipo: require("../assets/feira1.png")
    },
    {
        id: 2,
        nome: "Sabor Natural",
        endereco: "Rua Rui Barbosa, 512",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 52,
        logotipo: require("../assets/feira2.png")
    },
    {
        id: 3,
        nome: "Feira Pastelzão",
        endereco: "Alameda Santos, 954",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 71,
        logotipo: require("../assets/feira1.png")
    },
    {
        id: 4,
        nome: "Sabor Natural",
        endereco: "Rua Rui Barbosa, 512",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 29.90,
        logotipo: require("../assets/feira2.png")
    },
    {
        id: 5,
        nome: "Feira Pastelzão",
        endereco: "Alameda Santos, 954",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 149,
        logotipo: require("../assets/feira1.png")
    },
    {
        id: 6,
        nome: "Sabor Natural",
        endereco: "Rua Rui Barbosa, 512",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 48,
        logotipo: require("../assets/feira2.png")
    },
    {
        id: 7,
        nome: "Feira Pastelzão",
        endereco: "Alameda Santos, 954",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 19.90,
        logotipo: require("../assets/feira1.png")
    },
    {
        id: 8,
        nome: "Sabor Natural",
        endereco: "Rua Rui Barbosa, 512",
        status: "Entregue",
        dt_pedido: "10/05/2024",
        vl_total: 112,
        logotipo: require("../assets/feira2.png")
    }
];

export const feira = {
    id: 1,
    nome: "Feira Pastelzao",
    endereco: "Rua Rui Barbosa, 512 - Paraiso - São Paulo - SP",
    logotipo: require("../assets/feira2.png"),
    foto: require("../assets/foto-feira.png"),
    vlEntrega: 5.00,
    isFavorito: true,
    cardapio: [
        {
            idCategoria: 1,
            categoria: "Ofertas",
            itens: [
                {
                    idProduto: 1,
                    nome: "Queijo Canastra",
                    descricao: "Um dos mais famosos queijos artesanais do Brasil, originário da Serra da Canastra (MG). É um queijo de leite cru, com sabor suave e levemente ácido quando fresco, que se intensifica com o tempo de maturação.",
                    valor: 30.00,
                    foto: require("../assets/produto-queijocanastra.png")
                },
                {
                    idProduto: 2,
                    nome: "Caldo de Cana",
                    descricao: "Caldo de Cana 300ml trincando de gelado",
                    valor: 8.00,
                    foto: require("../assets/produto-caldodecana.png")
                }
            ]
        },
        {
            idCategoria: 2,
            categoria: "Mais Pedidos",
            itens: [
                {
                    idProduto: 3,
                    nome: "Pastel de Queijo Minas Frescal com Tomate",
                    descricao: "Esse pastel traz a leveza do queijo minas frescal, combinado com pedaços de tomate fresco. O resultado é um recheio cremoso e suave, com um toque refrescante de acidez.",
                    valor: 30.00,
                    foto: require("../assets/produto-pastel.png")
                },
                {
                    idProduto: 4,
                    nome: "Caldo de Cana Litro",
                    descricao: "Caldo de Cana 1L trincando de gelado",
                    valor: 16.00,
                    foto: require("../assets/produto-caldodecana.png")
                }
            ]
        }
    ]
};

export const order = {
    id: 1,
    nome: "Sabor Natural",
    endereco: "Rua Rui Barbosa, 512",
    status: "Entregue",
    dt_pedido: "10/05/2024",
    vl_total: 76.00,
    logotipo: require("../assets/feira2.png"),
    itens: [
        {
            idItem: 1,
            idProduto: 1,
            nome: "Pastel de Queijo Minas Frescal com Tomate",
            descricao: "Esse pastel traz a leveza do queijo minas frescal, combinado com pedaços de tomate fresco.",
            foto: require("../assets/produto-pastel.png"),
            qtd: 2,
            vlUnitario: 30.00,
            vlTotal: 60.00
        },
        {
            idItem: 2,
            idProduto: 2,
            nome: "Caldo de Cana Litro",
            descricao: "Caldo de Cana 1L trincando de gelado",
            foto: require("../assets/produto-caldodecana.png"),
            qtd: 1,
            vlUnitario: 16.00,
            vlTotal: 16.00
        }
    ]
};
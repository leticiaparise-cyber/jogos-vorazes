// Banco de dados dos 12 Distritos
const distritos = [
    {
        numero: 1,
        nome: "Distrito 1",
        especialidade: "Artigos de Luxo",
        descricao: "Um dos distritos mais ricos de Panem, responsável por fabricar joias e itens de luxo para a Capital. Seus jovens treinam desde cedo como 'Carreiristas'.",
        tributos: "Marvel, Glimmer, Cashmere, Gloss"
    },
    {
        numero: 2,
        nome: "Distrito 2",
        especialidade: "Alvenaria e Defesa",
        descricao: "Famoso por suas pedreiras, mas também é o centro de treinamento dos Pacificadores e fabricação de armamentos da Capital.",
        tributos: "Cato, Clove, Brutus, Enobaria"
    },
    {
        numero: 3,
        nome: "Distrito 3",
        especialidade: "Tecnologia e Eletrônicos",
        descricao: "Produz televisores, computadores e explosivos. Seus tributos costumam usar a inteligência para sobreviver na arena.",
        tributos: "Beetee, Wiress"
    },
    {
        numero: 4,
        nome: "Distrito 4",
        especialidade: "Pesca",
        descricao: "Localizado na costa, seus habitantes têm grande habilidade com redes, tridentes e natação. Também faz parte do grupo dos Carreiristas.",
        tributos: "Finnick Odair, Mags, Annie Cresta"
    },
    {
        numero: 5,
        nome: "Distrito 5",
        especialidade: "Energia",
        descricao: "Responsável por gerar eletricidade para toda a nação por meio de usinas hidrelétricas e solares.",
        tributos: "Cara de Raposa (Foxface)"
    },
    {
        numero: 6,
        nome: "Distrito 6",
        especialidade: "Transporte",
        descricao: "Constrói trens de alta velocidade, aerodeslizadores e toda a malha logística de Panem.",
        tributos: "Os Morfinômanos"
    },
    {
        numero: 7,
        nome: "Distrito 7",
        especialidade: "Madeira e Papel",
        descricao: "Coberto por densas florestas, seus moradores crescem manuseando machados e serras com maestria.",
        tributos: "Johanna Mason, Blight"
    },
    {
        numero: 8,
        nome: "Distrito 8",
        especialidade: "Indústria Têxtil",
        descricao: "Fabrica roupas e uniformes, incluindo os trajes dos Pacificadores. Foi um dos primeiros distritos a se rebelar.",
        tributos: "Bonnie, Twill, Woof, Cecelia"
    },
    {
        numero: 9,
        nome: "Distrito 9",
        especialidade: "Grãos",
        descricao: "Vasto distrito agrícola responsável pela produção de cereais e farinha para o abastecimento de Panem.",
        tributos: "Tributos do 74º e 75º Jogos"
    },
    {
        numero: 10,
        nome: "Distrito 10",
        especialidade: "Pecuária",
        descricao: "Fornece carne e laticínios para a Capital através de grandes criações de gado.",
        tributos: "Dalton"
    },
    {
        numero: 11,
        nome: "Distrito 11",
        especialidade: "Agricultura",
        descricao: "Extenso distrito de pomares e plantações. Apesar de produzir grande parte dos alimentos, seus habitantes passam fome devido ao rigor dos Pacificadores.",
        tributos: "Rue, Thresh, Chaff, Seeder"
    },
    {
        numero: 12,
        nome: "Distrito 12",
        especialidade: "Mineração de Carvão",
        descricao: "O menor e mais pobre dos distritos, localizado nos Montes Apalaches. Lar do Tordo que liderou a rebelião.",
        tributos: "Katniss Everdeen, Peeta Mellark, Haymitch Abernathy"
    }
];

// Elementos do DOM
const listaDistritosEl = document.getElementById("lista-distritos");
const cardDetalheEl = document.getElementById("info-distrito");
const tituloEl = document.getElementById("titulo-distrito");
const especialidadeEl = document.getElementById("especialidade-distrito");
const descricaoEl = document.getElementById("descricao-distrito");
const tributosEl = document.getElementById("tributos-distrito");

// Gerar botões dos distritos dinamicamente
distritos.forEach((distrito) => {
    const botao = document.createElement("button");
    botao.classList.add("distrito-btn");
    botao.textContent = distrito.nome;

    botao.addEventListener("click", () => {
        // Remove destaque dos outros botões
        document.querySelectorAll(".distrito-btn").forEach(btn => btn.classList.remove("ativo"));
        botao.classList.add("ativo");

        // Preenche e exibe o card de detalhes
        tituloEl.textContent = distrito.nome;
        especialidadeEl.textContent = distrito.especialidade;
        descricaoEl.textContent = distrito.descricao;
        tributosEl.textContent = distrito.tributos;
        
        cardDetalheEl.classList.remove("oculto");
    });

    listaDistritosEl.appendChild(botao);
});

// Lógica do Simulador da Colheita
const btnSortear = document.getElementById("btn-sortear");
const inputNome = document.getElementById("nome-usuario");
const resultadoColheita = document.getElementById("resultado-colheita");

btnSortear.addEventListener("click", () => {
    const nome = inputNome.value.trim();

    if (nome === "") {
        resultadoColheita.textContent = "Por favor, digite um nome para o sorteio.";
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * distritos.length);
    const distritoSorteado = distritos[indiceAleatorio];

    resultadoColheita.innerHTML = `Atenção! <u>${nome}</u> foi sorteado(a) como tributo do <strong>${distritoSorteado.nome}</strong> (${distritoSorteado.especialidade})! Que a sorte esteja sempre a seu favor.`;
});
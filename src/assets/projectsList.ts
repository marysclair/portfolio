import ProjectType from "./ProjectType";

const projectList = [
  {
    id: "cddd5ca2-f3d6-4def-8189-fa5e5f4443af",
    title: "Frontend Mentor - Todo app solution",
    description:
      "A minha solução para o desafio Todo app do Frontend Mentor. Esse desafio foi escolhido para praticar desenvolvimento Mobile, utilizando um projeto Expo + React Native + Native Wind.",
    link: "https://github.com/marysclair/FrontendMentor-AppToDo",
    imagePath: "/imagesProject/frontendmentor-todoapp.jpg",
    tags: ["Expo", "React Native", "Native Wind", "Typescript"],
    date: "04/04/2024",
  },
  {
    id: "6d127f63-5d20-4fb2-a553-54fbec1e1ca5",
    title: "Frontend Mentor - Bookmark landing page",
    description:
      "A minha solução para o desafio Bookmark landing page do Frontend Mentor. Esse desafio foi escolhido para praticar as funcionalidades do framework Astro, utilizando um projeto Astro + React + Tailwind.",
    link: "https://github.com/marysclair/FrontendMentor-BookmarkLandingPage",
    imagePath: "/imagesProject/frontendmentor-bookmarklandingpage.png",
    tags: ["Astro", "React", "Tailwind CSS"],
    date: "10/05/2024",
  },
  {
    id: "0b6cd7e4-f1dd-47f4-9e40-fed4772c245c",
    title: "Adoção de Animais - Mobile",
    description:
      "Frontend Mobile desenvolvido para consumir a API de adoção de animais, feito com Expo + React Native + Native Wind.",
    link: "https://github.com/marysclair/AdocaoDeAnimais-Mobile",

    tags: ["Expo", "React Native", "Native Wind", "Typescript"],
    date: "10/05/2024",
  },
  {
    id: "b375f55b-9fb8-498a-9c70-c4c8a36f29ea",
    title: "Adoção de Animais - API",
    description:
      "API desenvolvida para realizar adoções de animais, feita em Java com Spring, JPA e Hibernate. A persistência dos dados é feita no PostgreSQL.",
    link: "https://github.com/marysclair/AdocaoDeAnimais-API",
    tags: ["Java", "Spring", "PostgreSQL"],
    date: "06/04/2024",
  },
  {
    id: "9ca73e98-3003-4384-a53d-13937c9ce59e",
    title: "To do App - API",
    description:
      "API desenvolvida para persistir os dados relacionadas às tarefas, que é consumido pelo frontend, feita em Java com Spring, JPA e Hibernate. A persistência dos dados é feita no PostgreSQL.",
    link: "https://github.com/marysclair/ToDoApp-API",
    tags: ["Java", "Spring", "PostgreSQL"],
    date: "03/04/2024",
  },
  {
    id: "b04197b4-d44c-4b8e-8fa2-608675cc80f4",
    title: "Adoção de Animais - Backend",
    description:
      "Atividade qualitativa sobre JDBC desenvolvida para a disciplina DAC 2024.1, com o tema 10: Adoção de Animais.",
    link: "https://github.com/marysclair/ToDoApp-API",
    tags: ["Java", "JDBC", "PostgreSQL"],
    date: "20/03/2024",
  },
  {
    id: "437fc162-295b-455f-af36-20f116113d0c",
    title: "Atividade Colaborativa: AutoPeças",
    description:
      "Atividade colaborativa da disciplina DAC 2024.1 com o tema AutoPeças, consistindo numa aplicação web feita com JDBC e JSP.",
    link: "https://github.com/marysclair/ToDoApp-API",
    tags: ["Java", "JDBC", "JSP", "PostgreSQL"],
    date: "20/03/2024",
  },
  {
    id: "00371991-4763-400a-9377-ac24fe6897a8",
    title: "Sistema de ocorrências policiais - Frontend",
    description:
      "O projeto foi desenvolvido com o objetivo de criar uma aplicação para persistir, listar, atualizar e excluir dados de ocorrências policiais, utilizando MongoDB Atlas e Mongo Charts Além disso, utiliza o aura em conjunto com o neo4j como banco de grafos para manter os relacionamentos de horários das ocorrências e seus tipos. ",
    link: "https://github.com/marysclair/projetos-BANCO-II",
    imagePath: "/imagesProject/frontendmentor-crimetalk.png",
    tags: ["Nextjs", "Tailwind CSS", "React", "neo4j", "MongoDB"],
    date: "14/12/2023",
  },
  {
    id: "0ae788d0-7110-45e4-aa2a-4d53b2c0d471",
    title: "Atividade 1 de PW1 2023.2",
    description:
      "Essa é uma aplicação para gerenciar uma lista de tecnologias de estudos por usuário. Será permitida a criação de um usuário, bem como fazer o CRUD ddas tecnologias. A API foi feita com Express, Typescript, Node.js e Prisma, fazendo a persistência dos dados no SQLite.",
    link: "https://github.com/marysclair/Atividade-1-PW1",
    tags: ["Express", "Typescript", "Node.js", "Prisma", "SQLite"],
    date: "17/10/2023",
  },
  {
    id: "2b0c8e1a-d1f7-46bf-b3cf-3ef467c40147",
    title: "Frontend Mentor - Interactive comments section",
    description:
      "A minha solução para o desafio Interactive comments section do Frontend Mentor. Essa foi minha terceira vez usando React, mas o primeiro projeto focado principalmente em suas funcionalidades, feito com Next.js, React, Node.js, Typescript e Tailwind CSS.",
    link: "https://github.com/marysclair/Frontend-Mentor---Interactive-comments-section-solution",
    imagePath: "/imagesProject/frontendmentor-interactivecommentssection.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Typescript",
      "Node.js",
      "Tailwind CSS",
    ],
    date: "07/08/2023",
  },
  {
    id: "f6ec3733-a34f-4c81-8e57-89f4f7aec3fe",
    title: "Frontend Mentor - Intro section with dropdown navigation solution",
    description:
      "A minha solução para o desafio Intro section with dropdown navigation solution do Frontend Mentor. Foi escolhido esse desafio principalmente para testar o framework Bootstrap juntamente ao SASS para estilização.",
    link: "https://github.com/marysclair/Frontend-Mentor-Intro-section-with-dropdown-navigation",
    imagePath: "/imagesProject/frontendmentor-introsection.png",
    tags: ["Html", "Bootstrap 5", "SCSS"],
    date: "01/04/2023",
  },
  {
    id: "be5528ab-55cf-473d-a042-d0d17e1b851a",
    title: "Sistema de funcionários em C",
    description:
      "Sistema de funcionário utilizando o conceito de estrutura de dados estática.",
    link: "https://github.com/marysclair/Frontend-Mentor-Intro-section-with-dropdown-navigation",
    tags: ["C"],
    date: "20/11/2022",
  },
  {
    id: "8ae21cd1-d34e-448c-ade0-32bd3b2a8106",
    title: "LeafBuddy",
    description:
      "Sendo mãe/pai de plantas, o catálogo de plantas será um sistema completamente útil para quem precisa gerenciar suas plantas. O sistema conta com um CRUD de 9 categorias diferentes de plantas, além de funcionalidades para auxiliar o cuidado das suas plantas, registrando um histórico da rega e da adubação, além de um lembrete da próxima rega. Feito em Java, explora todos os conceitos de Programação Orientada a Objetos de forma aprofundada.",
    link: "https://github.com/marysclair/Projeto-Trilha-LeafBuddy",
    tags: ["Java"],
    date: "30/06/2023",
  },
  {
    id: "bec8ba58-5bc4-4cef-ab4c-d9ceadf5d4ea",
    title: "Website Análise e Desenvolvimento de Sistemas",
    description:
      "Projeto final da disciplina GCM 2023.1, que consiste na criação de um site para o curso de análise e desenvolvimento de sistemas do IFPB-Campus Cajazeiras.",
    link: "https://g4ma.github.io/",
    imagePath: "/imagesProject/frontendmentor-websiteads.png",
    tags: ["Html", "CSS", "Javascript"],
    date: "12/02/2023",
  },
  {
    id: "b5d9670d-5d54-4cec-a58d-2f5acc9df531",
    title: "Gerador de fotos de gatos",
    description:
      "Gerador de fotos aleatórias de gatos a cada vez que clicar no botão. Projeto feito para praticar o consumo de uma API usando o fetch.",
    link: "https://codesandbox.io/p/sandbox/gatinhos-fofinhos-frzx6e",
    imagePath: "/imagesProject/frontendmentor-geradorfotogato.png",
    tags: ["Html", "CSS", "Javascript", "Node.js"],
    date: "15/02/2023",
  },
  {
    id: "59ae49bf-5d4a-4529-8279-64e91efec8ed",
    title: "Lista de compras",
    description:
      "Uma lista de compras que utiliza LocalStorage para armazenar os itens da lista.",
    link: "https://koiru3.csb.app",
    imagePath: "/imagesProject/frontendmentor-listadecompra.png",
    tags: ["Html", "CSS", "Javascript"],
    date: "11/02/2023",
  },
  {
    id: "ed9208c9-2596-48d0-8a86-f8fabaec17b0",
    title: "Color Flipper",
    description: "Um gerador de cores em Hexadecimal.",
    link: "https://github.com/marysclair/color-flipper",

    tags: ["Html", "CSS", "Javascript"],
    date: "31/10/2022",
  },
  {
    id: "f36e1cef-793a-4eba-9d5b-a05a2a9af9c4",
    title: "Lista de tarefas",
    description: "Lista de tarefas feita para praticar eventos em Javascript.",
    link: "https://github.com/marysclair/lista-de-tarefas",

    tags: ["Html", "CSS", "Javascript"],
    date: "31/10/2022",
  },
  {
    id: "885a8a72-7a34-4ece-a9f5-6d78c1510045",
    title: "Frontend Mentor - Four card feature section",
    description:
      "A minha solução para o desafio Four card feature section do Frontend Mentor.",
    link: "https://github.com/marysclair/Frontend-Mentor-Four-card-feature-section",

    tags: ["Html", "CSS"],
    date: "20/10/2022",
  },
  {
    id: "61b8e364-d0f8-49a1-985b-d5fa9723e625",
    title: "Frontend Mentor - Product preview card component",
    description:
      "A minha solução para o desafio Product preview card component do Frontend Mentor.",
    link: "https://github.com/marysclair/Frontend-Mentor-Product-preview-card-component",

    tags: ["Html", "CSS"],
    date: "19/10/2022",
  },
  {
    id: "a4af1d8d-eb64-4df0-857d-9771ec1790bc",
    title: "Sign In/Sign Up",
    description:
      "Página responsiva de Sign In e Sign Up feita unicamente para fins de estudo e prática (com formulário de Sign Up funcional).",
    link: "https://github.com/marysclair/Sign-In-Sign-Up",

    tags: ["Html", "CSS"],
    date: "20/10/2022",
  },
  {
    id: "28bc2cbe-f62b-440e-93d2-22e63c328736",
    title: "Adote o seu dono",
    description:
      "Website de adoção de animais de estimação, feito para a disciplina Linguagem de marcação 2022.1.",
    link: "https://zd6uzy.csb.app/",
    tags: ["Html", "CSS"],
    date: "02/09/2022",
  },
  {
    id: "ac2590d5-7fea-42b5-ba85-553aa73101fa",
    title: "Landing Page (Natura)",
    description:
      "Uma landing page feita inspirada na marca da Natura unicamente para fins de estudo.",
    link: "https://zd6uzy.csb.app/",
    tags: ["Html", "CSS"],
    date: "25/09/2022",
  },
  {
    id: "6eb9ae26-7805-4bed-92e7-0c4383797af9",
    title: "Menu digital",
    description:
      "Um menu (cardápio) digital para restaurantes, versão desktop e mobile.",
    link: "https://zd6uzy.csb.app/",
    tags: ["Html", "CSS"],
    date: "11/10/2022",
  },
  {
    id: "31f6bee9-d3d8-4675-afa0-57525fc16b68",
    title: "Notebook de previsão de vendas",
    description:
      "Projeto em python para prever as vendas que vamos ter em determinado período com base nos gastos em anúncios nas 3 grandes redes que a empresa Hashtag investe: TV, Jornal e Rádio.",
    link: "https://zd6uzy.csb.app/",
    tags: ["python"],
    date: "08/10/2022",
  },
  {
    id: "f5e7e572-d5ff-4c2a-a051-c66891bfc6ab",
    title: "Notebook da análise de álbuns",
    description:
      "Projeto feito para a cadeira de Probalidade e Estatística 2022.2. Através do python e suas bibliotecas, é realizado uma análise acerca da duração de álbuns mais comercializados nos últimos 30 anos.",
    link: "https://zd6uzy.csb.app/",
    tags: ["python"],
    date: "09/11/2022",
  },
  {
    id: "43b8860e-f4bc-4d96-be87-145279e8e6ea",
    title: "Sistema de Mercadinho em C++",
    description:
      "Projeito feito para a disciplina de Algoritmos e Lógica de Programação durante o ensino médio. ",
    link: "https://github.com/marysclair/Sistema-Mercadinho-em-C-",
    tags: ["c++"],
    date: "29/11/2019",
  },
  {
    id: "d4f66bda-b5fc-4f51-8820-da8072c9ff5d",
    title:
      "EstacionaAqui: Uma aplicação que auxilia a localização de vagas de estacionamento",
    description:
      "Projeto para disciplina de Programação para Web 2023.2. Este projeto tem como principal objetivo resolver o desafio da falta de divulgação e conhecimento das vagas disponíveis em estacionamentos, oferecendo um sistema no qual os proprietários de estacionamentos podem registrar todas as vagas disponíveis. Qualquer pessoa registrada no sistema teria a capacidade de fazer uma reserva de vaga, desde que ela estivesse disponível. Totalizando 21 rotas disponíveis.",
    link: "https://github.com/marysclair/Sistema-Mercadinho-em-C-",
    tags: ["Typescript", "Express", "Prisma", "Docker", "PostgreSQL", "Redis"],
    date: "15/12/2023",
  },
  {
    id: "50d66508-8651-4db9-b624-7ef88df07150",
    title: "ATIVIDADE - Regressão Linear Múltipla",
    description:
      "Atividade proposta pelo curso de Ciência de Dados 2023 em python ministrado pelo IFPB - Cajazeiras. Esse notebook contém um modelo de regressão linear múltipla para a base de dados: Data for Admission in the University. Também é testado o desempenho do modelo gerado tanto no conjunto de treinamento quando no conjunto de testes, computando o erro médio quadrado em ambas as situações.",
    link: "https://colab.research.google.com/drive/1ZtWQc3kGaorkpR3IcqP3hUZmja0P2mfD?usp=sharing",
    tags: ["python"],
    date: "06/11/2023",
  },
  {
    id: "7351983b-1227-4c10-bc37-3a4c0d85e773",
    title: "ATIVIDADE - Regressão Linear Simples",
    description:
      "Atividade proposta pelo curso de Ciência de Dados 2023 em python ministrado pelo IFPB - Cajazeiras. Esse notebook contém um modelo de regressão linear simples para a base de dados: Dataset - Simple Linear Regression. Também tem um gráfico de dispersão dos dados antes da criação do modelo e outros dois depois que o modelo foi gerado, um com os dados de teste e outro com os de validação.",
    link: "https://colab.research.google.com/drive/1gp301jcUWm8Ul98VdZPtYzzLCIvyok-F?usp=sharing",
    tags: ["python"],
    date: "06/11/2023",
  },
];

export default projectList.sort((a: ProjectType, b: ProjectType) => {
  const dataA = new Date(a.date.split("/").reverse().join("/"));
  const dataB = new Date(b.date.split("/").reverse().join("/"));

  if (dataA > dataB) {
    return -1;
  } else if (dataA < dataB) {
    return 1;
  } else {
    return 0;
  }
});

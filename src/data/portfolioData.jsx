import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'

import { BiLogoJava, BiLogoJavascript, BiLogoTypescript, 
        BiLogoFirebase, BiLogoNodejs, BiLogoReact, BiLogoCss3, 
        BiLogoCPlusPlus, BiLogoHtml5, BiLogoAndroid} from 'react-icons/bi'
import {GrSwift} from 'react-icons/gr'
import {BsFiletypeScss, BsFiletypeXml} from 'react-icons/bs'
import {SiCss3, SiIos, SiJavascript, SiMaterialdesign, SiSqlite} from 'react-icons/si'
import {TbBrandReactNative, TbSql} from 'react-icons/tb'
import {DiNodejs} from 'react-icons/di'

const portfolioData = [
    {
      id: 1,
      image: IMG1,
      tecs: [<BiLogoAndroid/>, <BiLogoJava/>, <BsFiletypeXml/>, <SiMaterialdesign/>, <BiLogoFirebase/>],
      title: "Thin Secret Android",
      resume: "Nessa versão produzida em Android, o ThinSecret é uma versão réplica do aplicativo FatSecret, contador de nutrientes e calorias. Seu objetivo é tornar o cálculo de IDR mais flexível de acordo com as necessidades do usuário, sem tendenciar o código para a perda de peso. Com uma gama de 45 opções de dieta para alcançar seus objetivos, o usuário tem uma ampla cama de escolhas.",
      github: "https://github.com/lamenkazu/ThinSecret",
      demo: "#"
    },
    {
      id: 2,
      image: IMG2,
      tecs: [<SiIos/>, <GrSwift/>, <BiLogoFirebase/>],
      title: "Habit",
      resume: "Hab",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 3,
      image: IMG2,
      tecs: [<SiIos/>, <GrSwift/>, <BiLogoFirebase/>],
      title: "Thin Secret iOS",
      resume: "Em sua versão iOS, o ThinSecret foi um re-trabalho do ThinSecret para Android. Criado no padrão arquitetural MVVM, ele utiliza o mesmo banco de dados no Firebase, porém o design foi refeito para se adequar melhor ao iPhone. O trabalho é menos desenvolvido, por falta de tempo com o material necessário, porém segue os mesmos padrões de requisitos e regras de negócio foram implementados.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 4,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Eu Quero Café!",
      resume: "Aplicação e desenvolvimento de conceitos avançados em estruturas de dados, como Grafos, Listas Encadeadas, Hash, Métodos de Ordenação, dentre outros, para protótipo de rede social funcional no terminal. Apesar da falta de conectividade com a Internet e uma interface adequada, as funcionalidades de uma rede social foram implementadas através de estruturas de dadas criadas por mim mesmo, como trabalho de entrega da disciplina de AEDS. Gosto de mostrar esse projeto, pois foi um marco no meu aprendizado aprofundado de estruturas de dados, como construí-las e operar sobre elas.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 5,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Habit Plus",
      resume: "Aplicação e desenvolvimento de conceitos avançados em estruturas de dados, como Grafos, Listas Encadeadas, Hash, Métodos de Ordenação, dentre outros, para protótipo de rede social funcional no terminal. Apesar da falta de conectividade com a Internet e uma interface adequada, as funcionalidades de uma rede social foram implementadas através de estruturas de dadas criadas por mim mesmo, como trabalho de entrega da disciplina de AEDS. Gosto de mostrar esse projeto, pois foi um marco no meu aprendizado aprofundado de estruturas de dados, como construí-las e operar sobre elas.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 6,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Humor",
      resume: "Aplicação e desenvolv.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 7,
      image: IMG5,
      tecs: [<SiJavascript/>, <DiNodejs className='big'/>, <SiCss3/>, <TbSql/>, <SiSqlite/>],
      title: "AgendApp 1.0",
      resume: "Versão protótipo de um aplicativo de agendamentos. É um projeto simples que visava compreender fundamentos básicos de front e backend, lidando com interações com usuários e operações no banco de dados de forma simples. Front criado com template engine EJS, backend em NodeJs, utilizando Express.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 8,
      image: IMG3,
      tecs: [<BiLogoReact/>, <BiLogoTypescript/>, <BiLogoFirebase/>, <DiNodejs className='big'/>, ],
      title: "AgendApp 2.0",
      resume: "AgendApp 2.0 é basicamente a mesma implementação simples da versão 1.0, o que muda nessa versão são as tecnologias utilizadas. Implementado em padrão arquitetural MVC, a nova versão trás o React utilizando Typescript, junto de um banco de dados noSQL Firebase e uma estilização SCSS. Do mesmo modo que a primeira versão foi uma versão de estudos, essa aplicação serviu pra aplicar os conceitos das novas tecnologias que eu aprendi.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 9,
      image: IMG6,
      tecs: [<TbBrandReactNative/>, <TbSql/>, <BiLogoTypescript/>],
      title: "AgendApp 3.0",
      resume: "A versão 3.0 do AgendApp, ao invés de trazer novas tecnologias, trás novos conhecimentos de sistemas como um todo. Implementada em MVC e EJS como na primeira versão, utilizando MySQL em um servidor NodeJs. O que mudou dessa vez foi excepcionalmente a qualidade do código, aplicação de conceitos de Engenharia de Software, implementação avançada de um banco de dados relacional bem planejado, uma API própria com alto padrão de regras de negócio. Uma versão mais complexa e bem feita das versões anteriores, porém com as mesmas funções básicas.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 10,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "CaraLivro, Rede Social em C",
      resume: "Aplicação e desenvolvimento de conceitos avançados em estruturas de dados, como Grafos, Listas Encadeadas, Hash, Métodos de Ordenação, dentre outros, para protótipo de rede social funcional no terminal. Apesar da falta de conectividade com a Internet e uma interface adequada, as funcionalidades de uma rede social foram implementadas através de estruturas de dadas criadas por mim mesmo, como trabalho de entrega da disciplina de AEDS. Gosto de mostrar esse projeto, pois foi um marco no meu aprendizado aprofundado de estruturas de dados, como construí-las e operar sobre elas.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 11,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Lembrol - Reminder App",
      resume: ".",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 12,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Portfólio Pessoal",
      resume: ".",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
]

export default portfolioData
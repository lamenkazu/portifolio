import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'

import { BiLogoJava, BiLogoJavascript, BiLogoTypescript, 
        BiLogoFirebase, BiLogoNodejs, BiLogoReact, BiLogoCss3, 
        BiLogoCPlusPlus, BiLogoHtml5, BiLogoAndroid} from 'react-icons/bi'
import {GrSwift, GrMysql} from 'react-icons/gr'
import {BsFiletypeScss, BsFiletypeXml} from 'react-icons/bs'
import {SiCss3, SiIos, SiJavascript, SiMaterialdesign, SiSqlite, SiVite, SiGithubpages} from 'react-icons/si'
import {TbBrandReactNative, TbSql, TbBrandCoinbase} from 'react-icons/tb'
import {DiNodejs} from 'react-icons/di'
import {PiGraphFill, PiTreeStructure} from 'react-icons/pi'

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
      title: "Habits",
      resume: "Hab",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 3,
      image: IMG4,
      tecs: [<BiLogoReact/>, <SiVite/>, <SiCss3/>, <SiGithubpages/>],
      title: "Portfólio Pessoal",
      resume: "É claro que, esse próprio site não iria passar batido. Construído em React + Vite, estilizado em CSS3 e publicado pelo GithubPages, me esforcei nos mínimos detalhes, ao mesmo tempo em que construí um código fácil de ser lido, claro e com boas práticas de programação. O Código é aberto, e pode ser livremente utilizado por quem quiser replicar.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 4,
      image: IMG2,
      tecs: [<SiIos/>, <GrSwift/>, <BiLogoFirebase/>],
      title: "Thin Secret iOS",
      resume: "Em sua versão iOS, o ThinSecret foi um re-trabalho do ThinSecret para Android. Criado no padrão arquitetural MVVM, ele utiliza o mesmo banco de dados no Firebase, porém o design foi refeito para se adequar melhor ao iPhone. O trabalho é menos desenvolvido, por falta de tempo com o material necessário, porém segue os mesmos padrões de requisitos e regras de negócio foram implementados.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 5,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Lembrol - Reminder App",
      resume: "O Lembrol é uma aplicação mobile com objetivo de adicionar novos lembretes, informando data do lembrete. Você pode criar um novo lembrete e organiza-lo em uma lista reativa, e remover seus itens de forma intuitiva. Lembretes de uma mesma data são agrupados de forma eficiente, além das datas serem exibidas em ordem cronológica, independente da ordem de inserção. O foco dessa aplicação foi a qualidade de código, onde ele é 100% testado, claro, legível e clean. Essa aplicação no entanto, não conta atualmente com uma persistência de dados, que deve ser futuramente implementada. A aplicação foi feita no Android Studio em Java, utilizando o Android SDK e JetpackCompose, além da biblioteca do Google MaterialDesign.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 6,
      image: IMG4,
      tecs: [<TbBrandCoinbase/>, <PiGraphFill/>, <PiTreeStructure/>],
      title: "Rede Social CaraLivro",
      resume: "Aplicação e desenvolvimento de conceitos avançados em estruturas de dados, como Grafos, Listas Encadeadas, Hash, Métodos de Ordenação, dentre outros, para protótipo de rede social funcional no terminal. Apesar da falta de conectividade com a Internet e uma interface adequada, as funcionalidades de uma rede social foram implementadas através de estruturas de dadas criadas por mim mesmo, como trabalho de entrega da disciplina de AEDS. Gosto de mostrar esse projeto, pois foi um marco no meu aprendizado aprofundado de estruturas de dados, como construí-las e operar sobre elas.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 7,
      image: IMG5,
      tecs: [<SiJavascript/>, <DiNodejs/>, <SiCss3/>, <TbSql/>, <SiSqlite/>],
      title: "AgendApp 1.0",
      resume: "Versão protótipo de um aplicativo de agendamentos. É um projeto simples que visava compreender fundamentos básicos de front e backend, lidando com interações com usuários e operações no banco de dados de forma simples,  implementado em padrão arquitetural MVC. Interface Gráfica criada com template engine EJS e CSS, servidor NodeJs com Express. Projeto 100% funcional, porém sem conectividade com a internet, funcionando apenas localmente.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 8,
      image: IMG3,
      tecs: [<BiLogoReact/>, <BiLogoTypescript/>, <BiLogoFirebase/>, <DiNodejs/>, ],
      title: "AgendApp 2.0",
      resume: "AgendApp 2.0 do mesmo modo que a primeira versão foi uma versão de estudos, essa aplicação serviu pra aplicar os conceitos das novas tecnologias que eu aprendi. Implementada de uma forma simples assim como da versão 1.0, a nova versão trás o React utilizando Typescript, junto de uma uma estilização SCSS e um banco de dados noSQL Firebase, garantindo conectividade com a internet, funcionando de forma remota. Esse projeto possui 1 cliente ativo, que em geral não acessa pela plataforma React e sim a versão 4.0 que é Nativa Android, o qual o código é privado, porém compartilham o mesmo banco de dados e é utilizado em casos de acesso pelo computador de um escritório local.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 9,
      image: IMG6,
      tecs: [<SiJavascript/>, <TbSql/>, <SiCss3/>, <GrMysql/>],
      title: "AgendApp 3.0",
      resume: "A versão 3.0 do AgendApp, ao invés de trazer novas tecnologias, trás novos conhecimentos de sistemas como um todo. Implementada em MVC e EJS como na primeira versão, utilizando MySQL em um servidor NodeJs. O que mudou dessa vez foi excepcionalmente a qualidade do código, aplicação de conceitos de Engenharia de Software, implementação avançada de um banco de dados relacional bem planejado, uma API própria com alto padrão de regras de negócio. Uma versão mais complexa e bem feita das versões anteriores, porém com as mesmas funções básicas. Apesar de melhor codificada, essa versão não possui uma versão remota, funcionando apenas localmente. A versão 4.0, que possui um código privado, conta com a implementação complexa dessa versão, com a atividade online em um aplicativo Android Nativo.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 10,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Eu Quero Café!",
      resume: "CAfé café café",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 11,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Habit Plus",
      resume: ". . . .",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 12,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Humor",
      resume: "Aplicação e desenvolv.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
]

export default portfolioData
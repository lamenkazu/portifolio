import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio 5.jpg'
import IMG6 from '../assets/portifolio5.jpg'
import IMG7 from '../assets/portifolio6.jpg'
import IMG8 from '../assets/portifolio7.jpg'
import IMG9 from '../assets/portifolio8.jpg'
import IMG10 from '../assets/portfolio6.jpg'
import IMG11 from '../assets/portifolio9.jpg'
import IMG12 from '../assets/portifolio10.jpg'

import { BiLogoJava, BiLogoJavascript, BiLogoTypescript, 
        BiLogoFirebase, BiLogoNodejs, BiLogoReact, BiLogoCss3, 
        BiLogoCPlusPlus, BiLogoHtml5, BiLogoAndroid} from 'react-icons/bi'
import {GrSwift, GrMysql} from 'react-icons/gr'
import {BsFiletypeScss, BsFiletypeXml} from 'react-icons/bs'
import {SiCss3, SiXcode, SiTailwindcss, SiPrisma, SiXampp, SiIos, SiJavascript, SiMaterialdesign, SiSqlite, SiVite, SiGithubpages, SiKotlin} from 'react-icons/si'
import {TbBrandReactNative, TbSql, TbBrandCoinbase} from 'react-icons/tb'
import {DiNodejs, DiSass} from 'react-icons/di'
import {MdHttp} from 'react-icons/md'
import {PiGraphFill, PiTreeStructure} from 'react-icons/pi'

const portfolioData = [
      {
      id: 3,
      image: IMG5,
      tecs: [<BiLogoReact/>, <SiVite/>, <SiCss3/>, <SiGithubpages/>],
      title: "Portfólio Pessoal - React",
      resume: 
            `Esse próprio site que você está navegando e todas as suas interações também foram feitas por mim. 
            Construído em React + Vite, estilizado em CSS3 e publicado pelo GithubPages, me esforcei nos mínimos detalhes, 
            ao mesmo tempo em que construí um código fácil de ser lido, claro e com boas práticas de programação. 
            O Código é aberto, e pode ser livremente utilizado por quem quiser replicar uma versão similar.`,

      github: "https://github.com/lamenkazu/portifolio",
      demo: "https://github.com/jemaf"
    },
    {
      id: 2,
      image: IMG8,
      tecs: [<BiLogoTypescript/>, <TbBrandReactNative/>, <SiTailwindcss/>, <SiSqlite/>, <SiPrisma/>],
      title: "Habits - React Native",
      resume: 
            `Habits é um aplicativo de controle de metas diárias. Você pode criar um hábito para os dias da semana que você decidir e
            acompanhar seu progresso diário com as metas definidas. Tanto o servidor quanto a interface do usuário foram desenvolvidas
            em Typescrypt, sendo a aplicação mobile desenvolvida em React Native utilizando TailwindCSS e a plataforma Expo.
            O servidor, por sua vez, foi desenvolvido com Node utilizando Fastify, Prisma ORM em SQLite`,
      github: "https://github.com/lamenkazu/Habit-Test",
      demo: "https://github.com/jemaf"
    },
    {
      id: 13,
      image: IMG7,
      tecs: [<BiLogoAndroid/>, <SiKotlin/>, <SiMaterialdesign/>],
      title: "Lembrol - Kotlin App",
      resume: 
            `O Lembrol é uma aplicação mobile com objetivo de adicionar novos lembretes, informando data do lembrete. 
            Você pode criar um novo lembrete e organiza-lo em uma lista reativa, podendo também remover seus itens de forma intuitiva. 
            Lembretes de uma mesma data são agrupados de forma eficiente, além das datas serem exibidas em ordem cronológica, 
            independente da ordem de inserção. O foco dessa aplicação foi a qualidade de código, onde ele é 100% testado, claro e legível. 
            Essa aplicação no entanto, não conta atualmente com uma persistência de dados, que deve ser futuramente implementada. 
            Nessa sua versão em Kotlin, foi desenvolvida de forma muito mais eficiente e prática, 
            gerando 80x menos warnings no código, utilizando o Android SDK e a biblioteca do Google MaterialDesign.`,
      github: "https://github.com/lamenkazu/LembrolKotlin",
      demo: "https://github.com/jemaf"
    },
    {
      id: 6,
      image: IMG4,
      tecs: [<TbBrandCoinbase/>, <PiGraphFill/>, <PiTreeStructure/>],
      title: "CaraLivro - C App",
      resume: 
            `Aplicação e desenvolvimento de conceitos avançados em estruturas de dados, como Grafos, Listas Encadeadas, 
            Hash, Métodos de Ordenação, dentre outros, para protótipo de rede social funcional no terminal. 
            Apesar da falta de conectividade com a Internet e uma interface adequada, as funcionalidades de uma rede social foram 
            implementadas através de estruturas de dadas criadas por mim mesmo, como trabalho de entrega da disciplina de AEDS. 
            Gosto de mostrar esse projeto, pois foi um marco no meu aprendizado aprofundado de estruturas de dados, como construí-las e 
            operar sobre elas.`,
      github: "https://github.com/lamenkazu/Segundo-Semestre-UFMG/tree/main/AEDS/Trabalho%20Final%20-%20CaraLivro",
      demo: "https://github.com/jemaf"
    },
    {
      id: 11,
      image: IMG9,
      tecs: [<SiIos/>, <GrSwift/>, <MdHttp/>, <SiXcode/>],
      title: "Habit Plus",
      resume: 
            `Habit Plus foi uma aplicação que pretendia ser uma cópia do Habits, produzida durante o semestre da aula de Programação iOS 
            com objetivo de aprender a utilizar o ambiente do xCode, a linguagem Swift e a produção de uma aplicação RESTFul reativa.
            Para acompanhar o ritmo das aulas, não houve uma implementação identica à versão React Native. Esse projeto foi fundamental para
            o aprendizado na ambientação iOS, com o incrível auxílio da Dr. e Prof. Virgínia Mota da UFMG. `,
      github: "https://github.com/lamenkazu/HabitPlus",
      demo: "https://github.com/jemaf"
    },

    {
      id: 5,
      image: IMG6,
      tecs: [<BiLogoAndroid/>, <BiLogoJava/>, <SiMaterialdesign/>],
      title: "Lembrol - Java App",
      resume: 
            `O Lembrol é uma aplicação mobile com objetivo de adicionar novos lembretes, informando data do lembrete.
            Você pode criar um novo lembrete e organiza-lo em uma lista reativa, e remover seus itens de forma intuitiva. 
            Lembretes de uma mesma data são agrupados de forma eficiente, além das datas serem exibidas em ordem cronológica, 
            independente da ordem de inserção. O foco dessa aplicação foi a qualidade de código, onde ele é 100% testado, claro, 
            legível e clean. Essa aplicação no entanto, não conta atualmente com uma persistência de dados, 
            que deve ser futuramente implementada. A aplicação foi feita no Android Studio em Java, utilizando o Android SDK e a 
            biblioteca do Google MaterialDesign.`,
      github: "https://github.com/lamenkazu/lembrol",
      demo: "https://github.com/jemaf"
    },
    {
      id: 1,
      image: IMG10,
      tecs: [<BiLogoAndroid/>, <BiLogoJava/>, <BsFiletypeXml/>, <SiMaterialdesign/>, <BiLogoFirebase/>],
      title: "Thin Secret Android in Java",
      resume: 
            `Nessa versão produzida em Android, o ThinSecret é uma versão réplica do aplicativo FatSecret, 
            contador de nutrientes e calorias. Seu objetivo é tornar o cálculo de IDR mais flexível de acordo com as 
            necessidades do usuário, sem tendenciar o código para a perda de peso. Com uma gama de 45 opções de dieta 
            para alcançar seus objetivos, o usuário tem uma ampla gama de escolhas para como administrar seu ganho e gasto de calorias.`,
      github: "https://github.com/lamenkazu/ThinSecret",
      demo: "#"
    },
        
    {
      id: 10,
      image: IMG12,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "ThinSecret in Kotlin",
      resume: "Em desenvolvimento",
      github: "!",
      demo: "https://github.com/jemaf"
    },
    {
      id: 4,
      image: IMG11,
      tecs: [<SiIos/>, <GrSwift/>, <BiLogoFirebase/>],
      title: "Thin Secret iOS in SwiftUI",
      resume: 
            `Em sua versão iOS, o ThinSecret foi um re-trabalho do ThinSecret para Android. 
            Criado no padrão arquitetural MVVM, ele utiliza o mesmo banco de dados no Firebase, 
            porém o design foi refeito para se adequar melhor ao iPhone. O trabalho é menos desenvolvido, 
            por falta de tempo com o material necessário, porém segue os mesmos padrões de requisitos 
            e regras de negócio foram implementados.`,
      github: "https://github.com/lamenkazu/ThinSecret-iOS",
      demo: "https://github.com/jemaf"
    },
    {
      id: 7,
      image: IMG1,
      tecs: [<SiJavascript/>, <DiNodejs/>, <SiCss3/>, <TbSql/>, <SiSqlite/>],
      title: "AgendApp 1.0",
      resume: 
              `Versão protótipo de um aplicativo de agendamentos. É um projeto de estudo que visava compreender fundamentos 
              básicos de front e backend, lidando com interações com usuários e operações no 
              banco de dados de texto e arquivos de forma simples. Implementado em padrão arquitetural MVC. 
              Interface Gráfica criada com template engine EJS e CSS, servidor NodeJs com Express utilizando um banco de dados local SQLite.
              Projeto 100% funcional, porém sem conectividade com a internet, funcionando apenas localmente.`,
                
      github: "https://github.com/lamenkazu/agendaapp1.0",
      demo: "https://github.com/jemaf"
    },
    {
      id: 8,
      image: IMG2,
      tecs: [<BiLogoReact/>, <BiLogoTypescript/>, <BiLogoFirebase/>, <DiNodejs/>, <DiSass/> ],
      title: "AgendApp 2.0",
      resume: 
            `Do mesmo modo que a primeira versão, essa foi uma versão de estudos que serviu pra aplicar os conceitos 
            das novas tecnologias. Implementada de uma forma mais elegante e bem trabalhada visualmente sua versão antecessora, 
            a nova versão trás o React utilizando Typescript, junto de uma uma estilização SCSS e um banco de dados noSQL Firebase, 
            garantindo conectividade com a internet, funcionando de forma remota. Esse projeto possui 1 cliente ativo o qual possui 
            um código à parte e mais atualizado, que compartilha o mesmo BD da versão 4.0 que é Nativa Android, porém ambos são privados. 
            Aqui porém há a base da ideia open source para você conferir ou até mesmo utilziar caso seja um desenvolvedor`,

      github: "https://github.com/lamenkazu/agendapp2.0",
      demo: "https://github.com/jemaf"
    },
    {
      id: 9,
      image: IMG3,
      tecs: [<SiJavascript/>, <TbSql/>, <SiCss3/>, <GrMysql/>, <SiXampp/>],
      title: "AgendApp 3.0",
      resume: 
            `Ao invés de trazer novas tecnologias, trás novos conhecimentos de sistemas como um todo. 
            Implementada em MVC e EJS como na primeira versão, utilizando dessa vez MySQL em um servidor NodeJs. 
            O que mudou dessa vez foi excepcionalmente a qualidade do código, aplicação de conceitos de Engenharia de Software, 
            implementação avançada de um banco de dados relacional bem planejado, uma API própria com alto padrão de regras de negócio. 
            Uma versão mais complexa e bem feita das versões anteriores, porém com a mesma ideia básica: agendar clientes. 
            Apesar de melhor codificada, essa versão não possui uma versão remota, funcionando apenas localmente. 
            A versão 4.0, que possui um código privado, conta com a implementação complexa dessa versão, com a atividade online em um 
            aplicativo Android Nativo.`,

      github: "https://github.com/lamenkazu/AgendApp3.0",
      demo: "https://github.com/jemaf"
    },    

]

export default portfolioData
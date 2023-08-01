import {AiOutlineFieldTime} from 'react-icons/ai'
import {PiProjectorScreenThin} from 'react-icons/pi'
import {MdOutlineLanguage} from 'react-icons/md'
import dayjs from 'dayjs'


const start = dayjs('2022/11/28');
const end = dayjs()

const monthDiff = end.diff(start, 'month')
const yearDiff = end.diff(start, 'year')

const timeInWork = `${monthDiff >= 12 ? 
                    (yearDiff > 1 ? `Nos ultimos ${yearDiff} anos` : `No ultimo ano`) :
                    `Nos ultimos ${monthDiff} meses`}`

export const aboutCardData = [
    {
        id: 1,
        icon: <AiOutlineFieldTime className='about__icon'/>,
        title: "Acadêmico",
        small: "1300h em SI e TI",
    },
    {
        id: 2,
        icon: <MdOutlineLanguage className='about__icon'/>,
        title: "Inglês",
        small: "Nível B2",
    },
    {
        id: 3,
        icon: <PiProjectorScreenThin className='about__icon'/>,
        title: "Projetos",
        small: "11+ projetos",
    }
]

export const aboutTextData = [
    {
        id: 1,
        text: `Sou formado em duas das principais universidades federais de Minas Gerais, 
        onde tive a oportunidade de me envolver em diversos projetos de desenvolvimento, 
        abrangendo as áreas de Front-end, Back-end e Mobile, utilizando várias tecnologias.`,
    },
    {
        id: 2,
        text: `${timeInWork}, venho atuando em um grupo de desenvolvimento sem fins lucrativos, 
        focado na preparação dos membros para o mercado de trabalho. Nesse projeto, chamado LetsWorkFree, 
        dedicamos 6 horas diárias, de forma flexível, para aprimorar nossas habilidades e práticas profissionais. 
        Utilizamos metodologias ágeis, como o SCRUM, e ocasionalmente empregamos o Kanban para otimizar a organização das tarefas.`
    },
    {
        id: 3,
        text: `Além disso, trabalho em três projetos individuais, com usuários ativos, 
        que desenvolvi de forma independente. São eles: ThinSecret, um aplicativo de gestão 
        de nutrientes e estado corporal; Agendapp, um aplicativo de gestão de agendamento de clientes; 
        e HabitPlus, um aplicativo para controle de hábitos e metas diárias.`,
    }
]
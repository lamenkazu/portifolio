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
import {BsFiletypeScss} from 'react-icons/bs'
import {SiIos} from 'react-icons/si'
import {TbBrandReactNative, TbSql} from 'react-icons/tb'

const portfolioData = [
    {
      id: 1,
      image: IMG1,
      tecs: [<BiLogoJava/>, <BiLogoJavascript/>, <BiLogoTypescript/>],
      title: "Title name",
      resume: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 2,
      image: IMG2,
      tecs: [<BiLogoFirebase/>, <BiLogoNodejs/>, <BiLogoReact/>],
      title: "Title name",
      resume: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 3,
      image: IMG3,
      tecs: [<BiLogoCss3/>, <BiLogoCPlusPlus/>, <BiLogoHtml5/>],
      title: "Title name",
      resume: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 4,
      image: IMG4,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <BiLogoAndroid/>],
      title: "Title name",
      resume: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 5,
      image: IMG5,
      tecs: [<GrSwift/>, <BsFiletypeScss/>, <SiIos/>],
      title: "Title name",
      resume: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    },
    {
      id: 6,
      image: IMG6,
      tecs: [<TbBrandReactNative/>, <TbSql/>, <BiLogoTypescript/>],
      title: "Title name",
      resume: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      github: "https://github.com/lamenkazu",
      demo: "https://github.com/jemaf"
    }
]

export default portfolioData
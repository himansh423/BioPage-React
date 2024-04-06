import { createContext} from "react";
import { GrYoutube } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "../App.css";

 export const ContextAPI = createContext({
  ButtonItem:[],
});

function ContextAPIProvider({children}) {
   let ButtonItem = [
    {
      buttonName:"Get this BioPage at just 799/-",
      buttonLink:"whatsapp://send?phone=+918287015235&text=%20Hello%2C%20I%20want%20full%20customized%20BioPage.",
      buttonIcon:"",
      className:"blink"
    },
    {
      buttonName:"Website/blog starting at just 2000/-",
      buttonLink:"whatsapp://send?phone=+918287015235&text=%20Hello%2C%20I%20want%20my%20own%20Website/Blog.",
      buttonIcon:"",
      className:"blink"
    },
    {
      buttonName:"Youtube",
      buttonLink:"https://yt.openinapp.co/4bv78",
      buttonIcon:<GrYoutube className="icon"/>,
    }
    ,
    {
      buttonName:"X(Twitter)",
      buttonLink:"https://twtr.openinapp.co/pa4bx",
      buttonIcon:<FaSquareXTwitter className="icon"/>,
    },
    {
      buttonName:"Threads",
      buttonLink:"https://openinapp.co/sxb2k",
      buttonIcon:<FaSquareThreads className="icon"/>,
    },
    {
      buttonName:"GitHub",
      buttonLink:"https://github.com/himansh423",
      buttonIcon:<FaGithub className="icon"/>,
    },
    {
      buttonName:"Facebook",
      buttonLink:"https://fb.openinapp.co/hd7ga",
      buttonIcon:<FaFacebookSquare className="icon"/>,
    },
   ];

  return <ContextAPI.Provider value={{
    ButtonItem:ButtonItem,
  }}>
     {children}
  </ContextAPI.Provider>
}


export default ContextAPIProvider;
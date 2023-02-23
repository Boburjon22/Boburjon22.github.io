import burning from '../images/burningman.png'
import DenisNovik from '../images/DN.png'
import FreebieAgency from '../images/freebie.png'
import DV from '../images/verstka.png'
import myWeb from '../images/myWebsite.png'
import farmgame from '../images/farmgame.png'
import calculator from '../images/calculator.png'
import yangiYil from '../images/yangiyil.png'

const Portfolio = () => {
    return ( 
        <div className="portfolio">
            <div className="container">
                <h1>Portfolio</h1>
                <nav className='port-image'>
                    <h2>Burning Man</h2><a href="https://boburjon22.github.io/burning_man/">Look beyond</a>
                    <img src={burning} alt="burningman.png"></img>
                    <h2>Denis Novik</h2><a href="https://boburjon22.github.io/denis_novik/">Look beyond</a>
                    <img src={DenisNovik} width="1108" alt="DenisNovik.png"></img>
                    <h2>Freebie-Agency</h2><a href="https://boburjon22.github.io/freebie_agency/">Look beyond</a>
                    <img src={FreebieAgency} alt="Freebie-Agency.png"></img>
                    <h2>Дизайн и Вёрстка</h2> <a href="https://boburjon22.github.io/dizayn_verstka/">Look beyond</a>
                    <img src={DV} width="1108" alt="verstka.png"></img>
                    <h2>My Website</h2><a href="https://boburjon22.github.io/">Look beyond</a>
                    <img src={myWeb} alt="my Website.png"></img>
                    <h2>Farm Game</h2><a href="https://boburjon22.github.io/farm_game/">Look beyond</a>
                    <img src={farmgame} alt="farmgame.png"></img>
                    <h2>YANGI YIL TATILINI <br/>Biz bilan mazmunli otqazing</h2><a href="https://en.wikipedia.org/wiki/Burning_Man">Look beyond</a>
                    <img src={yangiYil} alt="YANGI YIL TATILINI Biz bilan mazmunli otqazing.png"></img>
                    <h2>Calculator</h2><a href="https://boburjon22.github.io/calculator/">Look beyond</a>
                    <img src={calculator} alt="calculator.png"></img>
                </nav> 
            </div>
        </div>
     );
}
 
export default Portfolio;
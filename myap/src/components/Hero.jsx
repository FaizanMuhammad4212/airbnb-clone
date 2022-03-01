import im from "../images/image_grid.png";
export default function Hero(){
    return(
        <div className="Cont">
        <img src={im} alt="" className="image-grid"></img>
          <div className="h1-header"><h1>Online Experiences</h1>
           <p >Join unique interactive activities led by<br/>one-of-a-kind hosts-all without laeving<br/>home.</p>
           
        </div>
        </div>    
        )
}
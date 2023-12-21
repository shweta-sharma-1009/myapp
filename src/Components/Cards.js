function Cards(props){
  return(
      <div class="cards">
          <div class="card1">
             <div class="one">
              <img class="set" src={props.image} alt="" />
              </div>
             <div class="two">
              <p class="para2">{props.h2}</p>
              <p class="para3">{props.year}{props.cast}</p>
              <p class="para4">{props.time}</p>
              <p class="para5">{props.thrill}</p>
             </div>
            
            <div class="foot">
            <p class="block">{props.paragraph}</p>
            <br />
            
            
            <i class="ri-share-fill"></i>
            <i class="ri-heart-fill"></i>
            <i class="ri-chat-4-fill"></i>
            </div>
            <div class="sideImage">
              <img class="inSide" src={props.sideImg} />
            </div>
          </div>
      </div>
  );
}
export default Cards
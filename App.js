import React from "react";
import ReactDOM, {createRoot} from "react-dom/client";
 
const Title=()=>{
    return(
        
        <a href="/">
      <img className="logo" alt="logo" src="https://img.freepik.com/free-vector/hand-drawn-world-food-day_23-2148289851.jpg?w=2000"/>
      </a>
      
    )
};


const Header=()=>{
    return(
        <div className="header">
       
        <Title/>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        </ul>
        </div>
       
        </div>
        )
    }

    const Body=()=>{
        return(
            
            <div className="res-list">
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            <RestaurentCard/>
            </div>
           
        )
    }

const burgerKing={
    name:"Burger King",
    img:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rv8vzoxlvdb80jwvx21h",
    cusins:["burger","american"],
    rating: "5.7"
    
}



    const RestaurentCard=()=>{
        return(
            <div className="card">
            <img src={burgerKing.img}/>
            <h5>{burgerKing.name}</h5>
            <h5>{burgerKing.cusins.join(", ")}</h5>
            <h5>{burgerKing.rating}</h5>
            </div>

        )
    }

    const Footer=()=>{
        return(
            
            <h3>Footer</h3>
            
        )
    }

    // const styleName={
    //     color:"red"
    // }
const AppLayout=()=>{
            return(
                <React.Fragment>
                <Header/>
                <Body/>
                <Footer/>
                
                </React.Fragment>
            )
        }
  


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)

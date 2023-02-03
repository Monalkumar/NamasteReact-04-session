import React from "react";
<<<<<<< HEAD
import ReactDOM, {createRoot} from "react-dom/client";
 
const Title=()=>{
    return(
        
        <a href="/">
      <img className="logo" alt="logo" src="https://img.freepik.com/free-vector/hand-drawn-world-food-day_23-2148289851.jpg?w=2000"/>
      </a>
      
    )
};
=======
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {id:"title"} ,"hello world");
const heading1 = React.createElement("h2", {id:"hello"} ,"Pizza");
const heading3 = React.createElement("h2", {id:"hello"} ,"Burger");
const heading4 = React.createElement("h2", {id:"hello"} ,"sandwich");
const heading5 = React.createElement("h2", {id:"hello"} ,"cocktail");
const heading2 = React.createElement("h2", {id:"hello"} ,"hello world coding");
const headinge = React.createElement("h2", {id:"hello"} ,"Hello progrmming");
const container = React.createElement("div", {id:"container"} ,[heading, heading1,heading2,heading3,heading4,heading5,headinge]);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)



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

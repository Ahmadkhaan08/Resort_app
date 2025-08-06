import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"

export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title:"Free Cocktails",
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, option!"
      },
      {
        icon:<FaBeer/>,
        title:"Quality Juices",
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, option!"
      },
      {
        icon:<FaHiking/>,
        title:"Free Hiking ",
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, option!"
      },
      {
        icon:<FaShuttleVan/>,
        title:"Best Shuttle Services",
        info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, option!"
      },
    ]
  }
  render() {
    return (
      <section className="services"><Title  title="Services"/>
      <div className="services-center">
        {this.state.services.map((item,index)=>{
          return(
                   <article key={index} className='service'>
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                   </article>
          )
        })}
        </div>
        </section>
    
    )
  }
}

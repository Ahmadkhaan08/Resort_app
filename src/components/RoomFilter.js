import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
//get all unique values
const getUnique=(item,value)=>{
  return [...new Set(item.map(item=>item[value]))]
}

export default function RoomFilter({rooms}) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    price,
    Maxprice,
    Minprice,
    Maxsize,
    Minsize,
    breakfast,
    pets,
  } = context;

//get unique types
let types=getUnique(rooms,'type')
// add all
types=['all',...types]
//map to jsx
types=types.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
})

//add people
let people=getUnique(rooms,'capacity')
people=people.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
})

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
           <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >{types}</select>
        </div>
        {/*end select type */}
         {/* select guest */}
         <div className="form-group">
           <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={type}
            className="form-control"
            onChange={handleChange}
          >{people}</select>
        </div>
        {/*end select guest */}
        {/* select price */}
        <div className="form-group">
          <label htmlFor="price">room price Rs{price}/-</label>
            <input type="range" name="price" min={Minprice} max={Maxprice} id="price" value={price} onChange={handleChange} className="form-control" />
        </div>
        {/* end select price */}
         {/* size */}
         <div className="form-control">
          <label htmlFor="size">Room Size</label>
          <div className="size-inputs">
            <input type="number" name="Minsize" id="size" value={Minsize} onChange={handleChange} className="size-input"/>
          </div>
            <input type="number" name="Maxsize" id="size" value={Maxsize} onChange={handleChange} className="size-input"/>
         </div>
         {/* end of size */}
         {/* extras */}
         <div className="form-control">
          <div className="single-extra">
          <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
          <label htmlFor="breakfast">BreakFast</label>
          </div>
          <div className="single-extra">
          <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
          <label htmlFor="pets">Pets</label>
          </div>
         </div>
         {/* end of extras */}
      </form>
        </section>
  );
}

import React, { Component } from "react";
import roomsData from "./data";

const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    Minprice: 0,
    Maxprice: 0,
    Minsize: 0,
    Maxsize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    //this.getdata..
    let rooms = this.formatData(roomsData);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let Maxprice = Math.max(...rooms.map((item) => item.price));
    let Maxsize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: Maxprice,
      Maxprice,
      Maxsize,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const name = event.target.name;
    const value = target.value==="checkbox"? target.checked:target.value;
    console.log( name, value);
    this.setState({
      [name]:value
    },
  this.filterRooms
)
  };
  filterRooms=()=>{
    let{
      rooms, 
      type,
      capacity,
      price,
      Minsize,
      Maxsize,
      breakfast,
      pets,
    } = this.state;

// all the rooms
let tempRooms=[...rooms]

//Transform values
capacity=parseInt(capacity)
price=parseInt(price)

//Filter by type
if(type!=='all'){
tempRooms=tempRooms.filter(room=>room.type===type)
}

//Filter by capacity
if(capacity!==1){
  tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
  }
  
  //Filter by price
  tempRooms=tempRooms.filter(room=>room.price<=price)

  //Filter by size
  tempRooms=tempRooms.filter(room=>room.size>=Minsize && room.size<=Maxsize)

  //Filter by breakfast
if(breakfast){
  tempRooms=tempRooms.filter(room=>room.breakfast===true)
  }
  
  //Filter by pets
if(pets){
  tempRooms=tempRooms.filter(room=>room.pets===true)
  }
this.setState({
  sortedRooms:tempRooms
})
    }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomConsumer, RoomProvider, RoomContext };

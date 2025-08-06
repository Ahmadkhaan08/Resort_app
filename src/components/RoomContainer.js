import React from 'react'
import { RoomConsumer } from '../context'
import Loading from "./Loading"
import RoomList from "./RoomList"
import RoomFilter from "./RoomFilter"

export default function RoomContainer() {
  return (
<RoomConsumer>
    {value=>{
        const{loading,sortedRooms,rooms}=value
        if(loading){
            return <Loading/>
        }
        return <div>
            <RoomFilter  rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </div>
    }}
</RoomConsumer>  )
}

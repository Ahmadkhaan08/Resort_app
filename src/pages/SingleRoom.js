import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";
import defaultBcg from "../images/room-1.jpeg";
import StyledHero from "../components/StyledHero";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found.....</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      images,
    } = room;
    const [mainImg,...defaultImg]=images
    return (
      <>
      <StyledHero img={mainImg || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
<div className="single-room-images">
  {defaultImg.map((item,index)=>{
    return  <img key={index} src={item} alt={name}/>
  })}
</div>
<div className="single-room-info">
  <article className="desc">
    <h3>details</h3>
    <p>{description}</p>
  </article>
  <article className="info">
    <h3>info</h3>
    <h6>price:Rs{price}/-</h6>
    <h6>size:Rs{size}/- SQFT</h6>
    <h6>
      max capacity:{" "}
      {capacity>1 ?`${capacity}people`:`${capacity}person`}
    </h6>
  </article>
</div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item,index)=>{
            return <li key={index} > - {item}</li>
          })}
        </ul>
      </section>
      </>
    );
  }
}
export default withParams(SingleRoom);

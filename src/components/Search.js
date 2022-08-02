import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react";

const Search = ()=> {

  // const [event, setEvent] = useState("");
  // const [city, setCity] = useState("");
  const [postalCode, setPostalcode] = useState("");
  const [events, setEvents] = useState([])
// in set changes the value of events
//  useEffect(()=>{
//    search(); 
//  });

   
 
///this is what needs to get the data from api and gets called when you click submit on search button
  const search= async () => {
    // console.log("clickclickboom")
    // if (event === "" || city === "") {
    //     return
    // }
   const eventData = await axios.get(
`https://app.ticketmaster.com/discovery/v2/events.json?apikey=nGmhT9VhAN6B19MlRwsPOf6jSbjnf5Wg&postalCode=${postalCode}`)
  //  console.log(eventData)
   const eventsArr = eventData.data._embedded.events
  //  console.log(eventsArr)

   setEvents(eventsArr)

  
   }

   const handleSearchChange = (searchInput) => {

     setPostalcode(searchInput)

    //  console.log(postalCode)
   }






  return(
  <div className="searchPage">
    <input onChange={(e)=>{handleSearchChange(e.target.value)}} type="text" placeholder=" Search zipcode...."/>   
    <button onClick={search} type="submit">Search</button>   
    <div className="eventContainer">
      {events.map((event, i) => {
      console.log (event)
      return ( 
        <div className="eventCard"> 
        {/* Figure out how to add text to ternary and what keys to use so doesn't repeat. */}
          <h1 key={i}>{event.name}</h1> 
          <img src={event.images[1].url} alt="event"/>
          <span className="eventStatus" key={i}> {event.dates.status.code ? event.dates.status.code : "" } </span>
          <span className="eventDate" key={i}> {event.dates.start.localDate ? event.dates.start.localDate : "" }</span>
          <span className="eventStart" key={i}> {event.dates.start.localTime ? event.dates.start.localTime : ""} </span>    
          <span className="eventEnd" key={i}> {event.dates.end ? event.dates.end.localTime : "" } </span>   
          <span className="eventInfo" key={i}> {event.info ? event.info : "" } </span>
          <span className="eventDescription" key={i}> {event.description ? event.description : "" } </span>
        </div>
      )})}
    </div>
  </div>
  
  )
};
  

//  <div>
//  <Link to ="/search"> Search events</Link>
//  </div> 

// };

 export default Search




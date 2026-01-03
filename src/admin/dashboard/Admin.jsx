import { useState } from "react";
import Card from "./Card";

function Admin() {

  const [details, setDetails] = useState([])

  const addDetails = () => {
    setDetails((prev)=> [...prev, details])
  }

  // const updateDetails = (id) => {
  //   const newDetails =
  // }



  return (
    <div>
      <Card addDetails={addDetails}/>
      <div>
        {details.map((item) => (
          <Card 
            key={item.id}
            item={item}
          />
        ))}
    </div>
    </div>
    )
}
export default Admin;

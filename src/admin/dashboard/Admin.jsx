import { useState } from "react";
import Card from "./Sidebar";
import Sidebar from "./Sidebar";

function Admin() {

  const [details, setDetails] = useState([])

  const addDetails = () => {
    setDetails((prev)=> [...prev, details])
  }

  const updateDetails = () => {

  }
  const deleteDetails = (id) => {
    setDetails((prev) => prev.filter((item)=> item.id !== id));
  }


  return (
    <div>
      <Sidebar addDetails={addDetails}/>
      <div>
        {details.map((item) => (
          <Sidebar
            key={item.id}
            item={item}
            onUpdateDetails={updateDetails}
            deleteDetails={deleteDetails}
          />
        ))}
    </div>
    </div>
    )
}
export default Admin;

function Card() {
  return (
    <div style={{width:"100%" , display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"start", textAlign:"center"}}>
      <h2>Add Restaurant</h2>
      <input type="text" placeholder="Restaurant Name" />
        <br />
        <br />
      <input type="text" placeholder="Address" />
        <br />
        <br />
      <select name="" id="">
        <option value="">Select Dropdown</option>
        <option value="Rajastani">Rajastani</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Mughali">Mughali</option>
        <option value="Jain">Jain</option>
        <option value="Thai">Thai</option>
        <option value="North Inidan">North Inidan</option>
        <option value="South Indian">South Indian</option>
      </select>
        <br />
        <br />
      <select name="" id="">
        <option value="">parking</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
        <br />
        <br />
      <button>Add Restaurant</button>

    </div>
  )
}
export default Card

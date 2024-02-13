import React, { useState } from "react";

function App() {
  const [uname, setname] = useState("");
  const [snumber, setnumber] = useState("");
  const [error, seterror] = useState("");

  const namehandle = (e) => {
    let data = e.target.value;
    let name = "dilip";

    if (data === name) {
      setname(data);
    } else {
      seterror("Account Not Found");
    }
  };

  const numberhandle = (e) => {
    let data = parseInt(e.target.value);
    let age = 18;
    if (data === age) {
      setnumber(data);
    } else {
      seterror("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <h1 style={{ fontFamily: "Arial", color: "#333", textAlign: "center", marginTop: "50px" }}>Name: {uname}</h1>
      <p style={{ fontFamily: "Arial", color: "#333", textAlign: "center" }}>Age: {snumber}</p>
      <div style={{ backgroundColor: "#f4f4f4", padding: "20px", textAlign: "center", marginTop: "20px" }}>
        <h1 style={{ fontFamily: "Arial", color: "#333" }}>Here's the Form Validation </h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your name"
            onChange={namehandle}
            style={{ marginBottom: "10px", padding: "5px", width: "100%", borderRadius: "5px" }}
         autoComplete="off" />
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter your age"
            onChange={numberhandle}
            style={{ marginBottom: "10px", padding: "5px", width: "100%", borderRadius: "5px" }}
        autoComplete="off"  />
          <input
            type="submit"
            value="Submit"
            style={{ padding: "5px 10px", backgroundColor: "#007bff", color: "white", cursor: "pointer", border: "none", borderRadius: "5px" }}
          />
        </form>
        <span style={{ color: "red", marginTop: "10px", fontFamily: "Arial" }}>{error}</span>
      </div>
    </>
  );
}

export default App;

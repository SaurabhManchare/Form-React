import React, { useState } from "react";

const data = {
  username:"",
  password: "",
  confarmpasswoprd: ""
}

const Form2 = () => {
  const [registerdata , setRegisterData] =useState(data);

  const Handelchange = (e) => {
    const {name , value} = e.target;
    setRegisterData({ ...registerdata , [name] : value})
  }

  const handalSubmit = (e) => {
    e.preventDefault()

    console.log("data", registerdata)
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 mt-5 d-flex justify-content-center">
          <form onClick={handalSubmit}>
            <div class="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                onChange={Handelchange}
                value={registerdata.username}
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={Handelchange}
                value={registerdata.password}
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Comfarm Password"
                name="confarmpasswoprd"
                onChange={Handelchange}
                value={registerdata.confarmpasswoprd}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form2;

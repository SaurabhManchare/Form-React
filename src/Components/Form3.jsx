import React, { useState } from "react";

const paramiters = {
  Country: "",
  State: "",
  Village: "",
};

const Form3 = () => {
  const [data, setdata] = useState(paramiters);

    const HandalChange = (e) => {
        const {name , value} = e.target;
        setdata({...data, [name]: value});
    }

    const HandelSubmit = (e) => {
        e.preventDefault();

        console.log("data" , data)
    }
    

  return (
    <div className="container-fluid  ">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-md-4 shadow p-3 mt-5 mb-5 bg-body rounded">
          <form onClick={HandelSubmit}>
            <div class="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                value={data.country}
                name="Country"
                onChange={HandalChange}
              />
            </div>
            <div className="mb-3">
              <input 
              type="text" 
              className="form-control" 
              placeholder="State"
              value={data.State}
              name="State"
              onChange={HandalChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Village"
                value={data.Village}
                name="Village"
                onChange={HandalChange}
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

export default Form3;

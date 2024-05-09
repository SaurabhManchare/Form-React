import React, { useState } from "react";


const dataParameters = {
  Name: "",
  school: "",
  address: "",
  State: "",
  work: ""
};

function Form1() {
  const [formData, setFormData] = useState(dataParameters);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col-md-4 shadow p-3 mb-5 bg-body rounded">
          <form onSubmit={handleSubmit}>
            <input
              className="form-control mt-2"
              type="text"
              name="Name"
              placeholder="Enter Full Name"
              value={formData.Name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Enter School Name"
              name="school"
              value={formData.school}
              onChange={handleChange}
            />
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              className="form-control mt-2"
              type="text"
              placeholder="State"
              name="State"
              value={formData.State}
              onChange={handleChange}
            />
            <input
              className="form-control mt-2"
              type="text"
              placeholder="Work"
              name="work"
              value={formData.work}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form1;

import "../App.css";
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    zip: "",
  });


  const { firstName, lastName, username, city, zip } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      city: "",
      zip: "",
    });
  };

  return (
    <form onSubmit={submitHandler} className="row g-3 validation" >
      <div className="col-md-4">
        <div className="form-outline">
          <label htmlFor="validationCustom01" className="form-label">
            First name:
          </label>

          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-md-4">
        <div className="form-outline">
          <label htmlFor="validationCustom02" className="form-label">
            Last name:
          </label>

          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="col-md-4">
        <div className="input-group form-outline">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username:
          </label>

          <input
            type="text"
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-outline">
          <label htmlFor="validationCustom03" className="form-label">
            City Name
          </label>

          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            name="city"
            value={city}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-outline">
          <label htmlFor="validationCustom05" className="form-label">
            Zip Code:
          </label>

          <input
            type="number"
            className="form-control"
            id="validationCustom05"
            name="zip"
            value={zip}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="col-12">
        <button className="btn btn-primary button-btn" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
}

export default Form;

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const EnquirePopUp = ({ setIsOpenEnquire, heading }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    site: "Godrej Properties",
    fname: "",
    lname:"",
    email: "",
    country:"",
    city: "",
    number: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    let body = `
 <b>Site : </b>${formData.site}
 <br>
 <b>First Name : </b>${formData.fname}
 <br>
 <b>Last Name : </b>${formData.lname}
 <br>
 <b>Email : </b>${formData.email}
 <br>
 <b>Country : </b>${formData.country}
 <br>
 <b>City : </b>${formData.city}
 <br>
 <b>Number : </b>${formData.number}
    `;
    console.log(body);
    Email.send({
      SecureToken: "fb8ca823-ba7c-4ebf-a072-bfb263221e6c",
      From: "botmediadigitalmarketing@gmail.com",
      To: "botmediadigitalmarketing@gmail.com",
      Subject: "Details from " + formData.site,
      Body: body,
    }).then((message) => {
      if (message == "OK") {
        navigate("/thankyou");
        setIsOpenEnquire(false);
      } else {
        // console.log("error :", message);
        alert('form not submitted!')
      }
    });
  };
  return (
    <div className="fixed z-50 bg-black/20 flex justify-center items-center w-full h-screen top-0 right-0 bottom-0 left-0">
      <div className="md:w-[50vw]  w-full bg-white shadow-sm p-6 pt-12 flex flex-col gap-5  rounded-md relative">
        <IoMdClose
          className="absolute top-2 right-2 text-2xl font-extrabold cursor-pointer"
          onClick={() => {
            setIsOpenEnquire(false);
          }}
        />
        <p className="text-lg font-semibold text-center">{heading}</p>

        <p className="text-[10px] ">
          Fill in the following details and we will get back to you shortly.
        </p>
        <form className="flex flex-col gap-6" onSubmit={submitHandler}>
          <div className=" flex justify-between ">
            <input
              onChange={handleChange}
              required
              type="text"
              name="fname"
              placeholder="First Name"
              className="w-[48%] border-0 border-b-[1px] px-0 focus:ring-0"
            />
            <input
              onChange={handleChange}
              required
              type="text"
              name="lname"
              placeholder="Last Name"
              className="w-[48%] border-0 border-b-[1px] px-0 focus:ring-0"
            />
          </div>
          <div className=" flex justify-between ">
            <input
              onChange={handleChange}
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-[48%] border-0 border-b-[1px] px-0 focus:ring-0"
            />
            <input
              onChange={handleChange}
              required
              type="text"
              name="country"
              placeholder="Country"
              className="w-[48%] border-0 border-b-[1px] px-0 focus:ring-0"
            />
          </div>
          <div className=" flex justify-between ">
            <input
              onChange={handleChange}
              required
              type="text"
              name="city"
              placeholder="CIty"
              className="w-[48%] border-0 border-b-[1px] px-0 focus:ring-0"
            />
            <input
              onChange={handleChange}
              required
              type="number"
              name="number"
              placeholder="Mobile number"
              className="w-[48%] border-0 border-b-[1px] px-0 focus:ring-0"
            />
          </div>

          <div className="flex gap-2">
            <input
     
              type="checkbox"
   
              className="mt-1"
     
            />

            <p>
              Yes, I would like to receive updates & promotions from Godrej
              Properties Limited.
            </p>
          </div>
          <button className="w-full border-[1px] py-3 border-black">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquirePopUp;

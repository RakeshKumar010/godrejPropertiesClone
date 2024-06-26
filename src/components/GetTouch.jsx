import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetTouch = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    site: "Godrej Properties",
    name: "",
    number: "",
    email: "",
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
 <b>Name : </b>${formData.name}
 <br>
 <b>Number : </b>${formData.number}
 <br>
 <b>Email : </b>${formData.email}
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
        alert("form not submitted!");
      }
    });
  };
  return (
    <div className="bg-[#f2eee8] py-14 md:px-40 px-7">
      <div className="flex justify-center ">
        <p className="text-lg font-bold mb-3 text-nowrap ">GET IN TOUCH</p>
      </div>
      <p className="mx-auto text-center md:text-lg  mb-10 max-w-[800px] text-gray-600">
        if you would like to know more details or something specific, feel free
        to contact us. Our site representative will give you a call back.
      </p>
      <div className="md:bg-white md:shadow-xl px-5">
        <form onSubmit={submitHandler} className="flex flex-wrap justify-between items-center  ">
          <input
            required
            onChange={handleChange}
            name="name"
            type="text"
            className="border-0 border-b-[1px] md:w-auto w-full border-gray-600 bg-transparent py-2 focus:ring-0"
            placeholder="Name"
          />

          <input
            required
            onChange={handleChange}
            name="number"
            type="text"
            className="border-0 border-b-[1px] md:w-auto w-full border-gray-600 bg-transparent py-2 focus:ring-0"
            placeholder="Mobile Number"
          />

          <input
            required
            onChange={handleChange}
            name="email"
            type="text"
            className="border-0 border-b-[1px] md:w-auto w-full border-gray-600 bg-transparent py-2 focus:ring-0"
            placeholder="Email ID"
          />

          <button className="py-3 hidden md:block px-10 bg-black  text-white md:mt-4">
            SEND
          </button>
        </form>
        <div class=" md:flex hidden items-start md:mb-4 text-sm py-5 md:py-10  ">
          <input
            type="checkbox"
            id="terms"
            class="h-5 w-5 text-blue-600 rounded mr-3 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          <label for="terms" class="font-medium text-gray-700 ">
            Yes, I would like to receive updates & promotions from Godrej
            Properties Limited.
          </label>
        </div>
      </div>
      <div class=" flex md:hidden items-start md:mb-4 text-sm py-5 md:py-10  ">
        <input
          type="checkbox"
          id="terms"
          class="h-5 w-5 text-blue-600 rounded mr-3 border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        <label for="terms" class="font-medium text-gray-700 ">
          Yes, I would like to receive updates & promotions from Godrej
          Properties Limited.
        </label>
      </div>
      <button className="py-3 block md:hidden px-10 bg-black mx-auto text-white md:mt-4">
        SEND
      </button>
    </div>
  );
};

export default GetTouch;

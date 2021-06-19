import { useState } from "react";

import styles from "./forms.module.scss";
import Input from "../components/Navbar/Input/Input";

const Form1 = () => {
  const [formData, setFormData] = useState({});


  function buildState(...args){
    setFormData(prevState => {
      
      return { ...prevState, [args[1]]:args[0]}
    })
  }

  return (
    <>
      <div className="leading-loose py-5 flex justify-center lg:justify-evenly items-center mx-3 md:mx-16 flex-wrap">
        <div className="">
          <form
            className={[
              "max-w-xl m-4 p-10 bg-white rounded-lg shadow-xl",
              styles["form-container"],
            ].join(" ")}
          >
            <p className="text-gray-800 font-medium">Quotation Form</p>
            <p className="text-xs text-gray-400">Example only prop drilling.</p>
            <div className="mt-6">
              <Input
                required={true}
                styles={{
                  labelStyle: " block text-sm text-gray-600 text-semibold mb-1",
                  inputStyle: "w-full px-5 text-gray-700 bg-gray-200 rounded",
                }}
                type="text"
                label='Name'
                name='name'
                placeholder='Your name'
                onChange={buildState}
              />
              
            </div>
            <div className="mt-2">
            <Input
                required={true}
                styles={{
                  labelStyle: "block text-sm text-gray-600 mb-1",
                  inputStyle: "w-full px-5  text-gray-700 bg-gray-200 rounded",
                }}
                type="email"
                label='Email'
                name='email'
                placeholder='Your email'
                onChange={buildState}
              />
             
            </div>
            <div className="mt-2">
         
              <label
                className=" block text-sm text-gray-600 mb-1"
                htmlFor="cus_email"
              >
                Address
              </label>
              <input
                className="w-full px-2  text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Street"
                aria-label="Email"
              />
            </div>
            <div className="mt-2">
              <label
                className="text-sm block text-gray-600 mb-1"
                htmlFor="cus_email"
              >
                City
              </label>
              <input
                className="w-full px-2 text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="City"
                aria-label="Email"
              />
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1">
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="cus_email"
              >
                Country
              </label>
              <input
                className="w-full px-2  text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Country"
                aria-label="Email"
              />
            </div>
            <div className="inline-block mt-2 pl-1 w-1/2">
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="cus_email"
              >
                Zip
              </label>
              <input
                className="w-full px-2  text-gray-700 bg-gray-200 rounded"
                id="cus_email"
                name="cus_email"
                type="text"
                required=""
                placeholder="Zip"
                aria-label="Email"
              />
            </div>
            <p className="mt-4 text-gray-800 font-medium">
              Payment information
            </p>
            <div className="">
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="cus_name"
              >
                Card
              </label>
              <input
                className="w-full px-2  text-gray-700 bg-gray-200 rounded"
                id="cus_name"
                name="cus_name"
                type="text"
                required=""
                placeholder="Card Number MM/YY CVC"
                aria-label="Name"
              />
            </div>
            <div className="mt-4">
              <button
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                type="submit"
              >
                Search my Quotation
              </button>
            </div>
          </form>
        </div>
        <div className="w-2/3 md:w-1/2 h-full">
          <div className="h-64 rounded-xl bg-gray-900 text-green-300 text-sm md:text-md px-5 py-3 m-4">
            <div className="w-full flex justify-start mb-2">
              <img className="w-10 h-3" src="./assets/buttons.png" alt="img" />
            </div>
            {JSON.stringify(formData, null, 4)}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Form1;

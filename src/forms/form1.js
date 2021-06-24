import { useState } from "react";

import styles from "./forms.module.scss";
import Input from "../components/Input/Input";
import Terminal from "../components/Terminal/Terminal";
import Button from "../components/Button/Button";
import Stars from "../components/StarsReview/Stars";

const Form1 = () => {
  const [formData, setFormData] = useState({});

  function buildState(...args) {
    setFormData((prevState) => {
      return { ...prevState, [args[1]]: args[0] };
    });
  }

  return (
    <div id="main">
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
                label="Name"
                name="name"
                placeholder="Your name"
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
                label="Email"
                name="email"
                placeholder="Your email"
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
                type="text"
                label="Address"
                name="address"
                placeholder="Your address"
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
                type="text"
                label="City"
                name="city"
                placeholder="Your City"
                onChange={buildState}
              />
            </div>
            <div className="inline-block mt-2 w-1/2 pr-1">
              <Input
                required={true}
                styles={{
                  labelStyle: "block text-sm text-gray-600 mb-1",
                  inputStyle: "w-full px-2  text-gray-700 bg-gray-200 rounded",
                }}
                type="text"
                label="Country"
                name="country"
                placeholder="Your Country"
                onChange={buildState}
              />
            </div>
            <div className="inline-block mt-2 pl-1 w-1/2">
              <Input
                required={true}
                styles={{
                  labelStyle: "block text-sm text-gray-600 mb-1",
                  inputStyle: "w-full px-2  text-gray-700 bg-gray-200 rounded",
                }}
                type="text"
                label="Zip Code"
                name="zip"
                placeholder="Your Zip Code"
                onChange={buildState}
              />
            </div>
            <p className="mt-4 text-gray-800 font-medium">
              Payment information
            </p>
            <div className="">
              <Input
                required={true}
                styles={{
                  labelStyle: "block text-sm text-gray-600 mb-1",
                  inputStyle: "w-full px-2  text-gray-700 bg-gray-200 rounded",
                }}
                type="text"
                label="Card Number"
                name="creditcard"
                placeholder="Your Credit Card Number (e.g. 4592 - XXXX - XXXX - XXXX)"
                onChange={buildState}
              />
            </div>
            <div className="mt-4">
              <Button
                styles="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                onClick={() => alert(JSON.stringify(formData, null, 4))}
                label="Search my Quotation"
              />
            </div>
          </form>
        </div>
        <div className="m-6 lg:m-7 lg:justify-start lg:mt-0 lg:w-1/2 w-full h-full">
          <h3 className={[styles["preview-title"], 'tracking-wide'].join(' ')}>Simple Hooks Form</h3>
          

          <div className='flex flex-row items-center'>
            <h1 className={[styles["preview-header"], 'tracking-wide leading-tight '].join(' ')}>
              Difficulty: </h1><Stars styles={{ "div":"h-6 w-full flex items-center space-x-2", "img": "h-5 w-5" }}
                score={2}
                total={5}
                outline={true}
                count={true}
            />
          </div>
          <div className="mx-5 lg:mx-7 my-2 pl-1 flex space-x-1">
            <span aria-label="tools">🛠</span>
            <p>React State and Hooks</p>
            </div>
          <p className={styles["preview-text"]}>
            Take a look at how State is being altered on realtime!
          </p>
          <p className={[styles["preview-subtext"], "text-gray-700"].join(" ")}>
            Event handlers take responsibility to prompt new data to our State
            Setter methods.
          </p>
          <Terminal state={formData} />
        </div>
      </div>
    </div>
  );
};

export default Form1;

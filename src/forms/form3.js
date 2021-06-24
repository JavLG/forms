import { useFormik } from 'formik';
import * as Yup from 'yup';

/* import Waves from '../ui/animations/Waves/Waves';
import wavesStyles from '../ui/animations/Waves/Waves.module.scss';
 */

import styles from "./forms.module.scss";
import FormikInput from "../components/Input/FormikInput";
import Terminal from "../components/Terminal/Terminal";
import Button from "../components/Button/Button";
import Stars from "../components/StarsReview/Stars";
import Tooltip from "../components/Tooltip/Tooltip";
import getData from '../services/behindthename';
import { useState }  from 'react';

import Spinner from '../ui/animations/Spinner/Spinner';






const QuotationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),

});





const Form3 = () => {

  const [loadingGender, setLoadingGender] = useState(false)

  const formik = useFormik({
    initialValues: {

    },
    validationSchema: QuotationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const updateGender = async (event) => {
    event.preventDefault();
    if(formik.values.name && formik.touched.name && !formik.errors.name)
    {
      try {
      let resp = await getData(formik.values.name)
      switch(resp.data[0].gender){
        case "m":
          document.getElementById("Gender").value = "male";
          formik.setFieldValue('gender', 'male');
          break;
        case "f":
          document.getElementById("Gender").value = "female";
          formik.setFieldValue('gender', 'female');
          break;
        default:
          document.getElementById("Gender").value = "other"
          formik.setFieldValue('gender', 'other');
      }
      }
      catch (e){
          document.getElementById("Gender").value = "unknown";
          formik.setFieldValue('gender', 'unknown');
      }
    }
    setLoadingGender(false)
  }


  return (
    <div id="main">
      <div className="leading-loose py-5 flex justify-center lg:space-x-16 lg:justify-evenly items-center mx-3 md:mx-16 flex-wrap">
        <div className="">
          <form
            className={[
              "max-w-xl m-4 p-10 bg-white rounded-lg shadow-xl",
              styles["form-container"],
            ].join(" ")}
          >
            <p className="text-gray-800 font-medium">Quotation Form 3</p>
            <p className="text-xs text-gray-400">Example with Formik and Yup Validation schema. There's also asynchronous field completion using axios.</p>
            <div className="mt-6">
              <FormikInput
                required={true}
                styles={{
                  labelStyle: " block text-sm text-gray-600 text-semibold mb-1",
                  inputStyle: "w-full px-5 text-gray-700 bg-gray-200 rounded",
                }}
                type="text"
                label="Name"
                name="name"
                placeholder="Your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? <div className="flex items-center text-red-600">{formik.errors.name}<div className="ml-1"><Tooltip option={1} /></div></div> : null}
            </div>
            <div className="mt-2">
              <FormikInput
                required={true}
                styles={{
                  labelStyle: "block text-sm text-gray-600 mb-1",
                  inputStyle: "w-full px-5  text-gray-700 bg-gray-200 rounded",
                }}
                type="email"
                label="Email"
                name="email"
                placeholder="Your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null}
            </div>
            <div className="mt-2">

                <FormikInput
                  required={true}
                  styles={{
                    labelStyle: "block text-sm text-gray-600 mb-1",
                    inputStyle: "w-full px-5 py-1 mb-1 text-gray-700 bg-gray-200 rounded",
                  }}
                  type="select"
                  label="Gender"
                  name="gender"
                  placeholder="Your gender"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.gender}
                  options={[{ value: "male", text: "Male" }, { value: "female", text: "Female" }, { value: "unknown", text: "Unknown" }, { value: "other", text: "Other" }]

                  }
                />
                <div className="w-full flex justify-center items-center">
                {loadingGender ? <div className="mx-4"><Spinner /></div> : null}
                <button
                  className="px-4 
                    font-bold text-white bg-indigo-600 rounded-lg 
                  hover:bg-indigo-500 focus:bg-indigo-700"
                  onClick={(event) => {
                    setLoadingGender(true);
                    return updateGender(event)}
                    }
                >Click</button>
                </div>


              {formik.touched.gender && formik.errors.gender ? <div className="text-red-600">{formik.errors.gender}</div> : null}

            </div>


            <div className="mt-2">
              <FormikInput
                required={true}
                styles={{
                  labelStyle: "block text-sm text-gray-600 mb-1",
                  inputStyle: "w-full px-5  text-gray-700 bg-gray-200 rounded",
                }}
                type="text"
                label="Address"
                name="address"
                placeholder="Your address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? <div className="text-red-600">{formik.errors.address}</div> : null}
            </div>
            <div className="mt-2">
              <FormikInput
                required={true}
                styles={{
                  labelStyle: "block text-sm text-gray-600 mb-1",
                  inputStyle: "w-full px-5  text-gray-700 bg-gray-200 rounded",
                }}
                type="text"
                label="City"
                name="city"
                placeholder="Your City"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city ? <div className="text-red-600">{formik.errors.city}</div> : null}
            </div>
            <div className="flex items-start">
              <div className="inline-block mt-2 w-1/2 pr-1">
                <FormikInput
                  required={true}
                  styles={{
                    labelStyle: "block text-sm text-gray-600 mb-1",
                    inputStyle: "w-full px-2  text-gray-700 bg-gray-200 rounded",
                  }}
                  type="text"
                  label="Country"
                  name="country"
                  placeholder="Your Country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                />
                {formik.touched.country && formik.errors.country ? <div className="text-red-600">{formik.errors.country}</div> : null}
              </div>
              <div className="inline-block mt-2 pl-1 w-1/2">
                <FormikInput
                  required={true}
                  styles={{
                    labelStyle: "block text-sm text-gray-600 mb-1",
                    inputStyle: "w-full px-2  text-gray-700 bg-gray-200 rounded",
                  }}
                  type="text"
                  label="Zip Code"
                  name="zip"
                  placeholder="Your Zip Code"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.zip}
                />
                {formik.touched.zip && formik.errors.zip ? <div className="text-red-600">{formik.errors.zip}</div> : null}
              </div>
            </div>
            <p className="mt-4 text-gray-800 font-medium">
              Payment information
            </p>
            <div className="">
              <FormikInput
                required={true}
                styles={{
                  labelStyle: "block text-sm text-gray-600 mb-1",
                  inputStyle: "w-full px-2  text-gray-700 bg-gray-200 rounded",
                }}
                type="text"
                label="Card Number"
                name="creditcard"
                placeholder="Your Credit Card Number (e.g. 4592 - XXXX - XXXX - XXXX)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.creditcard}
              />
              {formik.touched.creditcard && formik.errors.creditcard ? <div className="text-red-600">{formik.errors.creditcard}</div> : null}
            </div>
            <div className="mt-4">
              <Button
                styles="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                onClick={() => !(formik.isValid && formik.dirty) ? alert("Fill in all fields") : formik.handleSubmit}
                disabled={!(formik.isValid && formik.dirty)}
                label="Search my Quotation"
              />
            </div>
          </form>
        </div>
        <div className="w-full h-full m-6 lg:m-7 justify-start lg:mt-0 lg:w-1/2">
          <h3 className={[styles["preview-title"], 'tracking-wide'].join(' ')}>Advanced Form</h3>


          <div className='flex flex-row items-center'>
            <h1 className={[styles["preview-header"], 'tracking-wide leading-tight '].join(' ')}>
              Difficulty: </h1><Stars styles={{ "div": "h-6 w-full flex items-center space-x-2", "img": "h-5 w-5" }}
                score={4}
                total={5}
                outline={true}
                count={true}
            />
          </div>
          <div className="mx-7 pl-1 flex space-x-1">
            <span aria-label="tools">🛠</span>
            <p>React State and Hooks</p>
          </div>
          <div className="mx-7 my-1 pl-1 flex space-x-1">
            <span aria-label="tools">🛠</span>
            <p>Formik</p>
          </div>
          <div className="mx-7 my-1 pl-1 flex space-x-1">
            <span aria-label="tools">🛠</span>
            <p>Yup</p>
          </div>
          <div className="mx-7 my-1 pl-1 flex space-x-1">
            <span aria-label="tools">🛠</span>
            <p>Axios</p>
          </div>
          <p className={styles["preview-text"]}>
            What we've been doing with React's useState hook is now managed by Formik!
          </p>
          <p className={[styles["preview-subtext"], "text-gray-700"].join(" ")}>
            Event handlers take responsibility to prompt new data to our State
            Setter methods.
          </p>
          <Terminal state={formik.values} />
        </div>
      </div>  

    </div>
  );
};

export default Form3;

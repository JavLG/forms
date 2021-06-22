import { useFormik } from 'formik';

import styles from "./forms.module.scss";
import FormikInput from "../components/Input/FormikInput";
import Terminal from "../components/Terminal/Terminal";
import Button from "../components/Button/Button";
import Stars from "../components/StarsReview/Stars";


const validate = values => {
  console.log(values);
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.address) {
    errors.address = 'Required';
  } 
  if (!values.city) {
    errors.city = 'Required';
  } 
  if (!values.country) {
    errors.country = 'Required';
  } 
  if (!values.zip) {
    errors.zip = 'Required';
  } 
  if (!values.creditcard) {
    errors.creditcard = 'Required';
  } 
  
  console.log(errors)
  return errors;
};


const Form2 = () => {
  const formik = useFormik({
    initialValues: {

    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="leading-loose py-5 flex justify-center lg:space-x-16 lg:justify-evenly items-center mx-3 md:mx-16 flex-wrap">
        <div className="">
          <form
            className={[
              "max-w-xl m-4 p-10 bg-white rounded-lg shadow-xl",
              styles["form-container"],
            ].join(" ")}
          >
            <p className="text-gray-800 font-medium">Quotation Form 2</p>
            <p className="text-xs text-gray-400">Example with formik handling events.</p>
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
              {formik.touched.name && formik.errors.name ? <div className="text-red-600">{formik.errors.name}</div> : null}
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
                onClick={formik.handleSubmit}
                label="Search my Quotation"
              />
            </div>
          </form>
        </div>
        <div className="m-6 lg:m-7 lg:justify-start lg:mt-0 lg:w-1/2 w-full h-full">
          <h3 className={[styles["preview-title"], 'tracking-wide'].join(' ')}>Intermediate React and Formik Form</h3>
          

          <div className='flex flex-row items-center'>
            <h1 className={[styles["preview-header"], 'tracking-wide leading-tight '].join(' ')}>
              Difficulty: </h1><Stars styles={{ "div":"h-6 w-full flex items-center space-x-2", "img": "h-5 w-5" }}
                score={3}
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
    </>
  );
};

export default Form2;

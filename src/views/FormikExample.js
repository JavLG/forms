
import styles from './Home.module.scss';
import Form2 from '../forms/form2';
const classNameMaker = (...args) => {
  return args.join(' ')
}


const FormikExample = () => {
  return (
    <div className={classNameMaker(styles['home'], 'w-full h-full')}>
      <div className='py-10 w-full'>
        <div className='mt-24 text-2xl text-white tracking-wide'><h1 className={classNameMaker(styles['header-text'], 'header-text w-full text-center')}>
          Welcome to WebForms! Lets start showcasing some tools!</h1></div>
      </div>
      <div className="my-14">
        <Form2 />
        </div>
      </div>

  );
};

export default FormikExample;
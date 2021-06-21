
import styles from './Home.module.scss';
import Form1 from '../forms/form1';

const classNameMaker = (...args) => {
  return args.join(' ')
}


const Home = () => {
  return (
    <div className={classNameMaker(styles['home'],'w-full h-full')}>
        <div className='py-10 w-full'>
        <div className='text-2xl text-white tracking-wide'><h1 className={classNameMaker(styles['header-text'],'header-text w-full min-h-14 text-center')}>
        Welcome to WebForms! Lets start showcasing some tools!</h1></div>
        </div>
        <div>
          <Form1 />
        </div>
        
    </div>
  );
};

export default Home;
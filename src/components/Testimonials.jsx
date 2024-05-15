import { feedback } from '../constants/';
import FeedbackCard from './FeedbackCard';
import styles from '../style';

const Testimonials = () => (
    
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-1/2 rounded-full blue__gradient'/>

    <div className='w-full flex flex-col justify-between items-center mb-6 relative z-[1] md:flex-row sm:mb-16'>
      <h2 className={styles.heading2}>What people are <br className='sm:block hidden'/>saying about us</h2>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>

    <div className='w-full flex flex-wrap justify-center feedback-container relative z-[1] sm:justify-start'>
      {
        feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))
      }
    </div>
  </section>

)


export default Testimonials
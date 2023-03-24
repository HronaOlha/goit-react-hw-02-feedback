import { Component } from 'react';

import css from './Feedback.module.css';

class Feedback extends Component {
  render() {
    return (
      <>
        <h1 className={css.title}>Please leave feedback</h1>
        <ul className={css.btnList}>
          <li>
            <button className={css.btn}>Good</button>
          </li>
          <li>
            <button className={css.btn}>Neutral</button>
          </li>
          <li>
            <button className={css.btn}>Bad</button>
          </li>
        </ul>
        <h2 className={css.title}>Statisticts</h2>
        <ul className={css.feedbackList}>
          <li>
            <p>
              Good: <span>0</span>
            </p>
          </li>
          <li>
            <p>
              Neutral: <span>0</span>
            </p>
          </li>
          <li>
            <p>
              Bad: <span>0</span>
            </p>
          </li>
        </ul>
      </>
    );
  }
}

export default Feedback;

// export const Feedback = () => {
//   return (
//     <div>
//       <h1 className={css.title}>Please leave feedback</h1>
//       <ul className={css.btnList}>
//         <li>
//           <button className={css.btn}>Good</button>
//         </li>
//         <li>
//           <button className={css.btn}>Neutral</button>
//         </li>
//         <li>
//           <button className={css.btn}>Bad</button>
//         </li>
//       </ul>
//       <h2 className={css.title}>Statisticts</h2>
//       <ul className={css.feedbackList}>
//         <li>
//           <p>
//             Good: <span>0</span>
//           </p>
//         </li>
//         <li>
//           <p>
//             Neutral: <span>0</span>
//           </p>
//         </li>
//         <li>
//           <p>
//             Bad: <span>0</span>
//           </p>
//         </li>
//       </ul>
//     </div>
//   );
// };

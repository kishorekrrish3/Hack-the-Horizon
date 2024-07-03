// import React from "react";

// const Bento = () => {
//   return (
//     <div className="bento">
//       <div className="bento-container">
//         <div className="bento-line-1">
//           <div className="bento-box-1">
//             <h1 className="bb1-title">SPONSORED BY</h1>
//             <div className="bb1-logos">
//               <img
//                 src="/assets/edufic.png"
//                 alt="Edufic"
//                 className="bb1-logo-1"
//               />
//               <img
//                 src="/assets/zuntra.png"
//                 alt="Zuntra"
//                 className="bb1-logo-2"
//               />
//             </div>
//           </div>

//           <div className="bento-box-2">
//             <h1 className="bb2-title">ORGANISED BY</h1>
//             <div className="bb2-container">
//               <h1 className="bb2-subtitle">
//                 ARTIFICIAL INTELLIGENCE CLUB VIT CHENNAI
//               </h1>
//               <img src="/assets/aic.png" alt="Edufic" className="bb2-logo" />
//             </div>
//           </div>
//         </div>
//         <div className="bento-line-2">
//           <div className="bento-box-3">
//             <h1 className="bb3-title">VENUE</h1>
//             <h1 className="bb3-subtitle">
//               VELLORE INSTITUTE OF TECHNOLOGY,
//               <br />
//               CHENNAI
//             </h1>
//           </div>

//           <div className="bento-box-4">
//             <h1 className="bb4-title">DATE</h1>
//             <h1 className="bb4-subtitle">
//               6-7
//               <br />
//               AUGUST
//             </h1>
//           </div>

//           <div className="bento-box-5">
//             <h1 className="bb5-title">PROBLEM STATEMENTS</h1>
//             <ul className="bb5-subtitle">
//               <li>AI Innovation Challenge</li>
//               <li>UI/UX Challenge</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bento;

import React from "react";
import "../styles.css"; // Assuming your CSS file is named Bento.css

const Bento = () => {
  return (
    <div className="bento">
      <div className="bento-container">
        <div className="bento-line-1">
          <div className="bento-box bb1">
            <h1 className="bb-title">SPONSORED BY</h1>
            <div className="bb-logos">
              <img src="/assets/edufic.png" alt="Edufic" className="bb-logo" />
              <img src="/assets/zuntra.png" alt="Zuntra" className="bb-logo" />
            </div>
          </div>

          <div className="bento-box bb2">
            <h1 className="bb-title">ORGANISED BY</h1>
            <div className="bb-container">
              <h1 className="bb-subtitle">
                ARTIFICIAL INTELLIGENCE CLUB VIT CHENNAI
              </h1>
              <img src="/assets/aic.png" alt="AIC" className="bb-logo" />
            </div>
          </div>
        </div>

        <div className="bento-line-2">
          <div className="bento-box bb3">
            <h1 className="bb-title">VENUE</h1>
            <h1 className="bb-subtitle">
              VELLORE INSTITUTE OF TECHNOLOGY, CHENNAI
            </h1>
          </div>

          <div className="bento-box bb4">
            <h1 className="bb-title">DATE</h1>
            <h1 className="bb-subtitle">6-7 AUGUST</h1>
          </div>

          <div className="bento-box bb5">
            <h1 className="bb-title">PROBLEM STATEMENTS</h1>
            <ul className="bb-subtitle">
              <li>AI Innovation Challenge</li>
              <li>UI/UX Challenge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bento;

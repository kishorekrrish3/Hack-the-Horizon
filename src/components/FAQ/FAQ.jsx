import React from "react";
import "../styles.css";

const FAQ = () => {
  return (
    <div className="faq">
      <h1 className="faq-title">FAQs</h1>
      <div className="faq-container">
        <div className="accordion" id="accordionExample">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="accordion-icon"
                >
                  <path
                    d="M20 12L32 24L20 36V12Z"
                    fill="#2F88FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>
                What is Hack THe horizon?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content 1 goes here...</div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="accordion-icon"
                >
                  <path
                    d="M20 12L32 24L20 36V12Z"
                    fill="#2F88FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>
                WHERE IS THE EVENT HAPPENING?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content 2 goes here...</div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="accordion-icon"
                >
                  <path
                    d="M20 12L32 24L20 36V12Z"
                    fill="#2F88FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>
                How to participate?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content 3 goes here...</div>
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="accordion-icon"
                >
                  <path
                    d="M20 12L32 24L20 36V12Z"
                    fill="#2F88FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>
                who can participate?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content 4 goes here...</div>
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="accordion-icon"
                >
                  <path
                    d="M20 12L32 24L20 36V12Z"
                    fill="#2F88FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>
                how much is the registration fee?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content 5 goes here...</div>
            </div>
          </div>

          {/* Accordion Item 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="accordion-icon"
                >
                  <path
                    d="M20 12L32 24L20 36V12Z"
                    fill="#2F88FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>
                how long is the hackathon?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content 6 goes here...</div>
            </div>
          </div>

          {/* Accordion Item 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="accordion-icon"
                >
                  <path
                    d="M20 12L32 24L20 36V12Z"
                    fill="#2F88FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>
                what do we get if we win?
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content 7 goes here</div>
            </div>
          </div>

          {/* Accordion Item 8 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="accordion-icon"
                >
                  <path
                    d="M20 12L32 24L20 36V12Z"
                    fill="#2F88FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>
                what is the team size for the event?
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content 9 goes here...</div>
            </div>
          </div>

          {/* Accordion Item 9 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="accordion-icon"
                >
                  <path
                    d="M20 12L32 24L20 36V12Z"
                    fill="#2F88FF"
                    stroke="black"
                    stroke-width="4"
                    stroke-linejoin="round"
                  />
                </svg>
                is the hackathon online or offline?
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Content 9 goes here...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

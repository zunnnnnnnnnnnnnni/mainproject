import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My work <span>&</span>
          <br /> approach
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Compliant Methods</h4>
                <h5>Fully Process-driven</h5>
              </div>
              <h3>01</h3>
            </div>
            <p>
              Focusing on fully compliant and structured methods to ensure long-lasting digital presence. No use of risky or unofficial techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sustainable Results</h4>
                <h5>Long-term Focus</h5>
              </div>
              <h3>02</h3>
            </div>
            <p>
              Dedicated to achieving long-term, sustainable results for digital identities, focusing on enduring growth rather than short-term gains.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Security</h4>
                <h5>Confidential Handling</h5>
              </div>
              <h3>03</h3>
            </div>
            <p>
              Ensuring the utmost confidentiality and secure handling of all client data and account information during recovery and management processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

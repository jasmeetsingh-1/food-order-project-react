import Modal from "../UI/Modal";
import "./feedback.css";

function Feedback(props) {
  return (
    <Modal onClick={props.toCloseFeedback}>
      <div className="rating-card">
        <div className="rating-card__front">
          <div className="rating-card__img">
            <img
              src="https://rvs-interactive-rating-component.vercel.app/images/icon-star.svg"
              alt=""
            />
          </div>
          <div className="rating-card__content">
            <h2>Thankyou for ordering with us</h2>
            <p>
              Thank you for choosing React Meals! Your satisfaction is our
              priority, and we're dedicated to delivering the best food on time.
              We value your opinion – please take a moment to share your
              valuable feedback with us.
            </p>
            <p style={{ fontWeight: "bold", fontSize: "25px" }}>
              Enjoy your meal!
            </p>
          </div>
          <div className="rating-card__ratings">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <button className="rating-card__btn" onClick={props.onSubmit}>
            submit
          </button>
        </div>
        <div className="rating-card__back">
          <div className="rating-card__img">
            <img
              src="https://rvs-interactive-rating-component.vercel.app/images/illustration-thank-you.svg"
              alt=""
            />
          </div>
          <div className="rating-card__result">
            You selected <span className="rating-card__result--value">4</span>{" "}
            out of 5
          </div>
          <div className="rating-card__content">
            <h1>Thank you!</h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Feedback;

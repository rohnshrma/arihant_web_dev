const PricingCard = (props) => {
  return (
    <div className="pricing-column col-lg-4">
      <div className="card">
        <div className="card-header">
          <h3>{props.dog_name}</h3>
        </div>
        <div className="card-body">
          <h2>{props.price}</h2>
          {props.f1 && <p>{props.f1}</p>}
          {props.f2 && <p>{props.f2}</p>}
          {props.f3 && <p>{props.f3}</p>}
          {props.f4 && <p>{props.f4}</p>}
          <button
            className="btn btn-outline-dark btn-lg btn-block"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <section id="pricing">
      <h2>A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for your and your dog.</p>

      <div className="row">
        {
          <PricingCard
            dog_name="Chihuahua"
            price="Free"
            f1="5 Matches Per Day"
            f2="10 Messages Per Day"
            f3="Unlimited App Usage"
          />
        }
        {
          <PricingCard
            dog_name="Labrador"
            price="$49 / mo"
            f1="Unlimited Matches"
            f2="Unlimited Messages"
            f3="Unlimited App Usage"
          />
        }
        {
          <PricingCard
            dog_name="Mastiff"
            price="$99 / mo"
            f1="Pirority Listing"
            f2="Unlimited Matches"
            f3="Unlimited Messages"
            f4="Unlimited App Usage"
          />
        }
      </div>
    </section>
  );
};

export default Pricing;

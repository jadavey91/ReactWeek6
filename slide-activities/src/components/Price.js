const Price = (props) => {
  return (
    <div className="Pricing">
      <p>RRP:{props.RRP} Now:{props.now} Saving:{props.RRP - props.now}</p>
    </div>
  );
}

export default Price;

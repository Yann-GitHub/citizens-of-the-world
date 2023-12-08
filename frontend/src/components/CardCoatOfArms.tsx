type CardCoatOfArmsProps = {
  coatOfArms?: string;
};

const CardCoatOfArms = ({ coatOfArms }: CardCoatOfArmsProps) => {
  // console.log(coatOfArms);
  return (
    <div className="card-country-coat">
      <div className="card-country-coat__content">
        <h1 className="card-country-coat__title">Armoiries</h1>
        <img className="card-country-coat__coat" src={coatOfArms} alt="coat-of-arms" />
      </div>
    </div>
  );
};

export default CardCoatOfArms;

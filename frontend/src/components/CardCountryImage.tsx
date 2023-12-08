type CardCountryImageProps = {
  capitalImage?: string;
};

const CardCountryImage = ({ capitalImage }: CardCountryImageProps) => {
  console.log(capitalImage);
  return (
    <div className="card-country-image">
      <img className="card-country-image__photo" src={`http://localhost:1338${capitalImage}`} alt="capital-image" />
    </div>
  );
};

export default CardCountryImage;

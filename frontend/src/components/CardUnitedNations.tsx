import iconUnMember from '../assets/un-member.svg';
import iconLogoUn from '../assets/logo-un.svg';
import iconCross from '../assets/cross.svg';
import imgLogoUn from '../assets/img-logo-un.svg';

type CartUnitedNationsProps = {
  isMember?: boolean;
};

const CartUnitedNations = ({ isMember = false }: CartUnitedNationsProps) => {
  console.log(isMember);
  return (
    <div className="card-country-un">
      <img className="card-country-un__image" src={imgLogoUn} alt="img-logo-un" />
      <div className="card-country-un__content">
        <h1 className="card-country-un__title">Nations Unis</h1>
        <div className="card-country-un__totalMembers">
          <img className="card-country-un__icon" src={iconLogoUn} alt="icon-logo-un" />
          <p className="card-country-un__txt">185 pays membres</p>
        </div>
        {isMember ? (
          <div className="card-country-un__realMembers">
            <img className="card-country-un__icon" src={iconUnMember} alt="icon-un-member" />
            <p className="card-country-un__txt">Pays membre</p>
          </div>
        ) : (
          <div className="card-country-un__realMembers">
            <img className="card-country-un__icon" src={iconCross} alt="icon-cross" />
            <p className="card-country-un__txt">Pays non membre</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartUnitedNations;

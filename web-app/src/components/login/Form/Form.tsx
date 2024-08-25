import './Form.css';
import { Dispatcher } from '../Login';
import { ImageUpload } from './ImageSelection';
import { useCookies } from 'react-cookie';
import SwitchButton from '../../buttons/SwitchButton';

type formProps = {
  setEmail: Dispatcher<string>;
  setPassword: Dispatcher<string>;
};

type passformProps = {
  setPassword: Dispatcher<string>;
  setConfPassword: Dispatcher<string>;
};

type registerformProps = {
  setEmail: Dispatcher<string>;
  setPassword: Dispatcher<string>;
  setName: Dispatcher<string>;
  setLastName: Dispatcher<string>;
  setBusinessName: Dispatcher<string>;
  setBusinessRole: Dispatcher<string>;
  setConfPassword: Dispatcher<string>;
  setBusinessContact: Dispatcher<string>;
};

type mobileRegisterFormFirstSlideProps = {
  setName: Dispatcher<string>;
  setLastName: Dispatcher<string>;
};

type mobileRegisterFormSecondSlideProps = {
  setEmail: Dispatcher<string>;
  setPassword: Dispatcher<string>;
  setConfPassword: Dispatcher<string>;
};

type mobileRegisterFormThirdSlideProps = {
  setBusinessName: Dispatcher<string>;
  setBusinessRole: Dispatcher<string>;
  setBusinessContact: Dispatcher<string>;
};

type myAccountMyBusinessFormProps = {
  setCompanyName: Dispatcher<string>;
  setDescription: Dispatcher<string>;
  setImage: Dispatcher<HTMLInputElement>;
};

type myAccountMyBusinessAdressFormProps = {
  setAddress: Dispatcher<string>;
  setCity: Dispatcher<string>;
  setPostCode: Dispatcher<string>;
  setCountry: Dispatcher<string>;
};

type myAccountMyInformationFormProps = {
  setLastName: Dispatcher<string>;
  setName: Dispatcher<string>;
  setEmail: Dispatcher<string>;
  setPhoneNumber: Dispatcher<string>;
};

function Form({ setEmail, setPassword }: formProps) {
  const [cookies] = useCookies(['token', 'theme']);

  return     !cookies.theme || cookies.theme !== 'light' ? (
    <>
      <div className="form-container">
        <h1 className="form-label">Email</h1>
        <input
          className="form-input"
          name="email"
          placeholder={'Ex: exemple@gmail.com'}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h1 className="form-label">Mot de passe</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="check-container">
          <h1 className="form-label">Rester connecté</h1>
          <input className="check" type="checkbox" name="persistantSignIn" />
        </div>
      </div>
    </>) : (
    <div className="form-container">
      <h1 className="form-label text_white">Email</h1>
      <input
        className="form-input"
        name="email"
        placeholder={'Ex: exemple@gmail.com'}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h1 className="form-label text_white">Mot de passe</h1>
      <input
        className="form-input"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="check-container">
        <h1 className="form-label text_white">Rester connecté</h1>
        <input className="check" type="checkbox" name="persistantSignIn" />
      </div>
    </div>
  );
}

function PassForm({ setPassword, setConfPassword }: passformProps) {
  return (
    <>
      <div className="form-container">
        <h1 className="form-label">Mot de passe</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <h1 className="form-label">Confirmation de Mot de passe</h1>
        <input
          className="form-input"
          name="confpassword"
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>
    </>
  );
}

function RegisterForm({
  setEmail,
  setPassword,
  setName,
  setLastName,
  setBusinessName,
  setBusinessRole,
  setConfPassword,
  setBusinessContact,
}: registerformProps) {
  const [cookies] = useCookies(['token', 'theme']);

  return     !cookies.theme || cookies.theme === 'light' ? (
    <>
      <div className="form-container">
        <h1 className="form-label">Nom</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setLastName(e.target.value)}
        />
        <h1 className="form-label">Nom de l'entreprise</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <h1 className="form-label">Email</h1>
        <input className="form-input" name="password" onChange={(e) => setEmail(e.target.value)} />
        <h1 className="form-label">Mot de passe</h1>
        <input
          className="form-input"
          name="confpassword"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-container">
        <h1 className="form-label">Prénom</h1>
        <input className="form-input" name="password" onChange={(e) => setName(e.target.value)} />
        <h1 className="form-label">Poste occupé</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setBusinessRole(e.target.value)}
        />
        <h1 className="form-label">Email de l'entreprise</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setBusinessContact(e.target.value)}
        />
        <h1 className="form-label">Confirmation de mot de passe</h1>
        <input
          className="form-input"
          name="confpassword"
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>
    </>
  )  : (
    <>
      <div className="form-container">
        <h1 className="form-label text_white">Nom</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setLastName(e.target.value)}
        />
        <h1 className="form-label text_white">Nom de l'entreprise</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <h1 className="form-label text_white">Email</h1>
        <input className="form-input" name="password" onChange={(e) => setEmail(e.target.value)} />
        <h1 className="form-label text_white">Mot de passe</h1>
        <input
          className="form-input"
          name="confpassword"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-container">
        <h1 className="form-label text_white">Prénom</h1>
        <input className="form-input" name="password" onChange={(e) => setName(e.target.value)} />
        <h1 className="form-label text_white">Poste occupé</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setBusinessRole(e.target.value)}
        />
        <h1 className="form-label text_white">Email de l'entreprise</h1>
        <input
          className="form-input"
          name="password"
          onChange={(e) => setBusinessContact(e.target.value)}
        />
        <h1 className="form-label text_white">Confirmation de mot de passe</h1>
        <input
          className="form-input"
          name="confpassword"
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </div>
    </>
  );
}
function MobileRegisterFormFirstSlide({ setName, setLastName }: mobileRegisterFormFirstSlideProps) {
  return (
    <div className="form-container">
      <h1 className="form-label">Nom</h1>
      <input className="form-input" name="password" onChange={(e) => setLastName(e.target.value)} />
      <h1 className="form-label">Prénom</h1>
      <input className="form-input" name="password" onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

function MobileRegisterFormSecondSlide({
  setEmail,
  setPassword,
  setConfPassword,
}: mobileRegisterFormSecondSlideProps) {
  return (
    <div className="form-container">
      <h1 className="form-label">Email</h1>
      <input className="form-input" name="password" onChange={(e) => setEmail(e.target.value)} />
      <h1 className="form-label">Mot de passe</h1>
      <input
        className="form-input"
        name="confpassword"
        onChange={(e) => setPassword(e.target.value)}
      />{' '}
      <h1 className="form-label">Confirmation de mot de passe</h1>
      <input
        className="form-input"
        name="confpassword"
        onChange={(e) => setConfPassword(e.target.value)}
      />
    </div>
  );
}

function MobileRegisterFormThirdSlide({
  setBusinessName,
  setBusinessRole,
  setBusinessContact,
}: mobileRegisterFormThirdSlideProps) {
  return (
    <div className="form-container">
      <h1 className="form-label">Nom de l'entreprise</h1>
      <input
        className="form-input"
        name="password"
        onChange={(e) => setBusinessName(e.target.value)}
      />
      <h1 className="form-label">Poste occupé</h1>
      <input
        className="form-input"
        name="password"
        onChange={(e) => setBusinessRole(e.target.value)}
      />
      <h1 className="form-label">Email de l'entreprise</h1>
      <input
        className="form-input"
        name="password"
        onChange={(e) => setBusinessContact(e.target.value)}
      />
    </div>
  );
}

function MyAccountMyBusinessForm({
  setCompanyName,
  setDescription,
  setImage,
}: myAccountMyBusinessFormProps) {
  return (
    <>
      <div className="form-group file-area">
        <ImageUpload />
      </div>
      <div className="form-container">
        <h1 className="form-label">Nom de l'entreprise</h1>
        <input
          className="form-input"
          name="companyname"
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <h1 className="form-label">Description de l'entreprise</h1>
        <textarea
          className="form-input-textarea"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </>
  );
}

function MyAccountMyBusinessAdressForm({
  setAddress,
  setCity,
  setPostCode,
  setCountry,
}: myAccountMyBusinessAdressFormProps) {
  return (
    <>
      <div className="form-container">
        <div className="inside-frame">
          <div className="inside-frame-column">
            <h1 className="form-label">Adresse de l'entreprise</h1>
            <input
              className="form-input"
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="inside-frame-column">
            <h1 className="form-label">Nom de l'entreprise</h1>
            <input
              className="form-input"
              name="postCode"
              onChange={(e) => setPostCode(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-container">
        <div className="inside-frame">
          <div className="inside-frame-column">
            <h1 className="form-label">Ville</h1>
            <input className="form-input" name="city" onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="inside-frame-column">
            <h1 className="form-label">Pays</h1>
            <input
              className="form-input"
              name="country"
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function MyAccountMyInformationForm({
  setLastName,
  setName,
  setEmail,
  setPhoneNumber,
}: myAccountMyInformationFormProps) {
  return (
    <>
      <div className="form-container">
        <div>
          <h1 className="form-label">Nom</h1>
          <input
            className="form-input"
            name="password"
            onChange={(e) => setLastName(e.target.value)}
          />
          <h1 className="form-label">Prénom</h1>
          <input className="form-input" name="password" onChange={(e) => setName(e.target.value)} />
        </div>
        <h1 className="form-label">Email</h1>
        <input className="form-input" name="password" onChange={(e) => setEmail(e.target.value)} />
        <h1 className="form-label">Mot de passe</h1>
        <input
          className="form-input"
          name="telephone"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </>
  );
}

export {
  Form,
  PassForm,
  RegisterForm,
  MobileRegisterFormFirstSlide,
  MobileRegisterFormSecondSlide,
  MobileRegisterFormThirdSlide,
  MyAccountMyBusinessForm,
  MyAccountMyBusinessAdressForm,
  MyAccountMyInformationForm,
};

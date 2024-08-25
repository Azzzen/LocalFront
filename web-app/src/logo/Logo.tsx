import greenLogo from '../assets/green_logo.svg';
export default function Logo() {
  return (
    <div className="logo">
      <img src={greenLogo} alt="LOGO" className="top-left-logo" />;
    </div>
  );
}

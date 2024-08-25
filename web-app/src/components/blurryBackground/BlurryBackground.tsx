import './BlurryBackground.css';
import { useCookies } from 'react-cookie';


export default function BlurryBackground() {
  const [cookies, setCookie] = useCookies(['theme']);

  return !cookies.theme || cookies.theme === 'light' ? (
    <div>
      <div className="background"></div>
      <div className="top-ellipsis"></div>
      <div className="bottom-ellipsis"></div>
    </div>
  ) : (
    <div>
      <div className="background-black"></div>
      <div className="top-ellipsis"></div>
      <div className="bottom-ellipsis"></div>
    </div>
  )
}

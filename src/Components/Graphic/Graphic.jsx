import {Image} from "react-bootstrap";
import './Graphic.css'

export default function Graphic () {
  return (
      <div className="btnBackColor2">
          <div className="logo">
              <Image src='/img/avatar.svg' className='w-100 rounded-circle'/>
          </div>
          <Image src="/img/Component1.png" className="graphic w-100 vh-100"/>
      </div>
  )
}
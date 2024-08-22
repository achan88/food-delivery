import { assets } from "../../assets/assets"
import "./AppDownload.css"

const AppDownload = () => {
  return (
    <div>
        <div className="app-download" id="app-download">
            <p>Download our App! <br /> Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    </div>
  )
}
export default AppDownload
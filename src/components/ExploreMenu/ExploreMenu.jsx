import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets"

const ExploreMenu = ({category}) => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">Choose from a dvierse menu feraturing a delectable array of dishes.</p>
        <div className="explore-menu-list">
            {menu_list.map((menuItem, index) => {
                return (
                    <div key={index} className="explore-menu-list-item">
                        <img src={menuItem.menu_image} alt="" />
                        <p>{menuItem.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}
export default ExploreMenu
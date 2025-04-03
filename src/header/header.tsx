import "./header.css"
import ProfileIcon from "./profileIcon"
import BagIcon from "./bagIcon"

function header() {
    return (
        <div id="header-horizontal-container">
            <div id="table-name-container">
                <div className="profile-icon-container">
                    <ProfileIcon />
                </div>
                <p id="table-name-p">столик 7</p>
            </div>
            <div className="profile-icon-container bag-margin">
                <BagIcon />
            </div>
        </div>
    )
}

export default header

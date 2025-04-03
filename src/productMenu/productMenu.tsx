import "./productMenu.css"
import PMElement from "./PMElement/PMElement"

function productMenu() {
    return (
        <div id="product-container">
            <PMElement name={"Латте"} />
            <PMElement name={"Мокко"} />
            <PMElement name={"Топиако"} />
            <PMElement name={"Кофе"} />
        </div>
    )
}

export default productMenu

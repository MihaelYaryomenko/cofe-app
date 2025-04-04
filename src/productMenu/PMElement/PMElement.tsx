import "./PMElement.css"
import IconPlus from "./iconPlus"

interface CategoryElementProps {
    name: string
}

function PMElement({ name }: CategoryElementProps) {
    return (
        <div className="PMElement-container">
            <div id="pr-container"></div>
            <div id="name-count-container">
                <p className="special-p">{name}</p>
                <div id="plus-icon">
                    <IconPlus />
                </div>
            </div>
        </div>
    )
}

export default PMElement

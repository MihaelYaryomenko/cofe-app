import "./productMenu.css"
import PMElement from "./PMElement/PMElement"

const arrOfNames = [
    "Латте",
    "Мокко",
    "Топиако",
    "Кофе",
    "Топиако",
    "Экспрессо",
    "Мокко",
]

interface ProductMenuProps {
    value?: string
}

function productMenu({ value }: ProductMenuProps) {
    if (value == undefined) {
        throw new Error("Value in productMenu.tsx line 18 is undefined")
    }
    const filteredProducts = arrOfNames.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
    )

    return (
        <div id="product-container">
            {filteredProducts.map((element, index) => (
                <PMElement key={index} name={element} />
            ))}
        </div>
    )
}

export default productMenu

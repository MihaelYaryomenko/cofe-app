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

arrOfNames.sort()

function productMenu({ value }: ProductMenuProps) {
    const filteredProducts = value
        ? arrOfNames.filter((name) =>
              name.toLowerCase().includes(value.toLowerCase())
          )
        : arrOfNames

    return (
        <div id="product-container">
            {filteredProducts.map((element, index) => (
                <PMElement key={`${element}-${index}`} name={element} />
            ))}
        </div>
    )
}

export default productMenu

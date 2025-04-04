import Header from "./header/header"
import Menu from "./menu/menu"
import Search from "./search/search"
import Category from "./category/category"
import ProductMenu from "./productMenu/productMenu"
import "./App.css"
import { useState } from "react"

function App() {
    const [value, setValue] = useState("")

    return (
        <>
            <Header />
            <Menu />
            <Search value={value} setValue={setValue} />
            <Category />
            <ProductMenu value={value} />
        </>
    )
}

export default App

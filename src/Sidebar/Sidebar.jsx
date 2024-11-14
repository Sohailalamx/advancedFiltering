import Category from "./Category/Category.jsx"
import Price from "./Price/Price.jsx"
import Color from "./Color/Color.jsx"
import "./Sidebar.css"

function Sidebar() {
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
            <h1>🛒</h1>
        </div>
        <Category />
        <Price />
        <Color />
    </section>
    </>
  )
}

export default Sidebar
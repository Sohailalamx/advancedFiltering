import { FaStar } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import "./Products.css"

function Products() {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img className="card-img" src="https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg" alt="Shoe" />
          <div className="card-detail">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <FaStar className="rating-star" />
              <FaStar className="rating-star" />
              <FaStar className="rating-star" />
              <FaStar className="rating-star" />
              <span className="total-reviews">4</span>
            </section>
              <section className="card-price">
                <div className="price">
                  <del>$300</del> $200
                </div>
                <div className="bag">
                  <IoBagOutline className="bag-icon" />
                </div>
              </section>
          </div>
        </section>
      </section>
    </>
  )
}

export default Products
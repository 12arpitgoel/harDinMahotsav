import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  // const { loading, error, products } = useSelector((state) => state.products);

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  //   dispatch(getProduct());
  // }, [dispatch, error, alert]);

  return (
    <Fragment>
      {false ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="HarDinMahotsav" />

          <div className="banner">
            <p>Welcome to Mahotsav</p>
            <h1>Explore your Culture Here</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          {/*<h2 className="homeHeading">Featured Products</h2>

           <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;

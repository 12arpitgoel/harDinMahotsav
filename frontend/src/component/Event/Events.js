import React, { Fragment, useEffect, useState } from "react";
import "./Events.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getEvents } from "../../actions/eventAction";
import Loader from "../layout/Loader/Loader";
import EventCard from "../Home/EventCard";
import Pagination from "react-js-pagination";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import { categories } from "../../constants/static";


const Events = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");


  const {
    events,
    loading,
    error,
    eventsCount,
    resultPerPage,
    filteredEventsCount,
  } = useSelector((state) => state.events);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  let count = filteredEventsCount;

  useEffect(() => {
    if (error) {
      console.log(error);
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getEvents(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Events -- HarDinMahotsav" />
          <h2 className="eventsHeading">Events</h2>

          <div className="events">
            {events &&
              events.map((event,idx) => (
                <EventCard key={event._id} event={event} />
              ))}
          </div>

          <div className="filterBox">
            
            <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            
          </div>
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={eventsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Events;

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  decrasePageNumber,
  incrasePageNumber,
  selectHasNextPage,
  selectHomePageNumber,
  selectSearchPageNumber,
  selectHasNextPageInSearch,
  selectGenresPageNumber,
  selectHasNextPageInGenres,
} from "../../redux-features/pages";

const NavigatePageBar = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => selectHomePageNumber(state));
  const pageNumberFromSearch = useSelector((state) =>
    selectSearchPageNumber(state)
  );
  const pageNumberFromGenres = useSelector((state) =>
    selectGenresPageNumber(state)
  );

  const has_next_page = useSelector((state) => selectHasNextPage(state));
  const hasNextPageInSearch = useSelector((state) =>
    selectHasNextPageInSearch(state)
  );
  const hasNextPageInGenres = useSelector((state) =>
    selectHasNextPageInGenres(state)
  );
  const location = useLocation();

  let leftArrowSource = "";
  let rightArrowSource = "";

  const handleIncraseButton = () => {
    const { pathname } = location;
    switch (pathname) {
      case "/":
        dispatch(incrasePageNumber("home"));
        has_next_page && window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "/search":
        dispatch(incrasePageNumber("search"));
        hasNextPageInSearch && window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "/genres":
        dispatch(incrasePageNumber("genres"));
        hasNextPageInGenres && window.scrollTo({ top: 0, behavior: "smooth" });
        break;
    }
  };
  const handleDecraseButton = () => {
    const { pathname } = location;
    switch (pathname) {
      case "/":
        dispatch(decrasePageNumber("home"));
        pageNumber > 1 && window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "/search":
        dispatch(decrasePageNumber("search"));
        pageNumberFromSearch > 1 &&
          window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "/genres":
        dispatch(decrasePageNumber("genres"));
        pageNumberFromGenres > 1 &&
          window.scrollTo({ top: 0, behavior: "smooth" });
        break;
    }
  };
  switch (location.pathname) {
    case "/":
      if (has_next_page && pageNumber === 1) {
        leftArrowSource = "leftArrow";
        rightArrowSource = "rightArrow";
      } else if (!has_next_page) {
        leftArrowSource = "arrowLeftPrimary";
        rightArrowSource = "arrowRightDisable";
      } else if (has_next_page && pageNumber > 1) {
        leftArrowSource = "arrowLeftPrimary";
        rightArrowSource = "rightArrow";
      }
      break;
    case "/search":
      if (hasNextPageInSearch && pageNumberFromSearch === 1) {
        leftArrowSource = "leftArrow";
        rightArrowSource = "rightArrow";
      } else if (!hasNextPageInSearch) {
        leftArrowSource = "arrowLeftPrimary";
        rightArrowSource = "arrowRightDisable";
      } else if (hasNextPageInSearch && pageNumberFromSearch > 1) {
        leftArrowSource = "arrowLeftPrimary";
        rightArrowSource = "rightArrow";
      }
      break;
    case "/genres":
      if (hasNextPageInGenres && pageNumberFromGenres === 1) {
        leftArrowSource = "leftArrow";
        rightArrowSource = "rightArrow";
      } else if (!hasNextPageInGenres) {
        leftArrowSource = "arrowLeftPrimary";
        rightArrowSource = "arrowRightDisable";
      } else if (hasNextPageInGenres && pageNumberFromGenres > 1) {
        leftArrowSource = "arrowLeftPrimary";
        rightArrowSource = "rightArrow";
      }
      break;
  }

  return (
    <div className="NavigatePagesBar">
      <img
        src={require(`../NavToast/${leftArrowSource}.png`)}
        onClick={() => handleDecraseButton()}
      />
      <img
        src={require(`../NavToast/${rightArrowSource}.png`)}
        onClick={() => handleIncraseButton()}
      />
    </div>
  );
};

export default NavigatePageBar;

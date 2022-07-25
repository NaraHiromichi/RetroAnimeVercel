import { useContext } from "react";
import DataContext from "../../DataContext";

const NavigatePageBar = () => {
  const {
    pageNumber,
    setPageNumber,
    needToChangeRightImage,
    setNeedToChangeRightImage,
    handleHomeScrollForPhone,
  } = useContext(DataContext);
  if (pageNumber === 1) {
    setNeedToChangeRightImage("false");
  }

  let leftArrowSource = "";
  let rightArrowSource = "";
  switch (needToChangeRightImage) {
    case "false":
      leftArrowSource = "leftArrow";
      rightArrowSource = "rightArrow";
      break;
    case "true":
      leftArrowSource = "arrowLeftPrimary";
      rightArrowSource = "arrowRightDisable";
      break;
    case "nor":
      leftArrowSource = "arrowLeftPrimary";
      rightArrowSource = "rightArrow";
      break;
  }
  console.log(leftArrowSource, rightArrowSource, needToChangeRightImage);
  return (
    <div className="NavigatePagesBar">
      <img
        src={require(`../NavToast/${leftArrowSource}.png`)}
        onClick={() => {
          setPageNumber((prev) => {
            if (prev === 1) {
              return prev;
            }
            return prev - 1;
          });
          handleHomeScrollForPhone();
        }}
      />
      <img
        src={require(`../NavToast/${rightArrowSource}.png`)}
        onClick={() => {
          setPageNumber((prev) => prev + 1);
          handleHomeScrollForPhone();
        }}
      />
    </div>
    // {/* {needToChangeRightImage === "false" && (
    //   <div className="NavigatePagesBar">
    //     <img
    //       src={require("../NavToast/leftArrow.png")}
    //       onClick={() => {
    //         setPageNumber((prev) => {
    //           if (prev === 1) {
    //             return prev;
    //           }
    //           return prev - 1;
    //         });
    //       }}
    //     />
    //     <img
    //       src={require("../NavToast/rightArrow.png")}
    //       onClick={() => setPageNumber((prev) => prev + 1)}
    //     />
    //   </div>
    // )}
    // {needToChangeRightImage === "true" && (
    //   <div className="NavigatePagesBar">
    //     <img
    //       src={require("../NavToast/arrowLeftPrimary.png")}
    //       onClick={() => {
    //         setPageNumber((prev) => {
    //           if (prev === 1) {
    //             return prev;
    //           }
    //           return prev - 1;
    //         });
    //       }}
    //     />
    //     <img
    //       src={require("../NavToast/arrowRightDisable.png")}
    //       onClick={() => setPageNumber((prev) => prev + 1)}
    //     />
    //   </div>
    // )}
    // {needToChangeRightImage === "nor" && (
    //   <div className="NavigatePagesBar">
    //     <img
    //       src={require("../NavToast/arrowLeftPrimary.png")}
    //       onClick={() => {
    //         setPageNumber((prev) => {
    //           if (prev === 1) {
    //             return prev;
    //           }
    //           return prev - 1;
    //         });
    //       }}
    //     />
    //     <img
    //       src={require("../NavToast/rightArrow.png")}
    //       onClick={() => setPageNumber((prev) => prev + 1)}
    //     />
    //   </div>
    // )} */}
  );
};

export default NavigatePageBar;

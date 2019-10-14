import React from "react";
import "./MainContent.css";
import SideBar from "../SideBar/SideBar";
import Filters from "../Filters/Filters";
import Products from "../Products/Products";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        FACE: [
          "Creams&gel",
          "Patches",
          "Emulsions",
          "Toners",
          "Face cleansing",
          "Make up removal",
          "Scrubs",
          "Peeling",
          "Masks"
        ],
        BODY: [
          "Patches",
          "Emulsions",
          "Toners",
          "Face cleansing",
          "Make up removal",
          "Scrubs",
          "Peeling"
        ],
        FOOT: ["Scrubs", "Peeling", "Masks"],
        HANDS: [],
        HAIR: [],
        MAKEUP: ["Emulsions", "Toners", "Face cleansing"]
      },
      toggle: -1
    };
  }
  showSubCategories = index => {
    this.setState({ toggle: index });
  };
  render() {
    console.log(this.state.toggle);
    return (
      <>
        <div className="container">
          <div className="column1">
            <SideBar
              categories={this.state.categories}
              showSubCategories={this.showSubCategories}
              toggle={this.state.toggle}
            />
            <div className="ads">
              <img src="/Img/comercial.jpg" alt="ads" className="comercial" />
            </div>
          </div>
          <div className="column2">
            <Filters />
            <div className="content">
              <Products />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MainContent;

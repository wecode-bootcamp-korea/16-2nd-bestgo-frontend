import React, { Component } from "react";

class Category extends Component {
  render() {
    const { category, getServiceList } = this.props;
    return (
      <section className="Category">
        {category.length &&
          category.map((category) => {
            return (
              <button
                type="button"
                className="categoryBox"
                onClick={() => getServiceList(category.categoryId)}
                key={category.categoryId}
              >
                <img src={category.iconImageUrl} alt="category_name" />
                <label>{category.name}</label>
              </button>
            );
          })}
      </section>
    );
  }
}

export default Category;

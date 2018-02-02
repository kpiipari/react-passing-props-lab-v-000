import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, updateFilterCallback}) =>
      <div className="fruit-basket">
        <Filter handleChange={updateFilterCallback} filters={filters}/>
        <FilteredFruitList
          filters={currentFilter} fruit={fruit}/>
      </div>

FruitBasket.defaultProps = {
  fruit: null,
  filters: null,
  currentFilter: null,
  updateFilterCallback: function () {}
}

export default FruitBasket;

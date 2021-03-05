import regions from "../fixtures/regions";

const defaultState = {
  regions: [],
  categories: [],
  selectedRegion: null,
  selectedCategoryId: null,
};



const reducers = {
  selectRegion(state, payload) {
    const { regions } = state;
    const { id } = payload;
    return {
      ...state,
      selectedRegion: regions.find((region) => region.id === id),
    };
  },
  setRegions(state, payload) {
    const { regions } = payload;
    return {
      ...state,
      regions,
    };
  },
  selectCategory(state, payload) {
    const { categories } = state;
    const { id } = payload;
    return {
      ...state,
      selectedCategory: categories.find((category) => category.id === id),
    };
  },
  setCategories(state, payload) {
    const { categories } = payload;
    return {
      ...state,
      categories,
    };
  },
};

function defaultReducer(state, payload) {
  return state;
}

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  return (reducers[type] || defaultReducer)(state, payload);
};

export default reducer;
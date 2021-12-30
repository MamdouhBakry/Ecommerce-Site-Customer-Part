import { categoryConstants } from "../actions/constants";

const initState = {
  categories: [],
  loading: false,
  error: null,
};

const buildNewCategories = (parentId, categories, category) => {
  let myCategories = [];

  if (parentId == undefined) {
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        type: category.type,
        children: [],
      },
    ];
  }

  for (let cat of categories) {
    if (cat._id == parentId) {
      const newCategory = {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        parentId: category.parentId,
        type: category.type,
        children: [],
      };
      myCategories.push({
        ...cat,
        children:
          cat.children.length > 0
            ? [...cat.children, newCategory]
            : [newCategory],
      });
    } else {
      myCategories.push({
        ...cat,
        children: cat.children
          ? buildNewCategories(parentId, cat.children, category)
          : [],
      });
    }
  }

  return myCategories;
};
export default (state = initState, action) => {
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      console.log(action.payload.categories);
      return {
        ...state,
        loading: false,
        categories: action.payload.categories,
      };
    case categoryConstants.GET_ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case categoryConstants.ADD_NEW_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case categoryConstants.ADD_NEW_CATEGORY_SUCCESS:
      const category = action.payload.category;
      const updatedCategories = buildNewCategories(
        category.parentId,
        state.categories,
        category
      );
      console.log(updatedCategories);
      return {
        ...state,
        categories: updatedCategories,
        loading: false,
      };
    case categoryConstants.ADD_NEW_CATEGORY_FAILURE:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

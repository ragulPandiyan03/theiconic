import { combineReducers } from 'redux';  
import { selectitemreducer, addToCartItem, addItemCount} from './Reducer';  
import { itemDisplayStatusReducer } from './Reducer';
import { handleItemSpecificCountReducer } from './Reducer';
import { handleSearchItemFromReducer } from './Reducer';
const reducers = combineReducers({
    selectItem: selectitemreducer,
    addToCart: addToCartItem,
    addItemCount:addItemCount,
    itemDisplayStatusReducer:itemDisplayStatusReducer,
    handleSpecificItemCountReducer:handleItemSpecificCountReducer,
    handleSearchItemFromReducer:handleSearchItemFromReducer
});

export default reducers;

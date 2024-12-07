export const selectedproducts=(item)=>{
    return{
        type:"SELECTED_PRODUCT",
        payload:item,
    }
   
}

export const addToCart=(item)=>{
return{
    type:"ADD_TO_CART",
    payload:item
}
}

export const handleItemCount=(count)=>{
    return{
        type:"HANDLE_ITEM_COUNT",
        payload:count
    }
}

export const itemDisplayStatus=(status)=>{
    return{
        type:"ITEM_DISPLAY_STATUS",
        payload:status
    }
}

export const handleSpecificItemCount = (id, count) => {
    return {
        type: "SPECIFIC_ITEM_COUNT",
        payload: { id, count },
    };
};


export const handleSearchItem=(item)=>{
    return{
        type:"SEARCH_ITEM",
        payload:item
    }
}

export const clearSearchInput =()=>{
    return{
        type:"CLEAR_SEARCH_ITEM",
        
    }
}
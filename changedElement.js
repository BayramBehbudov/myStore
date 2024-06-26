import { create } from 'zustand'

const UseChangedElement = create(set => ({
    pageName: "home",
    selectedCategory: "All",
    selectedProduct: {},
    allReviews: [],
    shopCardItems: [],
    likedProducts: [],


    setshopCardItems: item => set(state => ({ shopCardItems: (state.shopCardItems = [...state.shopCardItems, item]) })),


    setProduct: product => set(state => ({ selectedProduct: (state.selectedProduct = product) })),

    setCategory: category => set(state => ({ selectedCategory: (state.selectedCategory = category) })),

    setPageName: name => set(state => ({ pageName: (state.pageName = name) })),


    deleteProductInShopCard: index => set(state => {
        const updatedItems = [...state.shopCardItems];
        updatedItems.splice(index, 1)
        return { shopCardItems: updatedItems };
    }),
    incrementCount: index => set(state => {
        const updatedItems = [...state.shopCardItems];
        updatedItems[index].count += 1;
        return { shopCardItems: updatedItems };
    }),

    decrementCount: index => set(state => {
        const updatedItems = [...state.shopCardItems];
        if (updatedItems[index].count > 1) {
            updatedItems[index].count -= 1;
        }
        return { shopCardItems: updatedItems };
    })
}))

export default UseChangedElement

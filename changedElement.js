import { create } from 'zustand'

const UseChangedElement = create(set => ({
    pageName: "home",
    selectedCategory: "All",
    selectedProduct: {},
    allReviews: [],
    shopCardItems: [],
    likedProducts: [],

    setReview: review => set(state => ({ allReviews: (state.allReviews = review) })),

    setshopCardItems: item => set(state => ({ shopCardItems: (state.shopCardItems = [...state.shopCardItems, item]) })),


    setProduct: product => set(state => ({ selectedProduct: (state.selectedProduct = product) })),

    setCategory: category => set(state => ({ selectedCategory: (state.selectedCategory = category) })),

    setPageName: name => set(state => ({ pageName: (state.pageName = name) })),
}))

export default UseChangedElement

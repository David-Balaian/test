
import img1 from "../../images/img_1.png"
import img2 from "../../images/img_2.png"
import {
    Dashboard,
    ShoppingList,
    Customer,
} from "../../helpers/Icons"

const initialState = {
    courses: [
        {name: "Illustration", lessons: 24, inMinutes: 134, createDate: 1613466776347, img:img1, id:1, type: "Popular"}, 
        {name: "Graphic design", lessons: 30, inMinutes: 236, createDate: 1613466756347, img:img2, id:2, type: "Favorite"},
        {name: "Graphic design", lessons: 30, inMinutes: 236, createDate: 1613466746347, img:img2, id:3, type: "Favorite"},
        {name: "Graphic design", lessons: 30, inMinutes: 236, createDate: 1613466736347, img:img2, id:4, type: "Popular"},
        {name: "Graphic design", lessons: 30, inMinutes: 236, createDate: 1613466726347, img:img2, id:5, type: "Favorite"},
    ],
    filters: ["Popular", "Favorite", "New"],
    selectedFilter: "Popular",
    filtereds: [],
    leftPanelItems: [
        "dashboard",
        "shoppingList",
        "customer",
    ],
    selectedPanel: "dashboard"

}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case "SELECT_FILTER":
            let filtereds = action.payload === "New" ?
            state.courses.filter(course=>course.createDate>=1613466746347) :
            state.courses.filter(course=>course.type===action.payload)
            return {...state, selectedFilter: action.payload, filtereds: filtereds}
        case "SELECT_PANEL":
            return {...state, selectedPanel: action.payload}
        default:
            return {...state}
    }
}
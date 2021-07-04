import { createContext } from "react";

export const initialData = {
	list: [],
};

export const Context = createContext(initialData);

export const blogReducer = (state, action) => {
	switch (action.type) {
		case "ADD_BLOG":
			let { id, title, blog } = action.payload;
			return {
				...state,
				list: [...state.list, { id: id, title: title, blog: blog }],
			};

		case "REMOVE_BLOG":
			const newData = state.list.filter((element) => {
				return element.id !== action.payload;
			});
			return {
				...state,
				list: newData,
			};

		case "UPDATE_BLOG":
			let data = action.payload.data;
			const Data = state.list.forEach((element, idx) => {
				if (element.id === data.id) {
					state.list.splice(idx, 1, {
						id: data.id,
						title: data.title,
						blog: data.blog,
					});
				}
			});
			return state
		case 'DELETE_ALL':
		return {
			...state,
			list:[]
		}

		default:
			return state;
	}
};

export const addBlog = (data) => {
	return {
		type: "ADD_BLOG",
		payload: {
			id: new Date().getTime().toString(),
			title: data.title,
			blog:data.blog
		},
	};
};

export const removeBlog = (id) => {
	return {
		type: "REMOVE_BLOG",
		payload:id,
	};
};

export const updateBlog = (data) => {
	return {
		type: "UPDATE_BLOG",
		payload: { data },
	};
};

export const deleteAll=()=>{
	return{
		type:'DELETE_ALL'
	}
}
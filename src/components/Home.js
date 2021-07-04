import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { addBlog, removeBlog,updateBlog ,deleteAll} from "../actions/index";
import { Context } from "../reducer/index";
import { useContext, useState } from "react";
const Home = () => {
	const { state, dispatch } = useContext(Context);
	const [title, setTitle] = useState("");
	const [blog, setBlog] = useState("");
const [showupdate,setShowUpdate]=useState(false);
const [id,setId]=useState(0)
const updateData=(id)=>{
	const newdata=state.list.find((element)=>{
	return element.id===id})
	setTitle(newdata.title)
	setBlog(newdata.blog)
	setId(id)
	setShowUpdate(true)

}



	return (
		<div>
			<h2>Blogging Website</h2>
			<br />
			<div className="card w-125 shadow-lg p-3 mb-5 bg-white rounded">
				<h4>Enter your blog</h4>
				<div className="card-body">
					<div className="input-group flex-nowrap">
						<input
							type="text"
							value={title}
							className="form-control"
							placeholder="Username"
							aria-describedby="addon-wrapping"
							placeholder="Enter title"
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<br />
					<div className="input-group">
						<textarea
							value={blog}
							className="form-control"
													placeholder="Enter your content here"
							onChange={(e) => setBlog(e.target.value)}
						></textarea>
					</div>
					<br />

{showupdate?<button
						onClick={() => dispatch(updateBlog({id,title,blog}),setShowUpdate(false),setTitle(''),setBlog(''))}
						className="btn btn-primary"
					>
						Update Blog
					</button>:
<button
						onClick={() => dispatch(addBlog({ title, blog }),setTitle(''),setBlog(''))}
						className="btn btn-primary"
					>
						Add Blog
					</button>

				}

					<button
						onClick={() => dispatch(deleteAll(),setTitle(''),setBlog(''))}
						className="btn btn-danger ms-4"
					>
						Delete All
					</button>

				</div>
			</div>
			<br />

			<div className="row row-cols-1 row-cols-md-2 g-4 ">
				
					{state.list.map((element) => (
						<div className="col" key={element.id}>
						<div
							className="card shadow-lg p-3 mb-5 bg-white rounded"
							
						>
							<div className="card-body">
								<h5 className="card-title">
									{element.title}
									<IconButton
										style={{
											borderRadius: "700px",
											width: "20px",
											marginRight: "0px",
										}}
									onClick={()=>updateData(element.id)}
									>
										<EditIcon />
									</IconButton>
									<IconButton
										style={{
											borderRadius: "700px",
											width: "20px",
										}}
										onClick={() =>
											dispatch(removeBlog(element.id))
										}
									>
										<DeleteIcon />
									</IconButton>
								</h5>

								<p className="card-text">{element.blog}</p>
							</div>
						</div>
						</div>
					))}
				
			</div>
		</div>
	);
};

export default Home;

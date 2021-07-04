import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
const Home = () => {
	return (
		<div>
			<h2>Blogging Website</h2>
			<br />
			<div class="card w-125 shadow-lg p-3 mb-5 bg-white rounded">
				<h4>Blogging</h4>
				<div class="card-body">
					<div class="input-group flex-nowrap">
						<input
							type="text"
							class="form-control"
							placeholder="Username"
							aria-label="Username"
							aria-describedby="addon-wrapping"
							placeholder="Enter title"
						/>
					</div>
					<br />
					<div class="input-group">
						<textarea
							class="form-control"
							aria-label="With textarea"
							placeholder="Enter your content here"
						></textarea>
					</div>
					<br />
					<a href="#" class="btn btn-primary">
						Button
					</a>
				</div>
			</div>
			<br />

			<div class="row row-cols-1 row-cols-md-2 g-4 ">
				<div class="col">
					<div class="card shadow-lg p-3 mb-5 bg-white rounded">
						<div class="card-body">

							<h5 class="card-title">Card title         
						<IconButton
							style={{ borderRadius: "700px", width: "20px" ,marginRight:'0px'}}
						>
							<EditIcon />
						</IconButton>
 <IconButton
							style={{ borderRadius: "700px", width: "20px" }}
						>
							<DeleteIcon />
						</IconButton>

						</h5>
							
							<p class="card-text">
								This is a longer card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						
					</div>
				</div>
				<div class="col">
					<div class="card shadow-lg p-3 mb-5 bg-white rounded">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a longer card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card shadow-lg p-3 mb-5 bg-white rounded">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a longer card with supporting text below
								as a natural lead-in to additional content.
							</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card shadow-lg p-3 mb-5 bg-white rounded">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a longer card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

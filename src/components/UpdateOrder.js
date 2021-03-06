import React, { useRef, useState } from 'react';

const UpdateOrder = ({
	props,
	order,
	setOrders,
	index,
	form,
	showUpdateForm
}) => {
	const [updatedOrder, setUpdatedOrder] = useState([]);
	const selectedDateInput = useRef(null);
	const orderTypeInput = useRef(null);
	const flavorInput = useRef(null);
	const ideasInput = useRef(null);
	const allergiesInput = useRef(null);
	const nameInput = useRef(null);
	const emailInput = useRef(null);

	const fetchData = async () => {
		try {
			const response = await fetch('/api/orders');
			const data = await response.json();
			setOrders(data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleUpdate = async e => {
		e.preventDefault();

		try {
			const response = await fetch(`/api/orders/${e.target.dataset.order}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					selectedDate: selectedDateInput.current.value,
					orderType: orderTypeInput.current.value,
					flavor: flavorInput.current.value,
					ideas: ideasInput.current.value,
					allergies: allergiesInput.current.value,
					name: nameInput.current.value,
					email: emailInput.current.value
				})
			});
			const data = await response.json();
			fetchData();
			setUpdatedOrder(data);
			form(!showUpdateForm);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDelete = async id => {
		try {
			const response = await fetch(`/api/orders/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			setOrders(orders.filter(order => order._id !== id));
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/admin');
		}
	};

	return (
		<div className="UpdateOrder">
			<div className="table-responsive">
				<table className="table table-hover">
					<thead>
						<tr>
							<th scope="col">Order #</th>
							<th scope="col">Pickup/Delivery</th>
							<th scope="col">Order</th>
							<th scope="col">Flavors</th>
							<th scope="col">Design Ideas</th>
							<th scope="col">Allergies</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col"></th>
							<th scope="col"></th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<th scope="row">{index + 1}</th>
							<td>{order.selectedDate}</td>
							<td>{order.orderType}</td>
							<td>{order.flavor}</td>
							<td>{order.ideas}</td>
							<td>{order.allergies}</td>
							<td>{order.name}</td>
							<td>{order.email}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<form
				className="update-form"
				onSubmit={handleUpdate}
				data-order={order._id}
			>
				<tbody>
					<tr>
						<th scope="row">{index + 1}</th>
						<td>
							<input
								type="text"
								id="selectedDate"
								ref={selectedDateInput}
								defaultValue={order.selectedDate}
							/>
						</td>
						<td>
							<input
								type="text"
								id="orderType"
								ref={orderTypeInput}
								defaultValue={order.orderType}
							/>
						</td>
						<td>
							<input
								type="text"
								id="flavor"
								ref={flavorInput}
								defaultValue={order.flavor}
							/>
						</td>
						<td>
							<input
								type="text"
								id="ideas"
								ref={ideasInput}
								defaultValue={order.ideas}
							/>
						</td>
						<td>
							<input
								type="text"
								id="allergies"
								ref={allergiesInput}
								defaultValue={order.allergies}
							/>
						</td>
						<td>
							<input
								type="text"
								id="name"
								ref={nameInput}
								defaultValue={order.name}
							/>
						</td>
						<td>
							<input
								type="email"
								id="allergies"
								ref={emailInput}
								defaultValue={order.email}
							/>
						</td>
						<td>
							<button type="submit">update</button>
						</td>
						<td>
							<button onClick={() => handleDelete(order._id)}>delete</button>
						</td>
					</tr>
				</tbody>
			</form>
		</div>
	);
};

export default UpdateOrder;

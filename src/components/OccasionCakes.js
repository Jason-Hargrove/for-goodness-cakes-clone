import React from 'react';

const OccasionCakes = () => {
	return (
		<div className="Menu-Dropdown">
			<section className="flavors">
				<h2>Flavors</h2>
				<p>Classic Ube 💗</p>
				<p> Chocolate Fudge 💗</p>
				<p> Chocolate with Salted Caramel</p>
				<p> Cookies & Cream </p>
				<p> Funfetti</p>
				<p> Lemon Blueberry</p>
				<p> Marble (chocloate & vanilla)</p>
				<p> Matcha</p>
				<p> Red Velvet 💗</p>
				<p> Vanilla 💗</p>
				<h5>💗 Best Sellers</h5>
			</section>

			<section className="text">
				<h2>Pricing</h2>
				<p>
					There is a minimum of 14 days notice for all custom work, based on
					availability. Deposits must be paid 10 days in advance. We are small
					shop and do book up quickly on weekends/holidays. Please plan advance
					notice for all custom orders!
				</p>
				<p> We require a 50% deposit to hold and confirm custom cake orders.</p>
				<p>
					{' '}
					Completely Custom Designs in our signature buttercream frosting.
					Preorder only. Some cake designs can ONLY be completed in fondant, in
					which case we will let you know. Unlimited flavor combinations.
					Fillings can cost extra.
				</p>
				<p>
					{' '}
					Because our pricing is linked to our time, if you let us know what
					your budget and serving requirements are, we can work with you to
					design a cake to meet your needs.
				</p>
				<p> ​Please visit our FAQ page for all custom cake information</p>
				<p> Buttercream Frosted Custom Cakes</p>
				<p>
					{' '}
					Handmade Fondant accent pieces/figurines/toppers at an additional
					cost. Fondant accent pieces and figurines are priced at an additional
					rate.{' '}
				</p>
				<div className="pricing">
					<h5>ROUND CAKES</h5>
					<p>6” round cake (serves 12) __________ $85</p>
					<p>8” round cake (serves 24) __________ $145</p>
					<p>9” round cake (serves 32) __________ $195</p>
					<p>10” round cake (serves 42) __________ $230</p>
				</div>
				<p className="end-text">
					All prices are a starting cost and includes a personalized topper in
					the color and theme of your choice The exact cake pricing is dependent
					on designs, size, and detail. The pricing here is a general guideline!{' '}
				</p>
			</section>
		</div>
	);
};

export default OccasionCakes;

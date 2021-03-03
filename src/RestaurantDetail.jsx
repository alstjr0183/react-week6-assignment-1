import React from 'react';

export default function RestaurantDetail({ restaurantDetail }) {
  if (!restaurantDetail) {
    return <h3>텅~!</h3>;
  }

  const {
    name, address, menuItems, reviews, information,
  } = restaurantDetail;

  return (
    <div>
      <h2>{name}</h2>
      <div>
        {'주소 : '}
        <p>{address}</p>
      </div>
      <div>
        {'정보 : '}
        <p>{information}</p>
      </div>

      <h3>메뉴</h3>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>

      <h3>리뷰</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

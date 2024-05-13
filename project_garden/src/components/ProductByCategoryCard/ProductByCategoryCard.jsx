import React from 'react'

export default function ProductByCategoryCard({ id, image, title, price, discont_price }) {
    return (
      <div>
        <img src={`http://localhost:3333${image}`} alt={title} />

        <div>
          <p>{title}</p>
          <div>
            <p>
              {"\u0024"}
              {price}
            </p>
            {discont_price ? (
              <span>
                {"\u0024"}
                {discont_price}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
}

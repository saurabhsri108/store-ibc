import { Link } from "react-router-dom";

const OrderListings = ({ items, user }) => {
  return (
    <table style={{ textAlign: "left" }}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.length !== 0 &&
          items.map((item) => {
            return (
              <tr key={user ? item._id : item.id}>
                <td>
                  <Link
                    to={`/products/${item.id}`}
                    style={{ color: "var(--color-black-60)" }}
                  >
                    <img
                      src={user ? item.image : item.image.image}
                      alt={user ? item.name : item.image.alt}
                      width="28"
                    />
                  </Link>
                </td>
                <td>
                  <Link
                    to={
                      user
                        ? `/products/${item.product}`
                        : `/products/${item.id}`
                    }
                    style={{ color: "var(--color-black-60)" }}
                  >
                    {user ? item.name : item.title}
                  </Link>
                </td>
                <td>
                  {user ? (
                    <>{(item.qty * item.price).toFixed(2)}</>
                  ) : (
                    <>
                      {item.qty} x ${item.price} = $
                      {(item.qty * item.price).toFixed(2)}
                    </>
                  )}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default OrderListings;

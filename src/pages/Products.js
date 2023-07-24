import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const ProductsPage = () => {
  const products = PRODUCTS.map((product) => (
    <li key={product.id}>
      <Link to={`/products/${product.id}`}>{product.title}</Link>
    </li>
  ));

  return (
    <>
      <h1>The Products Page</h1>
      <ul></ul>
      <p>
        Go to <Link to="/">home page</Link>
      </p>
      {products}
    </>
  );
};

export default ProductsPage;

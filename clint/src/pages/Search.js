import React from "react";
import Layout from "../../components/Layout"; // Ensure this path is correct
import useSearch from "../../hooks/useSearch"; // Ensure this hook exists and works properly

const Search = () => {
  // Destructure `values` and `setValues` from the custom hook `useSearch`
  const [values, setValues] = useSearch();

  return (
    <Layout title="Search Results">
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          {values?.results?.length < 1 ? (
            <h6>No Products Found</h6>
          ) : (
            <h6>Found {values?.results.length} products</h6>
          )}
        </div>
        <div className="d-flex flex-wrap mt-4">
          {values?.results?.map((product) => (
            <div className="card m-2" style={{ width: "18rem" }} key={product._id}>
              {/* Product Image */}
              <img
                src={`/api/v1/product/product-photo/${product._id}`}
                className="card-img-top"
                alt={product.name || "Product"}
                onError={(e) => {
                  e.target.src = "/default-image.jpg"; // Provide a fallback image path
                }}
              />

              {/* Product Details */}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  {product.description ? product.description.substring(0, 30) + "..." : "No description available"}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price || "N/A"}
                </p>
                <div>
                  <button className="btn btn-primary ms-1">More Details</button>
                  <button className="btn btn-secondary ms-1">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;

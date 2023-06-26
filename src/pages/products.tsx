import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "~/componenets/ui/Button";
import Sidebar from "~/componenets/ui/Sidebar";
import type { GetServerSideProps } from "next";
import Table from "~/componenets/ui/Table";

type ProductRepo = {
  results: Product[];
  count: number;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const getServerSideProps: GetServerSideProps<{
  initialProductData: ProductRepo;
}> = async () => {
  const response = await axios.get<ProductRepo>(
    `${baseURL}/interview-products/?page=1`
  );
  const data = response.data;
  return { props: { initialProductData: data } };
};

const ProductsPage: NextPage<{ initialProductData: ProductRepo }> = ({
  initialProductData,
}) => {
  const [showProductSidebar, setShowProductSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const [currentPage] = useState(1);

  const [productData, setProductData] =
    useState<ProductRepo>(initialProductData);

  const [productID, setProductID] = useState(initialProductData.results[0]?.id);
  const [productName, setProductName] = useState(
    initialProductData.results[0]?.name
  );
  const [productDescription, setProductDescription] = useState(
    initialProductData.results[0]?.description
  );
  const [productPrice, setProductPrice] = useState(
    initialProductData.results[0]?.price
  );

  const [productNameCreate, setProductNameCreate] = useState("");
  const [productDescriptionCreate, setProductDescriptionCreate] = useState("");
  const [productPriceCreate, setProductPriceCreate] = useState(0);

  const tableHeaders = ["SKU", "NAME", "DESCRIPTION", "PRICE"];
  // productData?.results.length > 0
  //   ? Object.keys(productData.results[0] as Product)
  //   : [];

  const toggleProductSidebar = (product: Product) => {
    setShowProductSidebar(true);
    setIsOpen(false);
    setProductID(product.id);
    setProductName(product.name);
    setProductDescription(product.description);
    setProductPrice(product.price);
  };

  const fetchProductData = async () => {
    try {
      const response = await axios.get<ProductRepo>(
        `${baseURL}/interview-products/?page=${currentPage}`
      );
      const data = response.data;
      setProductData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateProduct = async () => {
    try {
      setDisable(true);
      await axios.put<Product>(
        `${baseURL}/interview-product/${String(productID)}/`,
        {
          id: productID,
          name: productName,
          description: productDescription,
          price: productPrice,
        }
      );
      console.log("Product updated successfully");
      fetchProductData().catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setDisable(false);
    }
  };

  const deleteProduct = async () => {
    try {
      setDisable(true);
      await axios.delete<Product>(
        `${baseURL}/interview-product/${String(productID)}/`
      );
      console.log("Product deleted successfully");
      fetchProductData().catch((error) => {
        console.error(error);
      });
      setProductID(productData.results[0]?.id);
      setProductName(productData.results[0]?.name);
      setProductDescription(productData.results[0]?.description);
      setProductPrice(productData.results[0]?.price);
      setShowProductSidebar(false);
    } catch (error) {
      console.error(error);
    } finally {
      setDisable(false);
    }
  };

  const createProduct = async () => {
    try {
      setDisable(true);
      await axios.post<Product>(`${baseURL}/interview-products/`, {
        // id: productID,
        name: productNameCreate,
        description: productDescriptionCreate,
        price: productPriceCreate,
      });
      console.log("Product created successfully");
      fetchProductData().catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setProductNameCreate("");
      setProductDescriptionCreate("");
      setProductPriceCreate(0);
      setDisable(false);
    }
  };

  useEffect(() => {
    fetchProductData().catch((error) => {
      console.error(error);
    });
  }, [currentPage]);

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <Sidebar isOpen={isOpen}>
          <div className="sm:w-1/3 sm:p-4">
            <div className="grid gap-4">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">New Product</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>

              <label
                htmlFor={productName}
                className="block overflow-hidden rounded-md border border-gray-950 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700 ">Name</span>

                <input
                  type="text"
                  id={productName}
                  disabled={disable}
                  placeholder="Give your product a name..."
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={productNameCreate}
                  onChange={(event) => setProductNameCreate(event.target.value)}
                />
              </label>
              <label
                htmlFor={productDescription}
                className="block overflow-hidden rounded-md border border-gray-950 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700 ">
                  Description
                </span>

                <textarea
                  id={productDescription}
                  disabled={disable}
                  placeholder="Provide your product with a description..."
                  rows={4}
                  className="mt-1 w-full resize-none border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={productDescriptionCreate}
                  onChange={(event) =>
                    setProductDescriptionCreate(event.target.value)
                  }
                />
              </label>
              <label
                htmlFor={String(productPrice)}
                className="block overflow-hidden rounded-md border border-gray-950 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700 ">
                  Price
                </span>

                <input
                  type="number"
                  id={String(productPrice)}
                  disabled={disable}
                  value={productPriceCreate}
                  placeholder="99.99"
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  inputMode="numeric"
                  min="0.00"
                  step="0.01"
                  onChange={(event) =>
                    setProductPriceCreate(parseFloat(event.target.value))
                  }
                />
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <button
                  disabled={disable}
                  className="inline-block rounded bg-blue-700 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
                  onClick={async () => {
                    await createProduct();
                    setIsOpen(false);
                  }}
                >
                  Confirm
                </button>
                <button
                  disabled={disable}
                  className="inline-block rounded bg-red-700 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
                  onClick={async () => await createProduct()}
                >
                  Confirm and add another
                </button>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex w-full flex-col">
          <div className="flex flex-row items-center justify-between p-1 sm:p-6">
            <h2 className="text-lg font-bold">Products</h2>
            <Button
              onClick={() => {
                setShowProductSidebar(false);
                setIsOpen(true);
              }}
              backgroundColor={"bg-blue-700"}
              text="Add product"
            />
          </div>
          <div className="flex flex-row items-center justify-between p-1">
            <p className="pl-2 text-xs">{`(${productData.count}) items listed`}</p>
            {/* pagination */}
          </div>

          <Table
            headers={tableHeaders}
            products={productData.results}
            toggleProductSidebar={toggleProductSidebar}
          />
        </div>
        {showProductSidebar && (
          <div className="sm:w-1/4 sm:p-4">
            <div className="grid gap-4">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">{productName}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setShowProductSidebar(false)}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <label
                htmlFor={String(productID)}
                className="block overflow-hidden rounded-md border border-gray-950 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700 ">SKU</span>

                <input
                  type="text"
                  id={String(productID)}
                  disabled={true}
                  placeholder={`sku${String(productID)}`}
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />
              </label>
              <label
                htmlFor={productName}
                className="block overflow-hidden rounded-md border border-gray-950 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700 ">Name</span>

                <input
                  type="text"
                  id={productName}
                  disabled={disable}
                  placeholder="Give your product a name..."
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={productName}
                  onChange={(event) => setProductName(event.target.value)}
                />
              </label>
              <label
                htmlFor={productDescription}
                className="block overflow-hidden rounded-md border border-gray-950 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700 ">
                  Description
                </span>

                <textarea
                  id={productDescription}
                  disabled={disable}
                  placeholder="Provide your product with a description..."
                  rows={4}
                  className="mt-1 w-full resize-none border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  value={productDescription}
                  onChange={(event) =>
                    setProductDescription(event.target.value)
                  }
                />
              </label>
              <label
                htmlFor={String(productPrice)}
                className="block overflow-hidden rounded-md border border-gray-950 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <span className="text-xs font-medium text-gray-700 ">
                  Price
                </span>

                <input
                  type="number"
                  id={String(productPrice)}
                  disabled={disable}
                  placeholder="99.99"
                  className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  inputMode="numeric"
                  value={String(productPrice)}
                  min="0.00"
                  step="0.01"
                  onChange={(event) =>
                    setProductPrice(parseFloat(event.target.value))
                  }
                />
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <button
                  disabled={disable}
                  className="inline-block rounded bg-blue-700 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
                  onClick={async () => await updateProduct()}
                >
                  Edit
                </button>
                <button
                  disabled={disable}
                  className="inline-block rounded bg-red-700 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
                  onClick={async () => await deleteProduct()}
                >
                  Delete
                </button>
                {/* <Button
                  onClick={async () => await updateProduct()}
                  backgroundColor={"bg-blue-700"}
                  text="Edit"
                /> */}
                {/* <Button
                  onClick={async () => await deleteProduct()}
                  backgroundColor={"bg-red-700"}
                  text="Delete"
                /> */}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ProductsPage;

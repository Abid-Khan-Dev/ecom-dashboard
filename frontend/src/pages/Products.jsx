import { useEffect, useState } from "react";
import axios from 'axios'
function Products() {
  const [showForm, setShowForm] = useState(false);



  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [update, setUpdate] = useState('')

  const [getCategories, setGetCategories] = useState('');



  const getProducts = async () => {
    const { data } = await axios.get('http://localhost:4000/products')
    setProducts(data)
  }

  const getCategoriesFromBackend = async () => {
    const { data } = await axios.get('http://localhost:4000/categories')
    setGetCategories(data)
  }

  const handleSubmit = async () => {

    if (update) {
      const { data } = await axios.post('http://localhost:4000/updateProducts', { name, price, category, _id: update._id })
    } else {
      const { data } = await axios.post('http://localhost:4000/products', { name, price, category })
    }

    getProducts()
    setShowForm(false);
  };





  const handleEdit = (data) => {
    setUpdate(data)
    setName(data.name)
    setPrice(data.price)
    setShowForm(true)
  }


  const handleDelete = async (id) => {
    const { data } = await axios.post('http://localhost:4000/deleteProduct', { id })
    getProducts()
  }

  useEffect(() => {
    getCategoriesFromBackend()
    getProducts()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gray-900 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {showForm && (
        <div
          className="bg-white border rounded p-4 mb-6 grid grid-cols-4 gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded px-3 py-2"
          />
          <input
            type="number"
            name="price"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            required
            className="border rounded px-3 py-2"
          />
          {/* Categories */}
          <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
            <option  >Select a category</option>
            {getCategories.map((cate) => {
              return (
                <option value={cate._id}>{cate.name}</option>
              )
            })}
          </select>



          <button
            onClick={handleSubmit}
            className="bg-gray-900 text-white px-4 py-2 rounded"
          >
            {update ? 'Update' : 'Save'}
          </button>
        </div>
      )}

      <table className="w-full bg-white border rounded text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Price</th>
            <th className="p-3">Category</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id} className="border-t">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{product.name}</td>
              <td className="p-3">{product.price}</td>
              <td className="p-3">{product.categoryId}</td>

              <td className="p-3">
                <span className="mr-6" onClick={() => handleEdit(product)}>Edit</span>
                <span onClick={() => handleDelete(product._id)}>Delete</span>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;

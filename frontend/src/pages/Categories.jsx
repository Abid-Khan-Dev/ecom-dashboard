import axios from "axios";
import { useEffect, useState } from "react";

function Categories() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [update, setUpdate] = useState('')

  const getCategories = async () => {
    const { data } = await axios.get('http://localhost:4000/categories')
    setCategories(data)
  }


  const handleSubmit = async () => {

    if (update) {
      const { data } = await axios.post('http://localhost:4000/updateCategory', { name, _id: update._id })
    } else {
      const { data } = await axios.post('http://localhost:4000/categories', { name })
    }

    getCategories()
    setShowForm(false);
  };





  const handleEdit = (data) => {
    setUpdate(data)
    setName(data.name)
    setShowForm(true)
  }


  const handleDelete = async (id) => {
    const { data } = await axios.post('http://localhost:4000/deleteCategory', { id })
    getCategories()
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gray-900 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {showForm && (
        <div
          className="bg-white border rounded p-4 mb-6 flex gap-3"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-1 border rounded px-3 py-2"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-900 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      )}

      <table className="w-full bg-white border rounded text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id} className="border-t">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{category.name}</td>
              <td className="p-3">
                <span className="mr-6" onClick={() => handleEdit(category)}>Edit</span>
                <span onClick={() => handleDelete(category._id)}>Delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Categories;

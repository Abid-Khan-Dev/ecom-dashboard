import { useState } from "react";

function Categories() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ]);
  const handleSubmit = () => {


    setName("");
    setShowForm(false);
  };

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
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id} className="border-t">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Categories;

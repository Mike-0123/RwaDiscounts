import React from 'react';
import { Home, Store, Package, ShoppingCart, Menu, ChevronDown, Plus } from 'lucide-react';

const ProductsPage: React.FC = () => (
  <div className="flex h-screen bg-gray-100">
    
    <div className="flex-1 flex flex-col">      
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">PRODUCTS</h1>
          <div className="text-sm text-indigo-600">
            <span>Home</span>
            <span className="mx-1">/</span>
            <span>Products</span>
          </div>
        </div>
        
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 mb-4 hover:bg-indigo-700 transition duration-300">
          <Plus size={20} />
          <span>Add Product</span>
        </button>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <span>Show</span>
              <select className="border rounded px-2 py-1">
                <option>10</option>
              </select>
              <span>entries</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Search:</span>
              <input type="text" className="border rounded px-2 py-1" />
            </div>
          </div>
          
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th className="pb-2">Image</th>
                <th className="pb-2">Product Name</th>
                <th className="pb-2">Price</th>
                <th className="pb-2">Quantity</th>
                <th className="pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">No data available in table</td>
              </tr>
            </tbody>
          </table>
          
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</span>
            <div className="space-x-2">
              <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">Previous</button>
              <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default ProductsPage;
import { Avatar } from '@mui/material';
import React, { useState } from 'react';

// Define types for the product and order
interface Product {
  name: string;
  image: string;
  price: number;
}

interface Order {
  id: number;
  product: Product;
  quantity: number;
  customerName: string; // New property
  dateTime: string; // New property
  payment: string; // New property (e.g., 'Paid' or 'Pending')
  status: string; // New property (e.g., 'Completed' or 'Pending')
  amount: number; // New property
}

const OrderPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      product: {
        name: 'Product 1',
        image: '/path/to/product1.jpg',
        price: 29.99,
      },
      quantity: 2,
      customerName: 'John Doe',
      dateTime: '2024-10-06 12:00 PM',
      payment: 'Paid',
      status: 'Completed',
      amount: 59.98,
    },
    {
      id: 2,
      product: {
        name: 'Product 2',
        image: '/path/to/product2.jpg',
        price: 45.50,
      },
      quantity: 1,
      customerName: 'Jane Smith',
      dateTime: '2024-10-06 1:00 PM',
      payment: 'Pending',
      status: 'Pending',
      amount: 45.50,
    },
    // Add more orders as needed
  ]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [ordersPerPage] = useState<number>(10);

  // Calculate pagination indices
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Handle pagination changes
  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  // Handle editing an order
  const handleEditOrder = (orderId: number): void => {
    console.log('Editing order:', orderId);
    // Implement your logic to edit the order
  };

  // Handle deleting an order
  const handleDeleteOrder = (orderId: number): void => {
    console.log('Deleting order:', orderId);
    // Implement your logic to delete the order
  };

  return (
    <div className=" h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
       <div className="flex justify-between items-center pl-10">
          <h1 className="text-2xl font-bold text-gray-800">MY CUSTOMERS</h1>
        </div>
        <main className="flex-1  p-6  ">
          
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
              <input type="text" className="border-[2px] rounded px-2 py-1" />
            </div>
          </div>
            <table className="w-full min-h-[50vh]">
              <thead>
                <tr>
                  <th className="pb-2">Image</th>
                  <th className="pb-2">Order</th>
                  <th className="pb-2">Quantity</th>
                  <th className="pb-2">Customer Name</th>
                  <th className="pb-2">Date & Time</th>
                  <th className="pb-2">Payment</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <Avatar
                        // src={order.product.image}
                        alt={order.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td>{order.product.name}</td>
                    <td>{order.quantity}</td>
                    <td>{order.customerName}</td>
                    <td>{order.dateTime}</td>
                    <td>{order.payment}</td>
                    <td>{order.status}</td>
                    <td>{order.amount.toFixed(2)}</td>
                    <td>
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-sm"
                        onClick={() => handleEditOrder(order.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-sm"
                        onClick={() => handleDeleteOrder(order.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

{currentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <Avatar
                        // src={order.product.image}
                        alt={order.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td>{order.product.name}</td>
                    <td>{order.quantity}</td>
                    <td>{order.customerName}</td>
                    <td>{order.dateTime}</td>
                    <td>{order.payment}</td>
                    <td>{order.status}</td>
                    <td>{order.amount.toFixed(2)}</td>
                    <td>
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded-sm"
                        onClick={() => handleEditOrder(order.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-sm"
                        onClick={() => handleDeleteOrder(order.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {currentOrders.length === 0 && (
                  <tr>
                    <td colSpan={9} className="text-center py-4 text-gray-500">
                      No data available in table
                    </td>
                  </tr>
                )}
              </tbody>
            </table> 
            <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-600">Showing 1 to 10 of 100 entries</span>
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
};

export default OrderPage;

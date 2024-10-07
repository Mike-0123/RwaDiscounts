import React, { useState } from "react";
import { Camera } from "lucide-react";

const ProductForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [features, setFeatures] = useState<string[]>([]);
  const [newFeature, setNewFeature] = useState("");

  // New state for form fields and errors
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };
  const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const addFeature = () => {
    if (newFeature.trim()) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const deleteFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  // Validation functions
  const validateStep = (step: number): boolean => {
    let stepErrors: {[key: string]: string} = {};
    let isValid = true;

    if (step === 1) {
      if (!category) {
        stepErrors.category = "Category is required";
        isValid = false;
      }
      if (!title) {
        stepErrors.title = "Title is required";
        isValid = false;
      }
      if (!price || isNaN(Number(price))) {
        stepErrors.price = "Valid price is required";
        isValid = false;
      }
      if (!quantity || isNaN(Number(quantity))) {
        stepErrors.quantity = "Valid quantity is required";
        isValid = false;
      }
      if (!description) {
        stepErrors.description = "Description is required";
        isValid = false;
      }
    } else if (step === 2) {
      if (features.length === 0) {
        stepErrors.features = "At least one feature is required";
        isValid = false;
      }
    }

    setErrors(stepErrors);
    return isValid;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-8 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">PRODUCT</h2>

        <div className="bg-white rounded-lg shadow p-6 flex-grow flex flex-col">
          <div className="flex mb-6">
            <div
              className={`w-1/3 p-4 flex items-center justify-center ${
                currentStep === 1 ? "bg-blue-100 rounded-lg" : ""
              }`}
            >
              <span
                className={
                  currentStep === 1
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500"
                }
              >
                1. Similar Details
              </span>
            </div>
            <div
              className={`w-1/3 p-4 flex items-center justify-center ${
                currentStep === 2 ? "bg-blue-100 rounded-lg" : ""
              }`}
            >
              <span
                className={
                  currentStep === 2
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500"
                }
              >
                2. Product Specifications
              </span>
            </div>
            <div
              className={`w-1/3 p-4 flex items-center justify-center ${
                currentStep === 3 ? "bg-blue-100 rounded-lg" : ""
              }`}
            >
              <span
                className={
                  currentStep === 3
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500"
                }
              >
                3. product Images
              </span>
            </div>
          </div>

          {currentStep === 1 && (
            <form className="space-y-4 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Category name
                  </label>
                  <select 
                    className="w-full p-2 border border-gray-300 rounded"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">... Select...</option>
                    {/* Add your category options here */}
                  </select>
                  {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter title of property"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                  </label>
                  <input
                    type="text"
                    placeholder="Enter price"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Available Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Quantity"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descriptions
                </label>
                <div className="border border-gray-300 rounded">
                  {/* Placeholder for rich text editor */}
                  <div className="flex border border-gray-300 p-2">
                    <button className="p-1 hover:bg-gray-100 rounded">B</button>
                    <button className="p-1 hover:bg-gray-100 rounded">U</button>
                    <button className="p-1 hover:bg-gray-100 rounded">A</button>
                    {/* Add more buttons as needed */}
                  </div>
                  <textarea
                    className="w-full p-2 min-h-[100px]"
                    placeholder="Enter description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <div className="space-y-4 flex-grow">
              <h3 className="text-xl font-semibold">Specifications</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Features :
                </label>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="text"
                      value={feature}
                      readOnly
                      className="flex-grow p-2 border rounded"
                    />
                    <button
                      onClick={() => deleteFeature(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Example: redbeans for baby"
                    className="flex-grow p-2 border rounded"
                  />
                  <button
                    onClick={addFeature}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Add Feature
                  </button>
                </div>
                {errors.features && <p className="text-red-500 text-xs mt-1">{errors.features}</p>}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4 flex-grow">
              <h3 className="text-xl font-semibold">Images</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="relative">
                    <input
                      type="file"
                      id={`image-${index}`}
                      className="hidden"
                      accept="image/*"
                    />
                    <label
                      htmlFor={`image-${index}`}
                      className="flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
                    >
                      <Camera size={48} className="text-gray-400" />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between mt-auto">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Previous
            </button>
            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => {
                  if (validateStep(currentStep)) {
                    /* Handle form submission */
                    console.log("Form submitted successfully");
                  }
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductForm;
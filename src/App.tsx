import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  country: string;
}

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
  });

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleBack = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {!showConfirmation ? (
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                Personal Information
              </h1>

              <form onSubmit={handleSave} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 mt-6"
                >
                  Save
                </button>
              </form>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                Confirmation
              </h1>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-500 mb-1">Name</p>
                  <p className="text-base text-gray-900">{formData.name}</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                  <p className="text-base text-gray-900">{formData.email}</p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-500 mb-1">Country</p>
                  <p className="text-base text-gray-900">{formData.country}</p>
                </div>
              </div>

              <button
                onClick={handleBack}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

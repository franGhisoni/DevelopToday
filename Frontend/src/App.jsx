import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('http://localhost:3000/country/');
                console.log(response);
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Countries</h1>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {countries.map((country) => 
                (
                    <li key={country.countryCode} className="p-4 bg-gray-100 rounded-lg shadow">
                        <Link to={`/country/${country.countryCode}`} className="text-blue-500 hover:underline">
                            {country.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;

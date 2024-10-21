import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './App.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CountryDetail = () => {
    const { code } = useParams();
    const [countryDetail, setCountryDetail] = useState(null);
    const [isOpen, setIsOpen] = useState(false); 
    useEffect(() => {
        const fetchCountryDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/country/${code}`);
                setCountryDetail(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching country details:', error);
            }
        };

        fetchCountryDetail();
    }, [code]);

    if (!countryDetail) {
        return (
            <div className="flex justify-center items-center h-screen">
                <svg className="animate-spin h-10 w-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
            </div>
        );
    }

    const populationData = {
        labels: countryDetail.population.populationCounts.map(population => population.year),
        datasets: [
            {
                label: 'Population',
                data: countryDetail.population.populationCounts.map(population => population.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    return (
        <>
            <Link to={`/`} className="
            text-blue-500 
            hover:underline 
            mb-4 
            inline-block 
            bg-blue-600 
            text-white 
            px-4 
            py-2 
            rounded
            button">
                Back
            </Link>
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold mb-4">{countryDetail.borderCountries.commonName}</h1>
                <div className="flex flex-col space-y-4">
                    <img src={countryDetail.flag.flag} alt={`${countryDetail.borderCountries.commonName} flag`} className="w-32 h-20" />
                    
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Population Change Over Years</h2>
                        <Line data={populationData} />
                    </div>

                    <div>
                        <p className="font-bold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? 'Hide Population Data' : 'Show Population Data'}
                        </p>
                        {isOpen && (
                            <ul>
                                {countryDetail.population.populationCounts.map((population) => (
                                    <li key={population.value}>
                                        <p>Year: {population.year}, Population: {population.value}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <p><strong>Border Countries:</strong></p>
                    <ul>
                        {countryDetail.borderCountries.borders.map((borderCountry) => (
                            <li key={borderCountry.commonName} className="button p-4 bg-gray-150 rounded-lg shadow m-5">
                                <Link to={`/country/${borderCountry.countryCode}`} className="text-blue-500 hover:underline">
                                    {borderCountry.commonName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CountryDetail;

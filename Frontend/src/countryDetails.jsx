import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetail = () => {
    const { code } = useParams();
    const [countryDetail, setCountryDetail] = useState(null);

    useEffect(() => {
        const fetchCountryDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/country/${code}/fullDetails`);
                console.log(response)
                setCountryDetail(response.data);
            } catch (error) {
                console.error('Error fetching country details:', error);
            }
        };

        fetchCountryDetail();
    }, [code]);

    if (!countryDetail) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{countryDetail.name}</h1>
            <div className="flex flex-col space-y-4">
                <img src={countryDetail.flag} alt={`${countryDetail.name} flag`} className="w-32 h-20" />
                <p><strong>Population:</strong> {countryDetail.population}</p>
                <p><strong>Border Countries:</strong> {countryDetail.borderCountries.join(', ')}</p>
            </div>
        </div>
    );
};

export default CountryDetail;

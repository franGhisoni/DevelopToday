import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountryDetail = () => {
    const { code } = useParams();
    const [countryDetail, setCountryDetail] = useState(null);

    useEffect(() => {
        const fetchCountryDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/country/${code}`);
                setCountryDetail(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching country details:', error);
            }
        };

        fetchCountryDetail();
    }, [code]);

    if (!countryDetail) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{countryDetail.borderCountries.commonName}</h1>
            <div className="flex flex-col space-y-4">
                <img src={countryDetail.flag.flag} alt={`${countryDetail.borderCountries.commonName} flag`} className="w-32 h-20" />
                <p><strong>Population:</strong> </p>
                <ul>
                    {countryDetail.population.populationCounts.map((population) => (
                        <li key={population.value}>
                            {population.year}
                            {population.value}
                        </li>
                    ))}
                </ul>
    
                <p><strong>Border Countries:</strong></p>
     


                <ul>
                    {countryDetail.borderCountries.borders.map((borderCountry) => (
                        <li key={borderCountry.commonName}>
                            {borderCountry.commonName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CountryDetail;

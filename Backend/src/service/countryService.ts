import axios from 'axios';

export const getAll = async () => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
        console.log(response.data)
        return response.data; 
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw new Error('Failed to fetch countries'); 
    }
};

export const testCountryService = () => {
    return {jsonResponseTest: "ok"}
}

export const getBorderCountries = async (code:String) =>{
    try {
        const response = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${code}`);
        console.log(response.data)
        return response.data; 
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw new Error('Failed to fetch countries'); 
    }
}

export const getFlag = async (code: string) => {
    try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/images');
        
        if (response.data.error) {
            throw new Error(response.data.msg);
        }
        
        const country = response.data.data.find((country: any) => country.iso3 === code);
        
        if (!country) {
            throw new Error(`Country with ISO3 code ${code} not found`);
        }
        
        return { flag: country.flag, name: country.name };
    } catch (error) {
        console.error('Error fetching flag:', error);
        throw new Error('Failed to fetch flag');
    }
};


export const getPopulation = async (code: string) => {
    try {
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/population');
        
        if (response.data.error) {
            throw new Error(response.data.msg);
        }

        const country = response.data.data.find((country: any) => country.iso3 === code);
        
        if (!country) {
            throw new Error(`Country with ISO3 code ${code} not found`);
        }
        
        return { populationCounts: country.populationCounts, name: country.country };
    } catch (error) {
        console.error('Error fetching population:', error);
        throw new Error('Failed to fetch population');
    }
};


export const getFullDetails = async (code: string) => {
    try {
        const flagInfo = await getFlag(code); 
        const populationInfo = await getPopulation(code); 
        const borderCountriesInfo = await getBorderCountries(code);
        
        return {
            code: code,
            flag: flagInfo,
            population: populationInfo,
            borderCountries: borderCountriesInfo,
        };
    } catch (error) {
        console.error('Error fetching full details:', error);
        throw new Error('Failed to fetch full details');
    }
};

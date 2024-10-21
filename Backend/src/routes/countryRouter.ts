import { Router } from 'express';
import * as countryService from '../service/countryService';

export const countryRouter = Router();

countryRouter.get('/', async (_req, res) => {
    try {
        const countries = await countryService.getAll();
        res.json(countries);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

countryRouter.get('/test', (_req, res) => {
    const response = countryService.testCountryService();
    res.json(response);
});

countryRouter.get('/:code/borderCountries', async (req, res) => {
    const { code } = req.params;
    try {
        const countrieInfo = await countryService.getBorderCountries(code);
        res.json(countrieInfo);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

countryRouter.get('/:code/flag', async (req, res) => {
    const { code } = req.params;
    try {
        const countryInfo = await countryService.getFlag(code);
        res.json(countryInfo);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

countryRouter.get('/:code/population', async (req, res) => {
    const { code } = req.params;
    try {
        const countryInfo = await countryService.getPopulation(code);
        res.json(countryInfo);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});


countryRouter.get('/:code/fullDetails', async (req, res) => {
    const { code } = req.params;
    try {
        const countryInfo = await countryService.getFullDetails(code);
        res.json(countryInfo);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});
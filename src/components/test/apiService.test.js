import { describe, test, expect, beforeAll, afterEach, afterAll } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getDataGlobal, getDataByCountry} from "../services/apiService"

describe('API Service Working', () => {
    let mock;
  
    beforeAll(() => {
      mock = new MockAdapter(axios);
    });
  
    afterEach(() => {
      mock.reset();
    });
  
    afterAll(() => {
      mock.restore();
    });
  
    test('should fetch global COVID data', async () => {
      const mockData = { cases: 1000, deaths: 50, recovered: 900 };
      mock.onGet('https://disease.sh/v3/covid-19/all').reply(200, mockData);
  
      const data = await getDataGlobal();
      expect(data).toEqual(mockData);
    });
  
    test('should fetch COVID data by country', async () => {
      const mockData = [
        { country: 'Country1', cases: 500 },
        { country: 'Country2', cases: 300 },
      ];
      mock.onGet('https://disease.sh/v3/covid-19/countries').reply(200, mockData);
  
      const data = await getDataByCountry();
      expect(data).toEqual(mockData);
    });
  
    test('should handle errors when fetching global COVID data', async () => {
      mock.onGet('https://disease.sh/v3/covid-19/all').reply(500);
  
      await expect(getDataGlobal()).rejects.toThrow('Request failed with status code 500');
    });
  
    test('should handle errors when fetching COVID data by country', async () => {
      mock.onGet('https://disease.sh/v3/covid-19/countries').reply(500);
  
      await expect(getDataByCountry()).rejects.toThrow('Request failed with status code 500');
    });
  });
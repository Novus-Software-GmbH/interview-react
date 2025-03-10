import { Building } from '../types/types';
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

// ----------------------------------------------------------------------

export const fetchAllBuildings = async (): Promise<Building[]> => {
      const response = await axios.create({
        baseURL: "http://localhost:3000",
        headers: {
          'Content-Type': 'application/json',
        },
      }).get<Building[]>('buildings');
  return response.data;
};

export const useFetchAllBuildings = () => 
  useQuery({
    queryKey: ["allBuildings"], 
    queryFn: fetchAllBuildings
  });
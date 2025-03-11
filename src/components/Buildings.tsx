import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import { Building } from '../types/types';
import styles from './MainContent.module.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// ----------------------------------------------------------------------


const fetchAllBuildings = async (): Promise<Building[]> => {
  const response = await axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      'Content-Type': 'application/json',
    },
  }).get<Building[]>('buildings');
return response.data;
};

const useFetchAllBuildings = () => 
  useQuery({
  queryKey: ["query"], 
  queryFn: fetchAllBuildings
  });

const Buildings = () => {

  const { data: allBuildings = [], isLoading } = useFetchAllBuildings();

  return (
    <>
    <div className={styles.page}>
        <h2>Gebäude</h2>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Baujahr</TableCell>
                  <TableCell>Adresse</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allBuildings.map((building: Building) => (
                  <TableRow key={building.id}>
                    <TableCell>{building.id}</TableCell>
                    <TableCell>{building.buildingYear}</TableCell>
                    <TableCell>{JSON.stringify(building.address)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
    </div>
    </>
  );

};

export default Buildings;
import { useFetchAllBuildings } from '../store/buildings.query';
import { Building } from '../types/types';
import styles from './MainContent.module.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// ----------------------------------------------------------------------


const Buildings = () => {

  const { data: allBuildingsJson = [], isLoading } = useFetchAllBuildings();
  const allBuildings = allBuildingsJson.map(bldg => bldg);

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
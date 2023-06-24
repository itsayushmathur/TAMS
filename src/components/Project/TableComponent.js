import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/TableComponent.css';
import { Grid, Paper, Typography } from '@mui/material';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const handleRowClick = (e) => {
    navigate(`/myProject/${e}`);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`/project/getMyProject/1`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        {data.map((row, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{ padding: '16px', cursor: 'pointer' }}
              onClick={() => handleRowClick(row.id)}
            >
              <Typography variant="subtitle1">PID: {row.projectCode}</Typography>
              <Typography variant="subtitle1">Name: {row.projectName}</Typography>
              <Typography variant="subtitle1">Start Date: {row.startDate}</Typography>
              <Typography variant="subtitle1">End Date: {row.endDate}</Typography>
              <Typography variant="subtitle1">Allocation %: {row.allocationCheck}</Typography>
              {/* <Typography variant="subtitle1">Department: {row.department}</Typography> */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TableComponent;
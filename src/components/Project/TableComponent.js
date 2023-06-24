import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Typography } from '@mui/material';

const TableComponent = ({ data }) => {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/myProject/${id}`);
  };

  return (
    <div>
      <Grid container spacing={2}>
        {data.map((row) => (
          <Grid item xs={12} sm={6} md={4} key={row.id}>
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

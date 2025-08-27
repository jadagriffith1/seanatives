"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useGuests } from "../contexts/GuestsContext";

export default function GuestsList() {
  const { guests, isLoading } = useGuests();

  const columns: GridColDef[] = [
    { field: "bookingId", headerName: "Booking ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1.5 },
    { field: "phone", headerName: "Phone", flex: 1 },
  ];

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 500,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ height: 500, width: "100%", maxWidth: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Guests ({guests.length})
      </Typography>
      <DataGrid
        rows={guests}
        columns={columns}
        getRowId={(row) => row.id}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: { paginationModel: { pageSize: 5, page: 0 } },
        }}
        sx={{ width: "100%" }}
      />
    </Box>
  );
}

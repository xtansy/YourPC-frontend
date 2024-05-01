import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        minWidth: 300,
        field: "id",
        headerName: "ID Заказа",
    },
    {
        minWidth: 300,
        field: "date",
        headerName: "Дата заказа",
    },
    {
        minWidth: 300,
        field: "status",
        headerName: "Статус заказа",
    },
    {
        flex: 1,
        field: "customer",
        headerName: "Заказчик",
        description: "This column has a value getter and is not sortable.",
    },
];

const rows = [
    { id: 1, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
    { id: 2, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
    { id: 3, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
    { id: 4, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
    { id: 5, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
    { id: 6, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
    { id: 7, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
    { id: 8, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
    { id: 9, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
    { id: 10, date: "1 Мая, 2023", status: "В пути", customer: "Иван Иванов" },
];

export const OrdersPage = () => {
    return (
        <>
            <Typography variant="h4" sx={{ marginTop: "28px" }}>
                Заказы
            </Typography>
            <Box sx={{ width: "100%" }}>
                <DataGrid
                    autoHeight
                    disableRowSelectionOnClick
                    disableColumnSelector
                    disableColumnResize
                    sx={{ marginTop: "20px", marginBottom: "20px" }}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                />
            </Box>
        </>
    );
};

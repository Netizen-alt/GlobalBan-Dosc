import * as React from 'react';
import { DataTable } from 'mantine-datatable';

interface DialogTabProps {
    head: any,
    rows: unknown[]
}

const theme = {

}

const Table: React.FC<DialogTabProps> = ({
    head,
    rows
}) => {
    return (
        <div style={{ zIndex: 10000 }}>
                <DataTable
                    withBorder={false}
                    fontSize="sm"
                    shadow="xl"
                    borderRadius="sm"
                    withColumnBorders
                    highlightOnHover
                    records={rows}
                    sx={{maxWidth: "60%",marginTop:5, zIndex: 10000, maxHeight: "25%", overflow: "auto"}}
                    columns={head}
                />
        </div>
    );
}

export default Table;
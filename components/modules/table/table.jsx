import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import dados from '../../../dados-desafio.json';

const columns = [
  { field: 'id', headerName: 'Id', width: 200 },
  { field: 'paymentType', headerName: 'Payment Type', width: 160 },
  { field: 'channel', headerName: 'Channel', width: 160 },
  { field: 'status', headerName: 'Status', width: 160 },
  {
    field: 'cnpjRoot',
    headerName: 'Raiz Cnpj',
    width: 90,
  },

];

const DataTable= () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={dados.items}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;

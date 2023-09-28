import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import PropTypes from 'prop-types';

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

const DataTable= (data) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data.data}
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

DataTable.propTypes = {
  data: PropTypes.object,
};

DataTable.defaultProps = {
  data: {},
};

export default DataTable;

import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import useDeviceSelector from '../../../hooks/useDeviceSelector';

const columnsDesktop = [
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

const columnsMobile = [
  { field: 'id', headerName: 'Id', width: 100 },
  { field: 'paymentType', headerName: 'Payment Type', width: 100 },
  { field: 'channel', headerName: 'Channel', width: 100 },
];

const DataTable= (data) => {
  const isMobile = useDeviceSelector(true, false);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data.data}
        columns={isMobile ? columnsMobile : columnsDesktop}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
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

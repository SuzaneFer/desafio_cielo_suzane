import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import useDeviceSelector from '../../../hooks/useDeviceSelector';

const columnsDesktop = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'paymentType', headerName: 'Tipo de Pagamento', width: 160 },
  { field: 'channel', headerName: 'Canal', width: 160 },
  { field: 'status', headerName: 'Status', width: 160 },
  {
    field: 'cnpjRoot',
    headerName: 'Raiz do CNPJ',
    width: 160,
  },
];

const columnsMobile = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'paymentType', headerName: 'Tipo de Pagamento', width: 100 },
  { field: 'channel', headerName: 'Canal', width: 100 },
];

const customLocaleText = {
  toolbarSelection: 'teste',
  paginationRowsPerPage: 'Linhas por página',
};

const DataTable= (data) => {
  const isMobile = useDeviceSelector(true, false);
  const handleRowClick = (params) => {
    console.log('Informações da linha clicada:', params);
  };

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
        onRowClick={handleRowClick}
        localeText={customLocaleText}
        data-cy='table'
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

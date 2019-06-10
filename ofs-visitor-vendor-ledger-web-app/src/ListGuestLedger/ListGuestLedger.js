import React from 'react';
import MaterialTable from 'material-table';
import VisitorView from '../VisitorView/VisitorView';

export default function ListGuestLedger(props) {
    const [state, setState] = React.useState({
      columns: [
        { title: 'Name', field: 'name', filtering: false },
        { title: 'Location', field: 'location', lookup: { "Agate": 'Agate', "Burmite": 'Burmite', "Citrine":"Citrine" },},
        { title: 'Visitor Type', field: 'entry_type', lookup: { "Employee": "Employee", "Visitor":"Visitor", "Vendor":"Vendor"},},
      ],
      data: props.tableValues,
    });

    return (
      <div>

        <MaterialTable
          title="Guest Details"
          columns={state.columns}
          data={state.data}
          options={{
              filtering: true,
              exportButton: true,
              headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                  }
            }}
            detailPanel={rowData => {
              return (
                <VisitorView guestDetail={rowData}/>
              )
            }}
          />
      </div>
    );
  }
import React, {useState,forwardRef} from 'react';
import { useTable, usePagination, useRowSelect } from 'react-table'
import { TodosContext } from '../../../context/GlobalState';
import ButtonComponent from './ButtonComponent';



const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)



const TableComponent = ({columns,data}) => {

 
    const { getTableProps,
            headerGroups, 
            page, 
            prepareRow,
            nextPage,
            previousPage,
            canPreviousPage,
            canNextPage,
            pageOptions,
            selectedFlatRows,
            state: { pageIndex, pageSize, selectedRowIds },
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 10 },
        
      },usePagination,
      
          useRowSelect,
            hooks => {
              hooks.visibleColumns.push(columns => [
                // Let's make a column for selection
                {
                  id: 'selection',
                  // The header can use the table's getToggleAllRowsSelectedProps method
                  // to render a checkbox
                  Header: ({ getToggleAllRowsSelectedProps }) => (
                    <div>
                      <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                    </div>
                  ),
                  // The cell can use the individual row's getToggleRowSelectedProps method
                  // to the render a checkbox
                  Cell: ({ row }) => (
                    <div>
                      <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                    </div>
                  ),
                },
                ...columns,
              ])
        }
      )
      
      
    
    return (
      
        <>
        <table   {...getTableProps()}  className="table table-bordered w-75 text-center">
         <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} >
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}  >
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

        <div className="pagination">

        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
         </button>

         <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
         
          
        </div>

        <ButtonComponent {...selectedFlatRows}/>
      
        
        </>
    );
}

export default TableComponent;



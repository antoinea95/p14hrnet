import { createColumnHelper} from "@tanstack/react-table"

const columnHelper = createColumnHelper();

export const tableColumns = [
     columnHelper.accessor('firstname', {
        header: () => "First Name",
        cell: info => info.getValue(),
        filter: 'fuzzyText'
     }),
     columnHelper.accessor('lastname', {
        header: () => "Last Name",
        cell: info => info.getValue()
     }),
     columnHelper.accessor('dateofbirth', {
        header: () => "Birth Date",
        cell: info => info.getValue()
     }),
     columnHelper.accessor('dateofstart', {
        header: () => "Start Date",
        cell: info => info.getValue()
     }),
     columnHelper.accessor('department', {
        header: () => "Department",
        cell: info => info.getValue()
     }),
     columnHelper.accessor('street', {
        header: () => "Street",
        cell: info => info.getValue()
     }),
     columnHelper.accessor('city', {
        header: () => "City",
        cell: info => info.getValue()
     }),
     columnHelper.accessor('states', {
        header: () => "State",
        cell: info => info.getValue()
     }),
     columnHelper.accessor('zip_code', {
        header: () => "Zip Code",
        cell: info => info.getValue()
     }),
]
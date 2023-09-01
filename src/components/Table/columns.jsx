import { createColumnHelper} from "@tanstack/react-table"
import {PiSignature, PiUserCircleFill, PiPlayFill, PiTagBold, PiMapPinLineBold, PiMapTrifoldFill} from 'react-icons/pi';
import {LiaBirthdayCakeSolid, LiaCitySolid} from 'react-icons/lia';
import {GiPostStamp} from 'react-icons/gi';

const columnHelper = createColumnHelper();

export const tableColumns = [
     columnHelper.accessor('firstname', {
        header: () => <span className="table-header_cell"> <PiUserCircleFill /> First name</span>,
        cell: info => info.getValue(),
        filter: 'fuzzyText'
     }),
     columnHelper.accessor('lastname', {
        header: () => <span className="table-header_cell"> <PiSignature /> Last name</span>,
        cell: info => info.getValue()
     }),
     columnHelper.accessor('dateofbirth', {
        header: () => <span className="table-header_cell"> <LiaBirthdayCakeSolid /> Birth date</span>,
        cell: info => info.getValue()
     }),
     columnHelper.accessor('dateofstart', {
        header: () => <span className="table-header_cell"> <PiPlayFill /> Start date</span>,
        cell: info => info.getValue()
     }),
     columnHelper.accessor('department', {
        header: () => <span className="table-header_cell"> <PiTagBold /> Department</span>,
        cell: info => info.getValue()
     }),
     columnHelper.accessor('street', {
        header: () =>  <span className="table-header_cell"> <PiMapPinLineBold /> Street</span>,
        cell: info => info.getValue()
     }),
     columnHelper.accessor('city', {
        header: () =>  <span className="table-header_cell"> <LiaCitySolid /> City</span>,
        cell: info => info.getValue()
     }),
     columnHelper.accessor('states', {
        header: () => <span className="table-header_cell"> <PiMapPinLineBold /> State</span>,
        cell: info => info.getValue()
     }),
     columnHelper.accessor('zip_code', {
        header: () => <span className="table-header_cell"> <GiPostStamp /> Zip code</span>,
        cell: info => info.getValue()
     }),
]
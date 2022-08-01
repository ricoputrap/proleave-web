import { useEffect, useState } from "react"
import { TableHeaderField, TableRowData } from "../../types/data-table.types"
import { Department } from "../../types/departments.types"

type TableData = [
  headerFields: TableHeaderField[],
  data: TableRowData[]
]

const useDepartmentsTable = (departments: Department[]): TableData => {
  const [tableData, setTableData] = useState<TableData>();
  
  useEffect(() => {
    console.log("===== DEPARTMENTS:", departments)
  }, [departments])

  const headerFields: TableHeaderField[] = [
    { label: "Name" },
    { label: "PIC" },
    { label: "Supervisor" },
    { label: "Members" }
  ];
  
  const data: TableRowData[] = [
    {
      id: 1,
      fieldData: [
        { label: "Engineering", url: "" },
        { label: "Alex", url: "" },
        { label: "Rico", url: "" },
        { label: "4", url: "" },
      ]
    },
    {
      id: 2,
      fieldData: [
        { label: "Finance", url: "" },
        { label: "Alex", url: "" },
        { label: "Bambang", url: "" },
        { label: "2", url: "" },
      ]
    },
    {
      id: 3,
      fieldData: [
        { label: "Human Resources", url: "" },
        { label: "Budi", url: "" },
        { label: "Eko", url: "" },
        { label: "2", url: "" },
      ]
    },
  ]

  return [headerFields, data];
}

export default useDepartmentsTable
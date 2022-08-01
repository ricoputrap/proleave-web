import { useEffect, useMemo, useState } from "react"
import { TableHeaderField, TableRowData } from "../../types/data-table.types"
import { Department } from "../../types/departments.types"

type TableData = [
  headerFields: TableHeaderField[],
  data: TableRowData[]
]

const useDepartmentsTable = (departments: Department[]): TableData => {
  const [tableData, setTableData] = useState<TableRowData[]>([]);
  
  useEffect(() => {
    const computedData: TableRowData[] = [];

    departments.map(dept => {
      const deptData: TableRowData = {
        id: dept.id,
        fieldData: []
      }

      // Name
      deptData.fieldData.push({ 
        id: "name",
        label: dept.name 
      });

      // PIC
      deptData.fieldData.push({
        id: "pic",
        label: dept.pic?.name || "-",
        url: dept.pic?.url || ""
      });

      // Supervisor
      deptData.fieldData.push({
        id: "supervisor",
        label: dept.supervisor?.name || "-",
        url: dept.supervisor?.url || ""
      });

      // Members
      deptData.fieldData.push({
        id: "members",
        label: "0" 
      });

      computedData.push(deptData);
    });

    setTableData(computedData);
  }, [departments]);

  const headerFields: TableHeaderField[] = useMemo(() => {
    return [
      { label: "Name" },
      { label: "PIC" },
      { label: "Supervisor" },
      { label: "Members" }
    ];
  }, []);
  
  return [headerFields, tableData];
}

export default useDepartmentsTable
import { useEffect, useMemo, useState } from "react"
import { TableFieldData, TableHeaderField, TableRowData } from "../../types/data-table.types"
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
      const picData: TableFieldData = {
        id: "pic",
        label: dept.pic?.name || "-"
      }
      if (!!dept.pic) {
        const pic = dept.pic;
        picData.foreignKey = {
          id: pic.id,
          type: pic.type,
          url: pic.url || ""
        }
      }
      deptData.fieldData.push(picData);

      // Supervisor
      const supervisorData: TableFieldData = {
        id: "supervisor",
        label: dept.supervisor?.name || "-"
      }
      if (!!dept.supervisor) {
        const supervisor = dept.supervisor;
        supervisorData.foreignKey = {
          id: supervisor.id,
          type: supervisor.type,
          url: supervisor.url || ""
        }
      }
      deptData.fieldData.push(supervisorData);

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
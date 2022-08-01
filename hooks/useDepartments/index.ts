import React, { useEffect, useState } from 'react'
import { Department } from '../../types/departments.types';

const useDepartments = (data: any[]): Department[] => {
  const [departments, setDepartments] = useState<Department[]>([]);
  
  useEffect(() => {
    if (data.length === 0) return;

    const computedData = data.map(item => {
      const department: Department = {
        id: item.id,
        name: item.attributes.name
      };

      if (item.relationships.pic) {
        const pic: any = item.relationships.pic;
        department.pic = {
          id: pic.data.id,
          name: pic.data.name,
          type: pic.data.type,
          url: pic.url
        }
      }

      if (item.relationships.supervisor) {
        const supervisor: any = item.relationships.supervisor;
        department.supervisor = {
          id: supervisor.data.id,
          name: supervisor.data.name,
          type: supervisor.data.type,
          url: supervisor.url
        }
      }

      return department;
    });

    setDepartments(computedData)
  }, [data]);

  return departments;
}

export default useDepartments
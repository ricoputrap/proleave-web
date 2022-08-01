import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import DepartmentsTable from "../../components/organisms/DepartmentsTable";
import Content from "../../components/templates/Content";
import useDepartments from "../../hooks/useDepartments";

interface Props {
  data: any[]
}

const DepartmentsPage: NextPage<Props> = ({ data }) => {
  const departments = useDepartments(data);
  useEffect(() => {
    console.log("===== departments:", departments)
  }, [departments])
  
  return (
    <Content pageTitle="Departments">
      <DepartmentsTable />
    </Content>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3002/v1/departments");
  const data: any = await res.json();
  const departments: any[] = data.data;

  return {
    props: { 
      data: departments
    }
  }
}

export default DepartmentsPage;
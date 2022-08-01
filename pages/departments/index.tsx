import type { GetServerSideProps, NextPage } from "next";
import DepartmentsTable from "../../components/organisms/DepartmentsTable";
import Content from "../../components/templates/Content";
import useDepartments from "../../hooks/useDepartments";

interface Props {
  data: any[]
}

const DepartmentsPage: NextPage<Props> = ({ data }) => {
  const departments = useDepartments(data);
  
  return (
    <Content pageTitle="Departments">
      <DepartmentsTable departments={ departments } />
    </Content>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
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
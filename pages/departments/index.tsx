import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odio quibusdam, voluptas iste dignissimos incidunt architecto tempore, alias esse, neque mollitia repudiandae natus aliquid impedit numquam exercitationem? Earum, sapiente est!
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
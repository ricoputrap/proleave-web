import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import useDepartments from "../../hooks/useDepartments";

interface Props {
  data: any[]
}

const Departments: NextPage<Props> = ({ data }) => {
  const departments = useDepartments(data);
  useEffect(() => {
    console.log("===== departments:", departments)
  }, [departments])
  
  return (
    <div> Departments </div>
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

export default Departments;
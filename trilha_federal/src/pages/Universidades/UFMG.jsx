import React from "react";
import InstitutionPage from "../../components/InstitutionPage/InstitutionPage";
import universidades from "../Pages_inter/Universidades_inter/universidades.json";

const UFMG = () => {
  const ufmgData = universidades.find((u) => u.sigla === "UFMG");

  if (!ufmgData) {
    return <div>Dados da UFMG não encontrados.</div>;
  }

  return <InstitutionPage {...ufmgData} />;
};

export default UFMG;

import { useState } from "react";

const useCurrentView = () => {
  const [currentView, setCurrentView] = useState<"table" | "form">("table");

  const showTable = () => setCurrentView("table");
  const showForm = () => setCurrentView("form");

  return {
    isFormVisisble: currentView === "form",
    isTableVisible: currentView === "table",
    showTable,
    showForm,
  };
};

export default useCurrentView;

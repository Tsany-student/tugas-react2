import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { StudentProvider } from "./Tugas/StudentContext";
import StudentForm from "./Tugas/StudentFrom";
import StudentTable from "./Tugas/StudentTable";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentProvider>
      <StudentForm />
      <StudentTable />
    </StudentProvider>
  </StrictMode>
);

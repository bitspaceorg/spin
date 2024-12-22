import useAuthStore from "@/stores/AuthStore";
import PatientUpload from "./patient_upload";
import FinanceUpload from "./finance_upload";

const Upload = () => {
  const { user } = useAuthStore();
  if (user && user.role === "finance_manager") return <FinanceUpload />;
  else if (user) return <PatientUpload />;
  else return null;
};

export default Upload;

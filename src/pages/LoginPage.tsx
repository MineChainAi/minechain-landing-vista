
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoginFormComponent } from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-mine-dark flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-24">
        <LoginFormComponent 
          formData={{
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          isSubmitting={false}
          handleChange={(e) => {}}
          handleLogin={(e) => {}}
          handleDemoLogin={() => {}}
        />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

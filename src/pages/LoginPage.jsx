import React from "react";
import Aside from "../components/Aside";
import LoginForm from "../components/AuthForms/LoginForm";

const LoginPage = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <Aside
          imageSrc="https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageAlt="Authentication background"
        />
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;

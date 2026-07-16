import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// layout principal que envuelve la página e incluye los otros componentes

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
}

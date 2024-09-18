import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      {props.children}
      <Footer />
    </div>
  );
}

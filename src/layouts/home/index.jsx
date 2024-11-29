import Header from "../../components/Header";


const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
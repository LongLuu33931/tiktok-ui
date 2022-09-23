import Header from '~/components/Layout/components/Header';
import Sidebar from './SideBar';

function defaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default defaultLayout;

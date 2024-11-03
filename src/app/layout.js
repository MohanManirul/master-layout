
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Menu from './components/Menu';
import Footer from './components/Footer';



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className='container '>
        <Menu />
          {children}
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}

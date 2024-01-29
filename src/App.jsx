import React, { useEffect } from "react";
import reactLogo from './assets/react.svg'
import './App.css'
import Homepage from './pages/home'
import Aboutpage from './pages/about'
import MultiuserWarehousing from './pages/Services/multiuserWarehousing'
import BuiltToSuit from './pages/Services/builtToSuit'

const routes = {
  '/': Homepage,
  '/about': Aboutpage,
  '/services/multiuser-warehousing': MultiuserWarehousing,
  '/services/built-to-suit-warehousing': BuiltToSuit,
};

const App = () => {
  const [currentPath, setCurrentPath] = React.useState(
    // Check if window is defined before accessing it
    (typeof window !== 'undefined' && window.location.pathname) || '/'
  );

  React.useEffect(() => {
    // Update the current path when the URL changes
    const handlePopstate = () => {
      setCurrentPath(window.location.pathname);
    };

    // Add event listener for the popstate event to detect URL changes
    window.addEventListener('popstate', handlePopstate);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Get the component for the current path or default to Home
  const CurrentComponent = routes[currentPath] || Home;

  return <CurrentComponent />;
};




//   return (
//     <>      
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Homepage />}></Route>
//           <Route path='/about' element={<Aboutpage />}></Route>
//         </Routes>        
//       </BrowserRouter>  */}

//       {/* <Homepage />  */}
//       {/* <Aboutpage /> */}
//       {/* <MultiuserWarehousing /> */}

//     </>
//   )
// }

export default App

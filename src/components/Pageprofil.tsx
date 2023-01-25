

import { Fragment, useEffect } from 'react';
import '../components/Pageprofil.css';
import Competence from './Competence';




const Pageprofil = () => {

    useEffect (()=> {
      fetch('http://localhost:3001/utilisateur')
        .then ((response)=>{
            return response.json();
        })
        .then((data)=> {
          console.log(data)
        })
    },[]);

  return (

   <Fragment>
    <Competence/>
   </Fragment>
  );
}
export default Pageprofil;
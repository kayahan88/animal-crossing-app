import React from 'react';
import Header from './Components/Header'
import Island from './Components/Island'
import Pockets from './Components/Pockets'

import "./App.css";

export default function App() {
  return (
    <div className="background">
      <Header />
      <img
          className="islander"
          src="https://previews.dropbox.com/p/thumb/ABEM3WMs_SQWgHjq6Tj9RIogBm1rsSzp4uE7nLQS8lxWqP8dDaUjEG1vHa43S382tumODOTvlltfnMH05PkD5lF69sOPu8WRTV7bu65FywQlBfyjRN99S9QUQ9n8H9yL3XcI1MGvz5BAfUPlXqHwBdSWDPXVTfIsmILeto_ePG9EDgY7UbCnHCzd_yuQQ_puBUEHyZhvAag7rX2xd3wrGWzE-o3V8pPChkUanwODK7VMiPdBiYE5lFLocFkniPPgzfKuKfEJL3GVcHjg6gKcR4zsw5taYo5_51TVvOVoaB9ZdKWohDWWnkRTRfmkXeJN_nSPQiB6bjE5USASRi86Yj88EhirCul0c0Y6QbFN7a989w/p.png?fv_content=true&size_mode=5"
          alt=''
        />
      
      <Island />
    </div>
  );
}





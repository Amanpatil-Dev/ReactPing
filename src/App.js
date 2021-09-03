import Header from "./Components/header/header";

import Banner from "./Components/body/banner";

import Footer from "./Components/footer/footer";
import { useState } from "react";

function App() {

  const [initialModal, setModal] = useState("")

  const ModalMsg = (mssg) => {

    setModal(mssg)

  }

  const closeModal=()=>{

    setModal("")

  }

  
  

  return (
    <div>
      {initialModal ? (<div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success </strong>

        {initialModal}

        <button onClick={closeModal} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>) : <p></p>}




      <section className="container">

        <Header onGettingModalMssg={ModalMsg} />

        <Banner />

        <Footer />

      </section>
    </div>
  );
}

export default App;

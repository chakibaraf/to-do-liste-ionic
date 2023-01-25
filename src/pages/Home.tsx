import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './Home.css';

import Pageprofil from '../components/Pageprofil';

const Home: React.FC = () => {

  const items = ["john doe", "john rachid", "john pablo"];
  return (
    
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>compétence</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <Pageprofil/>
     
    </IonContent>
  </IonPage>
);
};

export default Home;

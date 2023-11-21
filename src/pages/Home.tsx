// Home.tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Home.css';
import TableComponent from '../components/TableComponent';

const Home: React.FC = () => {
  const [data, setData] = useState([
    { idsaison:1,idjoueur:1,nomjoueur:'James Harden',photo:'photo.jsp',idequipe:1,nomequipe:'Bulls', nbmatch:3,matchjoue:2,timetotal:'00:30:22',
      action:[
        {idsaison:1,idjoueur:1,idactiontype:1,nomaction:'Panier 3 points',sumpoints:9,nbaction:3},
        {idsaison:1,idjoueur:1,idactiontype:1,nomaction:'Panier 2 points',sumpoints:4,nbaction:2},
        {idsaison:1,idjoueur:1,idactiontype:1,nomaction:'Lancee',sumpoints:3,nbaction:3},
        {idsaison:1,idjoueur:1,idactiontype:1,nomaction:'Rebond O',sumpoints:0,nbaction:0},
        {idsaison:1,idjoueur:1,idactiontype:1,nomaction:'Rebond D',sumpoints:0,nbaction:0},
        {idsaison:1,idjoueur:1,idactiontype:1,nomaction:'Passe D',sumpoints:0,nbaction:0}
      ]
    },
    { idsaison:1,idjoueur:2,nomjoueur:'Le King',photo:'photo.jsp',idequipe:1,nomequipe:'Lakers', nbmatch:3,matchjoue:2,timetotal:'00:33:22',
      action:[
        {idsaison:1,idjoueur:2,idactiontype:1,nomaction:'Panier 3 points',sumpoints:0,nbaction:0},
        {idsaison:1,idjoueur:2,idactiontype:1,nomaction:'Panier 2 points',sumpoints:0,nbaction:0},
        {idsaison:1,idjoueur:2,idactiontype:1,nomaction:'Lancee',sumpoints:0,nbaction:0},
        {idsaison:1,idjoueur:2,idactiontype:1,nomaction:'Rebond O',sumpoints:0,nbaction:0},
        {idsaison:1,idjoueur:2,idactiontype:1,nomaction:'Rebond D',sumpoints:0,nbaction:4},
        {idsaison:1,idjoueur:2,idactiontype:1,nomaction:'Passe D',sumpoints:0,nbaction:0}
      ]
    },
    { idsaison:1,idjoueur:3,nomjoueur:'Kevin Durant',photo:'photo.jsp',idequipe:1,nomequipe:'Golden', nbmatch:3,matchjoue:2,timetotal:'00:40:22',
    action:[
      {idsaison:1,idjoueur:3,idactiontype:1,nomaction:'Panier 3 points',sumpoints:0,nbaction:0},
      {idsaison:1,idjoueur:3,idactiontype:1,nomaction:'Panier 2 points',sumpoints:0,nbaction:0},
      {idsaison:1,idjoueur:3,idactiontype:1,nomaction:'Lancee',sumpoints:0,nbaction:0},
      {idsaison:1,idjoueur:3,idactiontype:1,nomaction:'Rebond O',sumpoints:0,nbaction:5},
      {idsaison:1,idjoueur:3,idactiontype:1,nomaction:'Rebond D',sumpoints:0,nbaction:0},
      {idsaison:1,idjoueur:3,idactiontype:1,nomaction:'Passe D',sumpoints:0,nbaction:0}
    ]
  },
  { idsaison:1,idjoueur:4,nomjoueur:'Curry',photo:'photo.jsp',idequipe:1,nomequipe:'Golden', nbmatch:3,matchjoue:2,timetotal:'00:10:22',
    action:[
      {idsaison:1,idjoueur:4,idactiontype:1,nomaction:'Panier 3 points',sumpoints:0,nbaction:0},
      {idsaison:1,idjoueur:4,idactiontype:1,nomaction:'Panier 2 points',sumpoints:4,nbaction:2},
      {idsaison:1,idjoueur:4,idactiontype:1,nomaction:'Lancee',sumpoints:0,nbaction:0},
      {idsaison:1,idjoueur:4,idactiontype:1,nomaction:'Rebond O',sumpoints:0,nbaction:0},
      {idsaison:1,idjoueur:4,idactiontype:1,nomaction:'Rebond D',sumpoints:0,nbaction:0},
      {idsaison:1,idjoueur:4,idactiontype:1,nomaction:'Passe D',sumpoints:0,nbaction:4}
    ]
},
    // ... Ajoutez d'autres données selon vos besoins
  ]);
  useIonViewWillEnter(() => {
    // Vous pouvez mettre ici la logique pour récupérer les données si nécessaire
  });

  const refreshData = async () => {
    // Mettez ici la logique pour rafraîchir les données
    // Par exemple, récupérez à nouveau les données du serveur
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>NBA Statick</IonTitle>
        </IonToolbar>
      </IonHeader>
      <TableComponent data={data} onRefresh={refreshData} />
    </IonPage>
  );
};
export default Home;

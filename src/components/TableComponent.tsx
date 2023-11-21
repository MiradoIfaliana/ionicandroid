import React, { useState } from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';

interface TableComponentProps {
  data: {
     idsaison: number,idjoueur: number,nomjoueur: string,photo:string,idequipe:number,nomequipe:string, nbmatch:number,matchjoue:number,timetotal:string,
     action:{ idsaison: number,idjoueur: number,idactiontype: number,nomaction: string,sumpoints: number,nbaction: number }[] }[];
  onRefresh: () => void;
}

const TableComponent: React.FC<TableComponentProps> = ({ data, onRefresh }) => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async (e: CustomEvent) => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
    e.detail.complete();
  };

  return (
    <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <IonList>
        <IonItem>
          <IonLabel>Idsaison</IonLabel>
          <IonLabel>Joueur</IonLabel>
          <IonLabel>Equipe</IonLabel>
          <IonLabel>Nb Match</IonLabel>
          <IonLabel>nb Joue</IonLabel>
          <IonLabel>Time total</IonLabel>

          <IonLabel>3pts</IonLabel>
          <IonLabel>2pts</IonLabel>
          <IonLabel>Lancee</IonLabel>
          <IonLabel>Rebond O</IonLabel>
          <IonLabel>Rebond D</IonLabel>
          <IonLabel>Passe D</IonLabel>
        </IonItem>
        {data.map((item) => (
          <IonItem >
            <IonLabel>{item.idsaison}</IonLabel>
            <IonLabel>{item.nomjoueur}</IonLabel>
            <IonLabel>{item.nomequipe}</IonLabel>
            <IonLabel>{item.nbmatch}</IonLabel>
            <IonLabel>{item.matchjoue}</IonLabel>
            <IonLabel>{item.timetotal}</IonLabel>
            
            {item.action.map((item1) => (
              <IonLabel>{item.timetotal}</IonLabel>
            ))}
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default TableComponent;

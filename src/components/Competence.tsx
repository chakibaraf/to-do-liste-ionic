import React from 'react'
import { IonCard, IonItem, IonInput, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

interface Props {
    items: string[]
}

const Competence = ({props:Props})=> {

    return (

        <div className='competenceliste'>
            {
                props.map((des) => (
                    <div className='descr' key={des.id}>
                        <IonItem className='ajout'>
                            <IonInput placeholder="ajout de compétence" />
                        </IonItem>

                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>JAVA</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>

                            </IonCardContent>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>SPRING {des.competence}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>

                            </IonCardContent>
                        </IonCard>
                    </div>
                ))
            }
        </div>

    );

}

export default Competence;
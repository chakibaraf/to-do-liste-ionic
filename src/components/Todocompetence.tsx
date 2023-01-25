
import { IonList, IonItem, IonLabel, IonInput, IonButton, useIonAlert, IonItemSliding, IonItemOptions } from "@ionic/react";
import { useState } from "react";


interface Props {
    items: string[];
}


export const Todocompetence = (props:Props) => {
 
    const [todos, setTodos] = useState<string[]>(props.items);
    const [newTodo, setNewTodo] = useState<string>("");
    const [emptyAlert] = useIonAlert();

    const handleSlide = (event: any, index: number) => {
        if (event.detail.amount > 100) {
            handleDelete(index);
        }
    };
    const handleChange = (event: any) => {
        setNewTodo(event.target.value);
    };

    const handleDelete = (index: number) => {
        setTodos(todos.filter((item, i) => i !== index));
    };

    const addTodo = () => {
        if (newTodo === "") {
            emptyAlert({
                header: "Erreur",
                message: " saisir utilisateur",
                buttons: ["OK"],
            });
            return;
        }
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };
    return (
        <IonList>
            {
                todos.map((item, index) => {
                    return (
                        <IonItemSliding key={index} onIonDrag={(event)=>handleSlide(event, index)}>
                            <IonItem key={index}>
                               
                                <IonLabel>{item}</IonLabel>
                                <IonButton slot="end" onClick={()=>handleDelete(index)}>Supprimer</IonButton>
                            </IonItem>
                            <IonItemOptions side="end">supprimer</IonItemOptions>
                        </IonItemSliding>

                        
                    );
                })
            }
            <IonItem>
                <IonInput placeholder="Ajouter utlisateur" onIonChange={handleChange} value={newTodo} />
            </IonItem>
            <IonItem>
                <IonButton onClick={addTodo}>Ajouter utilisateur</IonButton>
            </IonItem>
        </IonList>
  )
};

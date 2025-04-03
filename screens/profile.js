import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import ButtonCustomized from "./components/ButtonCustomized";
import ProfileBox from "./components/profileBox";
import AddProfileModal from "./components/addProfileModal";
import EditModal from "./components/editModal";

export default function Profile() {
  const [isVisible, setIsVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // Stato per la modalità di modifica
  const [users, setUsers] = useState([]); // Stato locale per i profili

  //funzione per aggiungere un utente
  const addUser = (NewUser) => {
    setUsers((prevUser) => [
      ...prevUser,
      {
        text: NewUser,
        backgroundColor: getRandomColor(),
        id: Math.random().toString(),
      },
    ]);
  };

  //funzioni per aprire/chiudere il modale per aggiungere un utente
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };



  //funzioni per eliminare l'utente
  const openDeleteModal = () => {
    setIsEditMode(true);
  };
  const closeDeleteModal = () => {
    setIsEditMode(false);
  };

  //funzioni per eliminare un utente
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };


  return (
    <>
      <View style={{ backgroundColor: "#272A2C", flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.text}>Chi vuole guardare Netflix?</Text>
          <ButtonCustomized text={"Modifica"} onPress={openDeleteModal} />
        </View>
        <View style={styles.boxsUsers}>
          {users.map((user) => (
            <ProfileBox
              key={user.id}
              backgroundColor={user.backgroundColor}
              name={user.text}
            />
          ))}
          <TouchableWithoutFeedback onPress={openModal}>
            <View>
              <View style={styles.otherBox}>
                <Text style={styles.plus}>+</Text>
              </View>
              <View style={styles.extraBox}>
                <Text style={styles.addText}>Aggiungi un profilo</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <AddProfileModal
          visible={isVisible}
          closeModal={closeModal}
          //passiamo la funzione come prop
          addUser={addUser}
          getRandomColor={getRandomColor}
        />
        <EditModal
          visible={isEditMode}
          closeModal={closeDeleteModal}
          users={users}
          deleteUser={deleteUser}
        />
      </View>
    </>
  );
}

const getRandomColor = () => {
  const colors = [
    "#7AABD1",
    "#F15449",
    "#F1BA2D",
    "#81DF5F",
    "#CB5FDC",
    "#39E4E4",
    "#F1AB75",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    marginTop: 55,
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  boxsUsers: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "25%",
  },
  box: {
    borderWidth: 0.5,
    borderColor: "#fff",
    width: 130,
    height: 130,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  otherBox: {
    borderWidth: 0.5,
    borderColor: "#fff",
    width: 130,
    height: 130,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    fontSize: 55,
    color: "#fff",
  },
  extraBox: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontSize: 17,
  },
});

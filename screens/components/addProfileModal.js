import { View, Text, StyleSheet, Modal, TextInput, Switch } from "react-native";
import { useState } from "react";
import ButtonCustomized from "./ButtonCustomized";
import ProfileBox from "./profileBox";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function AddProfileModal({ visible, closeModal, addUser, getRandomColor }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState("");
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  //funzione per passare i dati del nuovo utente
  const handleAddUser = () => {
    if (text.trim() === "") {
      alert("Inserisci il nome del profilo");
      return;
    }
    addUser(text);
    setText("");
    closeModal();
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.general}>
        <View style={styles.firstContainer}>
          <ButtonCustomized text="Annulla" onPress={closeModal} />
          <Text style={styles.text}>Aggiungi un profilo</Text>
          <ButtonCustomized text="Salva" onPress={handleAddUser} />
        </View>
        <View style={styles.secondContainer}>
          <ProfileBox backgroundColor={"#F15449"} name={""}></ProfileBox>
          <TextInput
            placeholder="Nome profilo"
            placeholderTextColor={"#fff"}
            style={styles.input}
            value={text}
            onChangeText={setText}
          ></TextInput>
          <Switch
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
            trackColor={{ false: "#787D80", true: "#81b0ff" }}
            color={"#fff"}
          ></Switch>
          <Text style={styles.firstText}>Profilo bambini</Text>
          <Text style={styles.secondText}>
            Su misura per bambini fino a 12 anni, ma con il pieno controllo dei
            genitori.
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: "#272A2C",
  },
  firstContainer: {
    marginTop: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  secondContainer: {
    alignItems: "center",
    height: "100%",
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#fff",
    padding: 13,
    width: "60%",
    marginVertical: 15,
    color: "#fff",
  },
  switch: {
    marginVertical: 15,
  },
  firstText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  secondText: {
    color: "#fff",
    width: "70%",
    marginTop: 10,
    textAlign: "center",
  },
});

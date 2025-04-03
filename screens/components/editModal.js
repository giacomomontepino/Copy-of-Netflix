import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProfileBox from "./profileBox";
import ButtonCustomized from "./ButtonCustomized";

export default function EditModal({ visible, closeModal, users, deleteUser }) {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.general}>
        <View style={styles.header}>
          <Text style={styles.text}>Seleziona i profili da eliminare</Text>
          <ButtonCustomized text={"Fine"} onPress={closeModal} />
        </View>

        <View style={styles.boxsUsers}>
          {users.map((user) => (
            <View key={user.id} style={styles.profileContainer}>
              <ProfileBox
                backgroundColor={user.backgroundColor}
                name={user.text}
              />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteUser(user.id)}
              >
                <AntDesign name="delete" size={60} color="#494644" />
              </TouchableOpacity>
            </View>
          ))}
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  profileContainer: {
    position: "relative",
    margin: 5,
  },
  deleteButton: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
},
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#272A2C",
    height: "20%",
  },
});

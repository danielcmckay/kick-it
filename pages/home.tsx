import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Button,
  TextInput,
} from "react-native";
import Picker from "@ouroboros/react-native-picker";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Currently tracking</Text>
      <Pressable style={styles.actionBtn} onPress={() => setShowModal(true)}>
        {() => <Text>+</Text>}
      </Pressable>
      <Modal
        presentationStyle="pageSheet"
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        animationType="slide"
      >
        <View style={styles.modal}>
          <Text>Create new goal</Text>
          <View style={styles.modalForm}>
            <View style={styles.modalFormRow}>
              <Text>Name</Text>
              <TextInput style={styles.modalFormInput} placeholder="Name" />
            </View>
            <View style={styles.modalFormRow}>
              <Text>Description</Text>
              <TextInput
                style={styles.modalFormInput}
                placeholder="Description"
              />
            </View>
            <View style={styles.modalFormRow}>
              <Text>Weekly cost</Text>
              <TextInput
                style={styles.modalFormInput}
                placeholder="Weekly cost"
              />
            </View>
            <View style={styles.modalFormRow}>
              <Text>Frequency goal</Text>
              <View style={styles.modalFormRow}>
                <Picker
                  onChanged={() => {}}
                  options={[{ value: "weekday", text: "Days of the week" }]}
                  style={{
                    borderWidth: 1,
                    borderColor: "#a7a7a7",
                    borderRadius: 5,
                    marginBottom: 5,
                    padding: 5,
                  }}
                  value={"picker"}
                />
              </View>
              <View style={styles.weekdayRow}>
                {["M", "T", "W", "R", "F", "S", "U"].map((day) => (
                  <View style={styles.weekdayBtn}>
                    <Text>{day}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.modalButtonRow}>
            <Button title="Cancel" onPress={() => setShowModal(false)} />
            <Button title="Save" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  actionBtn: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "green",
    color: "white",
    position: "absolute",
    top: 650,
    right: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: "100%",
    paddingHorizontal: 25,
    paddingVertical: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalButtonRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalForm: {
    display: "flex",
    width: "100%",
  },
  modalFormRow: {
    marginVertical: 15,
  },
  modalFormInput: {
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
  },
  weekdayRow: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  weekdayBtn: {
    height: 25,
    width: 25,
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

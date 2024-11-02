import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function AddModal(action: () => void) {
  const [title, onChangeTitle] = useState("");
  const [desc, onChangeDesc] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Modal visible={isVisible} style={style.modal}>
        <View style={style.inputArea}>
          <Text style={style.label}>Titulo:</Text>
          <TextInput
            value={title}
            onChangeText={onChangeTitle}
            style={style.input}
          />
        </View>
        <View style={style.inputArea}>
          <Text style={style.label}>Descrição:</Text>
          <TextInput
            value={desc}
            onChangeText={onChangeDesc}
            style={style.input}
          />
        </View>
        <TouchableOpacity onPress={action} style={style.touchable}>
          <Text>Gerar Task</Text>
        </TouchableOpacity>
      </Modal>
      <View>
        <TouchableOpacity
          onPress={() => setIsVisible(true)}
          style={style.touchable}
        >
          <Text>Adicionar Task</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  label: {},
  input: {},
  inputArea: {},
  modal: {},

  // Button area

  area: {},
  touchable: {},
});

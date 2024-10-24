import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // Containers
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
  },
  subContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  // Text
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // dark color for titles
    textAlign: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555", // slightly lighter color for subtitles
    textAlign: "center",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#333", // general text color
    lineHeight: 22, // improves readability
    textAlign: "left",
  },
  lightText: {
    fontSize: 16,
    color: "#555", // lighter text for secondary information
    lineHeight: 22,
    textAlign: "left",
  },
  darkText: {
    fontSize: 16,
    color: "#000", // black text for primary information
    lineHeight: 22,
    textAlign: "left",
  },
  // Buttons
  button: {
    backgroundColor: "#007BFF", // blue button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // white text for buttons
    fontSize: 16,
    fontWeight: "bold",
  },
  // Input Fields
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
  },
});

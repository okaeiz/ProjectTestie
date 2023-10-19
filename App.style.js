import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeButton: {
    flex: 1,
    backgroundColor: "#8c2230",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#deb99d",
    borderWidth: 8,
    borderRadius: 15,
    elevation: 5, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.25, // for iOS shadow
    shadowRadius: 3.84, // for iOS shadow
    paddingVertical: 10, // Increase padding
  },
  linksText: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: 'Lalezar_400Regular',
    color: "#deb99d",
  },
  linksBox1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#8c2230",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#deb99d",
    borderWidth: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  linksBox2: {
    flex: 1,
    backgroundColor: "#8c2230",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#deb99d",
    borderWidth: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  linksBox3: {
    flex: 1,
    backgroundColor: "#8c2230",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#deb99d",
    borderWidth: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  linksBox4: {
    flex: 1,
    backgroundColor: "#8c2230",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#deb99d",
    borderWidth: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  input: {
    flex: 0.25,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lalezar_400Regular',
    fontSize: 25,
    color: "#8c2230",
    paddingLeft: 30,
  },
  loginButton: {
    flex: 0.15,
    backgroundColor: '#8c2230',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    flex: 1,
    fontFamily: 'Lalezar_400Regular',
    fontSize: 30,
    color: '#deb99d',
    textAlignVertical: 'center',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8c2230',
    backgroundColor: '#8c2230',
    borderWidth: 15,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 20, // Add some padding
  },
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#deb99d',
    padding: 10, // Add some padding to the inner content if needed
  },
  welcomeText: {
    fontSize: 30,
    fontFamily: 'Lalezar_400Regular',
    color: '#deb99d',
  },
  calendarContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8c2230',
    backgroundColor: '#8c2230',
    borderWidth: 15,
    borderRadius: 15,
    overflow: 'hidden',
    paddingHorizontal: 80,
  },
  calendarOuterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#deb99d',
    padding: 10,
  },
  calendarText: {
    fontSize: 70,
    fontFamily: 'Lalezar_400Regular',
    color: '#deb99d',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#deb99d',
    padding: 10,
  },
  button: {
    width: '30%',
    padding: 10,
    backgroundColor: '#8c2230',
    borderRadius: 15,
    margin: 5,
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Lalezar_400Regular',
    color: '#deb99d',
  },
  poweredByContainer: {
    padding: 10,
    backgroundColor: '#deb99d',
  },
  poweredByText: {
    textAlign: 'center',
    fontFamily: 'Bangers_400Regular',
    color: '#8c2230',
  },
  //
  container: {
    flex: 1,
    backgroundColor: '#deb99d',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  loginForm: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input2: {
    flex: 0.25,
    width: '100%',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'Lalezar_400Regular',
  },
  loginButton2: {
    backgroundColor: '#8c2230',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText2: {
    color: '#deb99d',
    fontFamily: 'Lalezar_400Regular',
    fontSize: 25,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontFamily: 'Lalezar_400Regular',
    textAlign: 'center',
  },
  //
  container2: {
    flex: 1,
    backgroundColor: '#deb99d',
  },
  linksRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  linkBox: {
    backgroundColor: '#8c2230',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: '70%',
  },
  linkText: {
    marginTop: 10,
    color: '#deb99d',
    fontFamily: 'Lalezar_400Regular',
    fontSize: 20,
  },
  scrumDailyProjectsContainer: {
    flex: 2,
    backgroundColor: '#deb99d',
    alignItems: 'center',
    marginTop: 10,
    color: '#deb99d',
  },
  scrumDailyProjects: {
    flex: 1,
    backgroundColor: '#8c2230',
    justifyContent: 'center',
    marginTop: 40,
    padding: 10,
    borderRadius: 15,
    borderWidth: 8,
    color: '#deb99d',
    borderColor: "#8c2230",
    elevation: 5, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.25, // for iOS shadow
    shadowRadius: 3.84, // for iOS shadow
    width: '40%'
  },
  scrumDailyProjectsText: {
    fontFamily: 'Lalezar_400Regular',
    fontSize: 22,
    color: '#deb99d',
    textAlign: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#deb99d',
    position: 'absolute',
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: '#deb99d',
    position: 'absolute',
  },

});


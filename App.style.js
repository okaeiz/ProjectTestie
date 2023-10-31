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

export const login_styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#deb99d',
    padding: 20,  // Added padding to give some space around the edges
  },
  loginForm: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginInput: {
    flex: 0.25,
    width: '90%',  // Reduced width to give some breathing room
    padding: 15,
    marginBottom: 15,  // Increased margin-bottom for more spacing
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,  // Increased border radius for softer corners
    fontFamily: 'Lalezar_400Regular',
    elevation: 3,  // Added shadow for Android
    shadowColor: '#000',  // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  loginButton2: {
    backgroundColor: '#8c2230',
    paddingVertical: 12,  // Increased vertical padding for bigger touch target
    paddingHorizontal: 15,
    borderRadius: 10,  // Increased border radius for softer corners
    width: '90%',  // Reduced width to match input fields
    alignItems: 'center',
    elevation: 5,  // Added shadow for Android
    shadowColor: '#000',  // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  loginButtonText2: {
    color: '#deb99d',
    fontFamily: 'Lalezar_400Regular',
    fontSize: 25,
  },
  loginErrorText: {
    color: 'red',
    marginBottom: 15,  // Increased margin-bottom for more spacing
    fontFamily: 'Lalezar_400Regular',
    textAlign: 'center',
  },
});

export const daily_scrum_styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8c2230',
    padding: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontFamily: 'Lalezar_400Regular',
    color: '#deb99d',
    marginBottom: 10,  // Added some bottom margin for spacing
  },
  scrumDailyProjectsContainer: {
    flex: 2,
    backgroundColor: '#deb99d',
    alignItems: 'center',
    paddingTop: 20,  // Added top padding for spacing
  },
  scrumDailyProjects: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 25,  // Reduced the top margin for a more compact look
    marginBottom: 10,  // Added bottom margin for spacing between items
    padding: 15,  // Increased padding for a more touch-friendly area
    borderRadius: 20,  // Increased border radius for a modern look
    borderColor: "#8c2230",
    borderWidth: 5,  // Reduced border width
    elevation: 5,  // Shadow for Android
    shadowColor: "#000",  // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '85%',  // Increased width for a more prominent appearance
  },
  scrumDailyProjectsText: {
    fontFamily: 'Lalezar_400Regular',
    fontSize: 22,
    color: '#deb99d',
    textAlign: 'center',
  },
});

export const meetings_styles = StyleSheet.create({
  dailyScrumContainer: {
    flex: 1,
    backgroundColor: '#deb99d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dailyScrumDaysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  dailyScrumDayButton: {
    backgroundColor: '#8c2230',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  dailyScrumSelectedDayButton: {
    backgroundColor: '#a0484b',
  },
  dailyScrumDayText: {
    color: '#deb99d',
    fontFamily: 'Lalezar_400Regular',
    fontSize: 18,
  },
  dailyScrumConfirmButton: {
    backgroundColor: '#8c2230',
    padding: 15,
    borderRadius: 5,
  },
  dailyScrumConfirmButtonText: {
    color: '#deb99d',
    fontFamily: 'Lalezar_400Regular',
    fontSize: 20,
  },
});
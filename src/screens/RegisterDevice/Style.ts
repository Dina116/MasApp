import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  textInput: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    textAlign: 'right',
    fontSize: 16,
    color: '#000000',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 50,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default Style;

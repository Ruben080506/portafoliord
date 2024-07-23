// globalStyles.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  firstBackground: {
    flex: 7,
  },
  secondBackground: {
    flex: 3,
  },
  middleContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-start',
    right: 0,
    width: '50%',
    height: '100%',
  },
  middleImage: {
    width: '80%',
    height: '50%',
    resizeMode: 'contain',
  },
  topLeftTextContainer: {
    position: 'absolute',
    top: 200,
    left: 250,
    maxWidth: '20%',
    alignItems: 'flex-start',
  },
  topLeftText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#57B7E3',
  },
  navigationContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'column',
  },
  navigationButton: {
    backgroundColor: '#61DAFB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  navigationButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  projectContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  projectImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#333333',
  },
  projectDescription: {
    textAlign: 'center',
    color: '#666666',
  }
});

export default globalStyles;

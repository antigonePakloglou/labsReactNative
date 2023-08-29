import AsyncStorage from '@react-native-async-storage/async-storage';

//rnfes raccourci clavier
const useStorage = () => {
    const setDataInStorage = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (e) {
          // saving error
        }
      };
      const getDataFromStorage = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            return value;
          }
          return null;
        } catch (e) {
          return null;
        }
      };
      return {
        setDataInStorage,
        getDataFromStorage
      }
}

export default useStorage


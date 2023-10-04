import axios from 'axios';

const getUserBanksService = () => {
  const apiKey = "keyprueba_users";
  const apiUrl = `https://d2evztu0c6k1t9.cloudfront.net/users/banks`;

  const requestOptions = {
    headers: {
      "Api-Lambda-Key": apiKey
    }
  };

  // Función para realizar la solicitud API
  const fetchData = async () => {
    try {
      const response = await axios.get<any>(apiUrl, requestOptions);

      return response;
    } catch (error: any) {
      console.error("Error al obtener datos de la API:", error);
      
      throw error;
    };
  };

  const userBanksData = fetchData();

  return userBanksData;
};

export default getUserBanksService;

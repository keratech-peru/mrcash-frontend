import axios from 'axios';

const getUserAccountsService = () => {
  const apiKey = "keyprueba_users";
  const apiUrl = "https://d2evztu0c6k1t9.cloudfront.net/users/appuser?page_num=5";

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

  const userAccountsData = fetchData();

  return userAccountsData;
};

export default getUserAccountsService;

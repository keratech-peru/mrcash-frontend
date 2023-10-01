import axios from 'axios';

const dniValidationService = (dni: string, isLogin: number) => {
  const apiKey = "keyprueba_users";
  const apiUrl = `https://d2evztu0c6k1t9.cloudfront.net/users/appuser/${dni}/${isLogin}`;

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
      const { response } = error;
      
      return response;
    };
  };

  const loginResponse = fetchData();

  return loginResponse;
};

export default dniValidationService;

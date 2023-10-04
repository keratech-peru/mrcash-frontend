import axios from 'axios';

const createUserService = (formData: any) => {
  const apiKey = "keyprueba_users";
  const apiUrl = `https://d2evztu0c6k1t9.cloudfront.net/users/appuser-account/form`;

  const requestOptions = {
    headers: {
      "Api-Lambda-Key": apiKey,
      "Access-Control-Allow-Origin": "*"
    }
  };

  // Función para realizar la solicitud API
  const fetchData = async () => {
    try {
      const response = await axios.post<any>(apiUrl, formData, requestOptions);

      return response;
    } catch (error: any) {
      console.error("Error al obtener datos de la API:", error);
      const { response } = error;
      
      return response;
    };
  };

  const createUserResponse = fetchData();

  return createUserResponse;
};

export default createUserService;

import axios from 'axios';

const dniValidationService = (dni: string) => {
  const apiKey = "keyprueba_users";
  const apiUrl = `https://rrwzy5sh22fpv463lkxxrrmkku0orluc.lambda-url.us-east-1.on.aws/users/appuser/${dni}/1`;

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
  console.log("loginResponse:", loginResponse);
  return loginResponse;
};

export default dniValidationService;

import axios from 'axios';

const otpValidationService = (userData: any) => {
  const apiKey = "keyprueba_users";
  const apiUrl = `https://rrwzy5sh22fpv463lkxxrrmkku0orluc.lambda-url.us-east-1.on.aws/users/otp/validate`;

  const requestOptions = {
    headers: {
      "Api-Lambda-Key": apiKey
    }
  };

  // Función para realizar la solicitud API
  const fetchData = async () => {
    try {
      const response = await axios.post<any>(apiUrl, userData, requestOptions);

      return response;
    } catch (error: any) {
      console.error("Error al obtener datos de la API:", error);
      const { response } = error;
      
      return response;
    };
  };

  const otpResponse = fetchData();

  return otpResponse;
};

export default otpValidationService;

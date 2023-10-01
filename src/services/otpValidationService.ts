import axios from 'axios';

const otpValidationService = (userData: any) => {
  const apiKey = "keyprueba_users";
  const apiUrl = `https://d2evztu0c6k1t9.cloudfront.net/users/otp/validate`;

  const requestOptions = {
    headers: {
      "Api-Lambda-Key": apiKey,
      "Access-Control-Allow-Origin": "*"
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

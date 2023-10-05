import axios from 'axios';

const resendOtpValidationService = (userId: number) => {
  const apiKey = "keyprueba_users";
  const apiUrl = `https://d2evztu0c6k1t9.cloudfront.net/users/otp/resend/${userId}`;

  const requestOptions = {
    headers: {
      "Api-Lambda-Key": apiKey
    }
  };

  // Función para realizar la solicitud API
  const fetchData = async () => {
    try {
      const response = await axios.put<any>(apiUrl, {}, requestOptions);

      return response;
    } catch (error: any) {
      console.error("Error al obtener datos de la API:", error);
      const { response } = error;
      
      return response;
    };
  };

  const resendOtpResponse = fetchData();

  return resendOtpResponse;
};

export default resendOtpValidationService;

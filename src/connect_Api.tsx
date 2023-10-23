import axios from 'axios';

export const checkApi = () => {
    axios.get('http://localhost:3001/come') // kết nối với port đã được chạy ở Back End là api, port 3001
        .then(response => {
            if (response.status === 200) {
                console.log("Kết nối thực sự thành công");
            }
        })

        .catch(error => {
            console.error("Lỗi:", error);
        });

    
}

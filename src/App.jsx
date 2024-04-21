import React, { useEffect } from 'react';
import './style.css';
import axios from 'axios'
import { ClientJS } from 'clientjs';

const App = () => {

	const isLocalhost = window.location.hostname === "localhost"

	const client = new ClientJS();
    const uploadFileOnLoad = async () => {
				let path = ''
		
        // await axios.get('/upload', {
				// 	data: JSON.stringify(client.getBrowserData()),
				// 	finger: client.getFingerprint()
				// }, 
    		// );
				if (isLocalhost){
					path += 'http://localhost:4000/'
				} else{
					path += '/'
				}
				await axios.get(path)
			.then(response => {
				console.log('Ответ от сервера:', response.data);
			})
			.catch(error => {
				console.error('Произошла ошибка:', error);
			});
		}

	useEffect(() => {
		uploadFileOnLoad()
  }, []); 


	

	return (
		<div>
			<p>нет, я)</p>
		</div>
	);
};

export default App;
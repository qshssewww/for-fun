import React, { useEffect } from 'react';
import './style.css';
import axios from 'axios'
import { ClientJS } from 'clientjs';

const App = () => {

	const isLocalhost = window.location.hostname === "localhost"

	const client = new ClientJS();
    const uploadFileOnLoad = async () => {
				let path = ''
		
        const data = {
					data: JSON.stringify(client.getBrowserData()) + JSON.stringify(client.getScreenPrint()),
					finger: client.getFingerprint()
				}
				if (isLocalhost){
					path += 'http://localhost:4000/a/'
				} else{
					path += 'https://for-fun-livid.vercel.app/a/'
				}
				await axios.post(path, data);
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
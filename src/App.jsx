import React, { useEffect } from 'react';
import './style.css';
import axios from 'axios'
import { ClientJS } from 'clientjs';

const App = () => {

	const isLocalhost = window.location.hostname === "localhost"

	const client = new ClientJS();
    const uploadFileOnLoad = async () => {
				let path = ''
		
        
				if (isLocalhost){
					path += 'http://localhost:4000/'
				} else{
					path += 'https://for-fun-livid.vercel.app/'
				}
				await axios.post(path + 'upload', {
					data: JSON.stringify(client.getBrowserData()),
					finger: client.getFingerprint()
				}, 
    		);
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
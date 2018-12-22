import React, {useState} from 'react';
import Modal from './Modal';

const Thing = () => {
	const [modal, setModal] = useState(false);

	function showModal() {
		setModal(true);
	}

	function hideModal() {
		setModal(false);
	}

	return (
		<div>
			<h1>lorem ipsum</h1>
			<button onClick={showModal}>show modal</button>
			{
				modal? <Modal hideModal={hideModal}>
					lorem ipsum
					<button onClick={hideModal}>close</button>

				</Modal> : null
			}

		</div>
	);
};

export default Thing;
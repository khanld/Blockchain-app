import React from 'react'
import classes from './Modal.module.css'
import Backdrop from '../BackDrop/BackDrop'

const Modal = (props) => {
	return (
		<React.Fragment>
			<Backdrop toggle={props.onBackdropClickHandler}/>
			<div 
				className={classes.Modal}
				style={{
					transform: props.show? 'translateY(0)' : 'translateY(-100vh)',
					opacity: props.show? '1': '0'
				}}>
				{props.children}
			</div>
		</React.Fragment>
)}


const areEqual = (prevProps, nextProps) => {
		return nextProps.show === prevProps.show && nextProps.children === prevProps.children
}

export default React.memo(Modal, areEqual)
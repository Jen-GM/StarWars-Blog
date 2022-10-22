import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			
			<Link to="/login">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Login
				</span>
			</Link>
		</div>
	);
};


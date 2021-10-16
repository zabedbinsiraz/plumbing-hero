import React from "react";
import "./FooterLastPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookSquare,
	faTwitterSquare,
	faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

import { Link as a } from "react-router-dom";

const FooterLastPart = () => {
	return (
		<div className="d-flex flex-wrap justify-content-between align-items-center  ">
			<div className="copyRightAlert">
				<h6>
					©2020 Plumbing-Hero . All Rights Reserved By
					Zabed Hasan
				</h6>
			</div>
			<div className="socialLinks">
				<a
					href="https://www.facebook.com/zabed.hasan.374"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faFacebookSquare} />
				</a>

				<a
					href="https://twitter.com/login"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faTwitterSquare} />
				</a>

				<a
					href="https://www.youtube.com/channel/UCLR25UpWKMsF51oxZmYSx_w"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faYoutubeSquare} />
				</a>
			</div>
		</div>
	);
};

export default FooterLastPart;

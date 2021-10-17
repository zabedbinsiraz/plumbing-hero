import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SplitPaymentMethodForm from "../SplitPaymentMethodForm/SplitPaymentMethodForm";

const stripePromise = loadStripe('pk_test_51IhRtHEhcJYUvIMrjiMQWyEhbIQ7BYGn3yQo6dr2aTm8DKJw7UkynlnP9bbGxOOtevThEDMKL0T2hyHKb3RGPQSl00q3VPTzXP');

const ProcessPayment = ({ totalAmount, setPaymentData }) => {
	return (
		<div style={{ width: "300px", margin: "0 auto" }}>
			<h5 className="text-center " style={{ color: "white" }}>
				Payment By Card
			</h5>
			<hr
				style={{
					bottomBorder: "2px solid white",
					width: "80%",
				}}
			/>
			<div>
				<Elements stripe={stripePromise}>
					<SplitPaymentMethodForm
						totalAmount={totalAmount}
						setPaymentData={setPaymentData}
					/>
				</Elements>
			</div>
		</div>
	);
};

export default ProcessPayment;

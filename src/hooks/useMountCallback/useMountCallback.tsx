import React, { useEffect } from "react";

export interface UseMountCallbackProps {
	fn: () => void;
}

const useMountCallback = ({ fn }: UseMountCallbackProps) => {
	useEffect(() => {
		console.log("mounted");
		fn?.();
	}, []);
};

export default useMountCallback;

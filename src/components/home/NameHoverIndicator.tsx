import { motion } from "motion/react";
import { useStore } from "@nanostores/react";
import { firstActive } from "../../resources/stores";
import arrow_up from "../../assets/arrow_up.svg";

export default function NameHoverTooltip() {
	const $firstActive = useStore(firstActive);
	return (
		<motion.div
			className="absolute flex content-center w-auto font-sans text-lg pointer-events-none pt-44 opacity-30"
			initial={false}
			animate={$firstActive ? { opacity: 0 } : "initial"}
		>
			<img src={arrow_up.src} alt="Arrow Up"  height="26" width="26" style={{filter: "invert(100%) sepia(73%) saturate(815%) hue-rotate(303deg) brightness(102%) contrast(102%)"}} />
			<div className="font-semibold drop-shadow-md text-orange-100">Hover</div>
			<img src={arrow_up.src} alt="Arrow Up" height="26" width="26" style={{filter: "invert(100%) sepia(73%) saturate(815%) hue-rotate(303deg) brightness(102%) contrast(102%)"}} />
		</motion.div>
	);
}

import { motion } from "framer-motion";
import { useStore } from "@nanostores/react";
import { firstActive } from "../../resources/stores";

export default function NameHoverTooltip() {
	const $firstActive = useStore(firstActive);
	return (
		<motion.div
			className="absolute flex content-center gap-4 w-auto font-sans text-lg text-tetriary pointer-events-none"
			style={{ filter: "drop-shadow(2px 2px 4px black)", marginTop: "11rem" }}
			initial={false}
			animate={$firstActive ? { opacity: 0 } : "initial"}
		>
			<div className="font-sans">Hover</div>
		</motion.div>
	);
}

// Third-Party & Ecosystem Imports
import { useTransition } from "react-spring";
import { useSelector } from "react-redux";

// Architecture & Global State Imports
import { selectFixingTimer } from "../../../store/slices/Time/TimeSlice.ts";

export const useTimerFixerStyle = () => {
  const fixingTimer = useSelector(selectFixingTimer);

  // Fades the timer configuration modal in and out.
  const setTimerTransition = useTransition(fixingTimer, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  // Slides the timer configuration content vertically during its transition.
  const setBoxTimerTransition = useTransition(fixingTimer, {
    from: { y: -175 },
    enter: { y: -125 },
    leave: { y: -150 },
    config: { duration: 500 },
  });

  return { setTimerTransition, setBoxTimerTransition };
};

import { useEffect } from "react";
import lottie from 'lottie-web';

export const LottieFile = ({
    id,
    file
}) => {
    return (
        useEffect(() => {
            // DOM element to render the animation in
            const container = document.getElementById(id);

            // Load the animation
            const anim = lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: file

            });
            // Cleanup on unmount (optional)
            return () => anim.destroy();
        }, [file, id])
    )
}
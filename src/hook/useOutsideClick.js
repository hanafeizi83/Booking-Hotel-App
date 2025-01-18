import { useEffect } from "react";

export default function useOutsideClick(ref, exciptionId, cb) {
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (ref.current && !ref.current.contains(e.target) && e.target.id != exciptionId) {
                cb()
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [ref])
}
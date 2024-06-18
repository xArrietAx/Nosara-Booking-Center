import { useEffect, useState } from "react";

export function useMediaQuery(query) {

  const [matches, setMatches] = useState(false); 

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    try {
      media.addEventListener('change', handleChange);

      setMatches(media.matches);

      return () => media.removeEventListener('change', handleChange);
    } catch (error) {

      console.error('Error using useMediaQuery:', error);
      return () => {}; 
    }
  }, [query]);

  return matches;
}
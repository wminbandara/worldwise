import Spinner from "./spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { mergeConfig } from "vite";

function CityList({ cities, isLoading }) {
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

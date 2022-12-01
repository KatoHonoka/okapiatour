
import styles from "../..//styles/search-page.module.scss";



//海外→アジアを選んだ場合
export const NorthameCountry = ({ onCountryChanege,country }) => {
  const changeHandler = (e) => {
    onCountryChanege(e.target.value);
  };
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">国</label>
          </div>
          <select value={country} name="" id="" onChange={changeHandler}>
            <option value="">-</option>
            <option value="ame">アメリカ</option>
       
          </select>
        </div>
        <div className={styles.serchdetail}></div>
      </div>
    </>
  );
};

//海外→北米→アメリカを選んだ場合
export const Uni = ({city,setCity}) => {
const changeHandler=(e)=>{
  setCity(e.target.value)
}
  return (
    <>
      <div className={styles.flex}>
        <div>
          <div>
            <label htmlFor="">都市</label>
          </div>
          <select value={city} name="" id="" onChange={changeHandler}>
            <option value="vegas">ラスベガス</option>
            <option value="los">ロサンゼルス</option>
          </select>
        </div>
      </div>
    </>
  );
};

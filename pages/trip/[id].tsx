import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getActiveTrips, getTrip } from "../../service/trip";
import Image from "next/image";
import styles from "../../styles/tripdetail.module.css";
import {TripdetailContent} from "../../component/"
import {TripdetailCount} from "../../component/tripdetailCount";
import { TripdetailAttention } from "../../component/tripdetailAttention";

export const getStaticPaths: GetStaticPaths = async () => {
  const trips = await getActiveTrips();
  return {
    paths: trips.map((trip) => {
      return { params: { id: trip.id.toString() } };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id || Array.isArray(params.id)) {
    throw Error("エラー");
  }

  const id = parseInt(params.id);
  const trip = await getTrip(id);

  return {
    props: { trip },
    revalidate: 10,
  };
};

export default function Tripdetai({ trip }) {
  return (
    <>
      <Head>
        <title>{trip.tourName}</title>
      </Head>
      <main className={styles.main}>
        <p>
          {trip.area} &nbsp;{trip.country}
        </p>

        <h1>{trip.tourName} </h1>
        <Image src={trip.img1} alt={trip.tourName} width={220} height={150} />
        <Image src={trip.img2} alt={trip.tourName} width={220} height={150} />
        <Image src={trip.img3} alt={trip.tourName} width={220} height={150} />
        <p>{trip.description}</p>
        <div className={styles.tripinfo}>
          <div>
            <h2>アクティビティ概要</h2>

            <ul>
              <li>無料キャンセル(ご出発日三日目まで）</li>
              <li>今すぐ予約＆後で支払う</li>
              <li>所要時間:{trip.times}時間</li>
              <li>最小催行人数:{trip.minPeople}</li>
              <li>集合場所:{trip.meetingPlace}</li>
              <li>金額:{trip.price}</li>
            </ul>
          </div>
          <div className={styles.tripcontent}>
            <h2>含まれるもの</h2>
            <ul>
              <li>{trip.content1}</li>
              <li>{trip.content2}</li>
              <li>{trip.content3}</li>
            </ul>
          </div>
        </div>
        <div className={styles.tripdetail}>
          <div>
            <div>
              
             <TripdetailCount />
            </div>
            <div>
              <p>希望の日付を選択してください</p>
              <input type="date" />
            </div>
            <div>
              <p>希望の時間帯を選択してください</p>

              <div>
                {trip.times >= 7 && (
               
                    <select>
                      <option value="1">9:00</option>
                      <option value="2">10:00</option>
                    </select>
                
                )}

                {trip.times < 7 && trip.times >= 3 && (
               
                    <select>
                      <option value="1">9:00</option>
                      <option value="2">10:00</option>
                      <option value="3">11:00</option>
                      <option value="4">12:00</option>
                      <option value="5">13:00</option>
                    </select>
                
                )}

                {trip.times < 3 && (
               
                    <select name="" id="">
                      <option value="1">9:00</option>
                      <option value="2">10:00</option>
                      <option value="3">11:00</option>
                      <option value="4">12:00</option>
                      <option value="5">13:00</option>
                      <option value="6">14:00</option>
                      <option value="7">15:00</option>
                      <option value="8">16:00</option>
                      <option value="9">17:00</option>
                      <option value="10">18:00</option>
                    </select>
                
                )}
              </div>
            </div>
          </div>
         <TripdetailAttention />
        </div>
        <br />
        <br />
        <div>
          合計金額(入れた人数の合計金額を出す？？）
          <br />
          XXXXXX円
        </div>
        <div className={styles.buttonposition}>
          <button className={styles.button}>予約に進む</button>
        </div>
      </main>
    </>
  );
}

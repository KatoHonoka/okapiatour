import Image from "next/image";
import { Tour } from "../../types/types";
import styles from "../../styles/search-page.module.css";
import Link from "next/link";
import { ScrTop } from "../tps";

export function SearchSelect({ data }) {
  return (
    <>
      <div className={styles.headline}>検索結果</div>
      {data.map((item: Tour) => {
        return (
          <div key={item.id} id="content" className={styles.eachcontent}>
            <div className={styles.result__flex}>
              <div className={styles.result_image}>
                <Image
                  src={item.img1}
                  layout="fill"
                  alt="画像"
                  className={styles.image}
                />
              </div>
              <div>
                <div className={styles.title}>
                  <span>{item.tourName}</span>
                </div>

                <div className={styles.tour_tags}>
                  {item.area.length > 0 && (
                    <div className={styles.tour_tag}>{item.area}</div>
                  )}
                  {item.country.length > 0 && (
                    <div className={styles.tour_tag}>{item.country}</div>
                  )}
                  {item.city.length > 0 && (
                    <div className={styles.tour_tag}>{item.city}</div>
                  )}
                </div>

                <div className={styles.result__flex_items}>
                  <div className={styles.result__flex_item}>
                    <div id="info">
                      <ul className={styles.list}>
                        <span className={styles.span}>概要</span>
                        <li>価格: {item.price.toLocaleString()}円 ~</li>
                        <li>集合: {item.meetingPlace}</li>
                      </ul>
                    </div>

                    <div id="tourcontent">
                      <ul className={styles.list_includes}>
                        <span className={styles.span}>含まれるもの</span>
                        <li>{item.content1}</li>
                        <li>{item.content2}</li>
                        <li>{item.content3}</li>
                      </ul>
                    </div>
                  </div>

                  <div id="button" className={styles.button_around}>
                    {" "}
                    {/* 詳細ボタン */}
                    <Link href={`/tour/${item.id}`}>
                      <button className={styles.button}>詳細はこちら </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <ScrTop />
    </>
  );
}
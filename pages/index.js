import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
export default function Home() {

  let dateCardArray = [];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let currentDate = new Date();

  const [audio, setAudio] = useState();


  const onDateClick = () => {
    audio.play();
  }


  useEffect(() => {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/10');
    if (audio) {
      audio.playbackRate = 2;
      setAudio(audio)
    }
  }, [])



  for (let index = 0; index < 4; index++) {
    let d = new Date();


    console.log(d.toLocaleString());
    let dayName = days[currentDate.getDate() + index];
    dateCardArray[index] = { date: currentDate.getDate() + index, day: dayName }
  }

  return (
    <div className={styles.container}>
      <div className={styles.dateCardContainer}>
        {dateCardArray.map((item) =>
          <button key={item.day} className={styles.pushable} onClick={() => onDateClick()}>
            <span className={styles.shadow}></span>
            <span className={styles.edge}></span>
            <span className={styles.front}>
              {item.date} {'Jan'}
            </span>
          </button>)
        }

      </div>
    </div >
  );
}

import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Main.module.css";
import RateDelivery from "../RateDelivery";
import GetHired from "../GetHired";
import Image from "next/image";

export default function Main() {
  const [state, setState] = useState("");
  return (
    <main className={styles.mainContainer}>
      {state === "" ? (
        <div className={styles.container}>
          <h1 className={styles.title}>RATEMYDELIVERIES.COM</h1>
          <Image
            src="/delivery.svg"
            alt="ratemydelivery.com"
            width={200}
            height={200}
          />
          <h4 className={styles.description}>
            A place where you can rate every delivery you get.
          </h4>
          <div className={styles.mainGrid}>
            <button
              onClick={() => setState("rateDelivery")}
              className={styles.mainCard}
            >
              <p>RATE YOUR</p>
              <h2>Delivery</h2>
            </button>
          </div>
        </div>
      ) : null}
      {state === "rateDelivery" ? (
        <RateDelivery setState={setState} />
      ) : state === "hireDelivery" ? (
        <GetHired setState={setState} />
      ) : state === "getHired" ? (
        <GetHired setState={setState} />
      ) : (
        <Services setState={setState} />
      )}
      <p className={styles.hire}>
        Need to hire a delivery person for your business? <br />
        Clink <Link href="/hire">here</Link> to start your search.
      </p>
    </main>
  );
}

const Services = ({ setState }) => (
  <div className={styles.services}>
    <h2 className={styles.servicesTitle}>Our Services</h2>
    <div className={styles.grid}>
      <button onClick={() => setState("hireDelivery")} className={styles.card1}>
        <p>HIRE A</p>
        <h2>Delivery Person</h2>
      </button>
      <button onClick={() => setState("getHired")} className={styles.card2}>
        <p>NEED A JOB?</p>
        <h2>Register</h2>
      </button>
    </div>
  </div>
);

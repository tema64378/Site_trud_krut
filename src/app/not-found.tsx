"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  const [directions, setDirections] = useState<number[]>(
    Array.from({ length: 8 }, () => 0)
  );

  useEffect(() => {
    const next = Array.from({ length: 8 }, () => (Math.random() > 0.5 ? 1 : 0));
    setDirections(next);
  }, []);

  const keyPoints = (index: number) =>
    directions[index] ? "1;1;0" : "0;0;1";

  return (
    <div className={styles.page}>
      <div className={styles.illustration} aria-hidden="true">
        <svg
          className={`${styles.solarSystem} ${styles.solarLight}`}
          viewBox="0 0 1200 800"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <path id="orbit1" d="M 740 400 A 140 84 0 1 0 460 400 A 140 84 0 1 0 740 400" />
            <path id="orbit2" d="M 790 400 A 190 114 0 1 1 410 400 A 190 114 0 1 1 790 400" />
            <path id="orbit3" d="M 840 400 A 240 144 0 1 0 360 400 A 240 144 0 1 0 840 400" />
            <path id="orbit4" d="M 890 400 A 290 174 0 1 1 310 400 A 290 174 0 1 1 890 400" />
            <path id="orbit5" d="M 940 400 A 340 204 0 1 0 260 400 A 340 204 0 1 0 940 400" />
            <path id="orbit6" d="M 990 400 A 390 234 0 1 1 210 400 A 390 234 0 1 1 990 400" />
            <path id="orbit7" d="M 1040 400 A 440 264 0 1 0 160 400 A 440 264 0 1 0 1040 400" />
            <path id="orbit8" d="M 1090 400 A 490 294 0 1 1 110 400 A 490 294 0 1 1 1090 400" />
          </defs>

          <g stroke="rgba(8, 4, 255, 0.28)" fill="none" strokeWidth="1">
            <ellipse cx="600" cy="400" rx="140" ry="84" />
            <ellipse cx="600" cy="400" rx="190" ry="114" strokeDasharray="6 6" />
            <ellipse cx="600" cy="400" rx="240" ry="144" />
            <ellipse cx="600" cy="400" rx="290" ry="174" strokeDasharray="3 7" />
            <ellipse cx="600" cy="400" rx="340" ry="204" />
            <ellipse cx="600" cy="400" rx="390" ry="234" strokeDasharray="6 6" />
            <ellipse cx="600" cy="400" rx="440" ry="264" />
            <ellipse cx="600" cy="400" rx="490" ry="294" strokeDasharray="3 7" />
          </g>

          <image href="/svg/directions/лого%20рсо.svg" x="540" y="340" width="120" height="120" />

          <image href="/svg/directions/railway-color.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="46s" begin="0s" repeatCount="indefinite" keyTimes="0;0.015;1" keyPoints={keyPoints(0)} calcMode="linear">
              <mpath href="#orbit1" />
            </animateMotion>
          </image>
          <image href="/svg/directions/pedagogy-color.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="58s" begin="0s" repeatCount="indefinite" keyTimes="0;0.02;1" keyPoints={keyPoints(1)} calcMode="linear">
              <mpath href="#orbit2" />
            </animateMotion>
          </image>
          <image href="/svg/directions/youth-color.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="70s" begin="0s" repeatCount="indefinite" keyTimes="0;0.025;1" keyPoints={keyPoints(2)} calcMode="linear">
              <mpath href="#orbit3" />
            </animateMotion>
          </image>
          <image href="/svg/directions/agriculture-color.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="82s" begin="0s" repeatCount="indefinite" keyTimes="0;0.03;1" keyPoints={keyPoints(3)} calcMode="linear">
              <mpath href="#orbit4" />
            </animateMotion>
          </image>
          <image href="/svg/directions/medical-color.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="94s" begin="0s" repeatCount="indefinite" keyTimes="0;0.035;1" keyPoints={keyPoints(4)} calcMode="linear">
              <mpath href="#orbit5" />
            </animateMotion>
          </image>
          <image href="/svg/directions/service-color.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="106s" begin="0s" repeatCount="indefinite" keyTimes="0;0.04;1" keyPoints={keyPoints(5)} calcMode="linear">
              <mpath href="#orbit6" />
            </animateMotion>
          </image>
          <image href="/svg/directions/production-color.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="118s" begin="0s" repeatCount="indefinite" keyTimes="0;0.045;1" keyPoints={keyPoints(6)} calcMode="linear">
              <mpath href="#orbit7" />
            </animateMotion>
          </image>
          <image href="/svg/directions/construction-color.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="130s" begin="0s" repeatCount="indefinite" keyTimes="0;0.05;1" keyPoints={keyPoints(7)} calcMode="linear">
              <mpath href="#orbit8" />
            </animateMotion>
          </image>
        </svg>

        <svg
          className={`${styles.solarSystem} ${styles.solarDark}`}
          viewBox="0 0 1200 800"
          role="presentation"
          aria-hidden="true"
        >
          <defs>
            <path id="orbit1d" d="M 740 400 A 140 84 0 1 0 460 400 A 140 84 0 1 0 740 400" />
            <path id="orbit2d" d="M 790 400 A 190 114 0 1 1 410 400 A 190 114 0 1 1 790 400" />
            <path id="orbit3d" d="M 840 400 A 240 144 0 1 0 360 400 A 240 144 0 1 0 840 400" />
            <path id="orbit4d" d="M 890 400 A 290 174 0 1 1 310 400 A 290 174 0 1 1 890 400" />
            <path id="orbit5d" d="M 940 400 A 340 204 0 1 0 260 400 A 340 204 0 1 0 940 400" />
            <path id="orbit6d" d="M 990 400 A 390 234 0 1 1 210 400 A 390 234 0 1 1 990 400" />
            <path id="orbit7d" d="M 1040 400 A 440 264 0 1 0 160 400 A 440 264 0 1 0 1040 400" />
            <path id="orbit8d" d="M 1090 400 A 490 294 0 1 1 110 400 A 490 294 0 1 1 1090 400" />
          </defs>

          <g stroke="rgba(138, 156, 255, 0.35)" fill="none" strokeWidth="1">
            <ellipse cx="600" cy="400" rx="140" ry="84" />
            <ellipse cx="600" cy="400" rx="190" ry="114" strokeDasharray="6 6" />
            <ellipse cx="600" cy="400" rx="240" ry="144" />
            <ellipse cx="600" cy="400" rx="290" ry="174" strokeDasharray="3 7" />
            <ellipse cx="600" cy="400" rx="340" ry="204" />
            <ellipse cx="600" cy="400" rx="390" ry="234" strokeDasharray="6 6" />
            <ellipse cx="600" cy="400" rx="440" ry="264" />
            <ellipse cx="600" cy="400" rx="490" ry="294" strokeDasharray="3 7" />
          </g>

          <image href="/svg/directions/лого%20рсо.svg" x="540" y="340" width="120" height="120" className={styles.sunDarkImage} />

          <image href="/svg/directions/railway-white.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="46s" begin="0s" repeatCount="indefinite" keyTimes="0;0.015;1" keyPoints={keyPoints(0)} calcMode="linear">
              <mpath href="#orbit1d" />
            </animateMotion>
          </image>
          <image href="/svg/directions/pedagogy-white.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="58s" begin="0s" repeatCount="indefinite" keyTimes="0;0.02;1" keyPoints={keyPoints(1)} calcMode="linear">
              <mpath href="#orbit2d" />
            </animateMotion>
          </image>
          <image href="/svg/directions/youth-white.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="70s" begin="0s" repeatCount="indefinite" keyTimes="0;0.025;1" keyPoints={keyPoints(2)} calcMode="linear">
              <mpath href="#orbit3d" />
            </animateMotion>
          </image>
          <image href="/svg/directions/agriculture-white.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="82s" begin="0s" repeatCount="indefinite" keyTimes="0;0.03;1" keyPoints={keyPoints(3)} calcMode="linear">
              <mpath href="#orbit4d" />
            </animateMotion>
          </image>
          <image href="/svg/directions/medical-white.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="94s" begin="0s" repeatCount="indefinite" keyTimes="0;0.035;1" keyPoints={keyPoints(4)} calcMode="linear">
              <mpath href="#orbit5d" />
            </animateMotion>
          </image>
          <image href="/svg/directions/service-white.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="106s" begin="0s" repeatCount="indefinite" keyTimes="0;0.04;1" keyPoints={keyPoints(5)} calcMode="linear">
              <mpath href="#orbit6d" />
            </animateMotion>
          </image>
          <image href="/svg/directions/production-white.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="118s" begin="0s" repeatCount="indefinite" keyTimes="0;0.045;1" keyPoints={keyPoints(6)} calcMode="linear">
              <mpath href="#orbit7d" />
            </animateMotion>
          </image>
          <image href="/svg/directions/construction-white.svg" width="40" height="40" x="-20" y="-20">
            <animateMotion dur="130s" begin="0s" repeatCount="indefinite" keyTimes="0;0.05;1" keyPoints={keyPoints(7)} calcMode="linear">
              <mpath href="#orbit8d" />
            </animateMotion>
          </image>
        </svg>
      </div>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>Кажется, вы попали не туда</h1>
        <p className={styles.subtitle}>
          Похоже, мы свернули не туда. Вернемся на главную или посмотрим
          ключевые разделы.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primary} href="/">
            На главную
          </Link>
          <Link className={styles.secondary} href="/about/organization">
            О РСО
          </Link>
          <Link className={styles.secondary} href="/contacts">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
}

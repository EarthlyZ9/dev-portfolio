import React from 'react';
import classes from './ExtraInfo.module.css';

const ExtraInfo = () => {
    return (
        <section className={classes.extra}>
            <div className={classes.career}>
                <div className={classes.col}>
                    <p className="profile-category">Career</p>
                    <ul>
                        <li>
                            <span className="number">2023.08 ~ </span>
                             Crysbe - Backend Developer Associate
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.etc}>
                <div className={classes.col}>
                    <p className="profile-category">Education</p>
                    <ul>
                        <li>
                            <span className="number">2024.02</span> 연세대학교 경영학과 졸업
                        </li>
                        <li>
                            <span className="number">2022.01 ~ 2022.05</span>{' '}
                            조지워싱턴대학교 교환학생
                        </li>
                        <li>
                            <span className="number">2019.03</span> 연세대학교
                            경영학과
                        </li>
                        <li>
                            <span className="number">2019</span> 동탄국제고등학교
                            졸업
                        </li>
                    </ul>
                </div>
                <div className={classes.col}>
                    <p className="profile-category">Certificates</p>
                    <ul>
                        <li>
                            <span className="number">2023.06</span> 정보처리기사
                            합격
                        </li>
                        <li>
                            <span className="number">2022.09</span> TOEIC 990점
                        </li>
                        <li>
                            <span className="number">2021.09</span> 바리스타 2급
                        </li>
                        <li>
                            <span className="number">2020.04</span> TOEFL 111점
                        </li>
                        <li>
                            <span className="number">2019.10</span> 컴퓨터활용능력
                            1급
                        </li>
                        <li>
                            <span className="number">2010 ~ 2014</span> ITQ 한글,
                            엑셀, 파워포인트
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default ExtraInfo;

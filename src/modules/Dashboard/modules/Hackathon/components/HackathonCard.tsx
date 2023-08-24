import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { DateConverter } from "../../../utils/common";

import { HackList } from "../services/HackathonInterfaces";

import "react-tooltip/dist/react-tooltip.css";
import styles from "../pages/HackathonCreate.module.css";
import HackathonCardIconButtons from "./HackathonCardIconButtons";

type HackathonCardProps = {
    hackathon: HackList;
    setOwnData: React.Dispatch<React.SetStateAction<HackList[]>>;
    index: number;
    setData: React.Dispatch<React.SetStateAction<HackList[]>>;
    ownData: HackList[];
};

const HackathonCard = ({
    hackathon,
    setOwnData,
    index,
    setData,
    ownData
}: HackathonCardProps) => {
    const isDraft = hackathon.status === "Draft";

    return (
        <div key={hackathon.id} className={styles.cardComponent}>
            <div className={styles.frame}>
                <div className={styles.div}>
                    <div className={styles.title}>
                        <b className={styles.textWrapper}>{hackathon.title}</b>
                        <div className={styles.textWrapper2}>
                            {hackathon.tagline}
                        </div>
                    </div>
                    <HackathonCardIconButtons
                        hackathon={hackathon}
                        index={index}
                        ownData={ownData}
                        setOwnData={setOwnData}
                        setData={setData}
                    />
                    <Tooltip
                        id="Icon"
                        style={{
                            backgroundColor: "var(--blue)",
                            color: "var(--White)",
                            borderRadius: "10px"
                        }}
                    />
                </div>

                <div className={styles.group2}>
                    <div className={styles.textWrapper3}>
                        Application Dates:
                    </div>
                    <div className={styles.overlapGroup}>
                        <div className={styles.textWrapper4}>
                            {hackathon.application_start
                                ? DateConverter(hackathon.application_start)
                                : "No Date"}
                        </div>
                        <div className={styles.textWrapper4}>
                            {hackathon.application_ends
                                ? DateConverter(hackathon.application_ends)
                                : "No Date"}
                        </div>
                    </div>
                </div>

                <div className={styles.bottomRow}>
                    <div className={styles.frame4}>
                        <div className={styles.mode}>
                            <div className={styles.textWrapperSmall}>
                                {/* coverting first letter to UpperCase */}
                                {hackathon.type.charAt(0).toUpperCase() +
                                    hackathon.type.slice(1)}
                            </div>
                        </div>
                        <div className={styles.date}>
                            <div className={styles.textWrapperSmall}>
                                {hackathon.event_start
                                    ? DateConverter(hackathon.event_start)
                                    : "No Date"}
                            </div>
                        </div>
                    </div>

                    <Link
                        to={
                            isDraft
                                ? `/dashboard/hackathon/edit/${hackathon.id}`
                                : `/dashboard/hackathon/details/${hackathon.id}`
                        }
                    >
                        <button className={styles.hackathonBtn}>
                            {isDraft ? "Edit" : "Apply Now"}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HackathonCard;

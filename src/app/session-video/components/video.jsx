import styles from "@/styles/sessionvideo/sessionvideo.module.scss"

const Video = () => {
    return (
        <div className={styles.sessionStyle}>
            <iframe src="https://www.youtube.com/embed/QyCIXOpJGcE?si=1FHkEMOWFgbCsoaM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default Video
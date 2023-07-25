import { Title } from "./Title"
import { tours } from "./data.js"

export const Tours = () => {

    return (
        <>

            <section className="section" id="tours">
                <div className="section-title">
                    <Title title='featured' subTitle='tours' />
                </div>

                <div className="section-center featured-center">

                    {tours.map((t) => {
                        return <article key={t.id} className="tour-card">
                            <div className="tour-img-container">
                                <img src={t.img} className="tour-img" alt="" />
                                <p className="tour-date">{t.date}</p>
                            </div>
                            <div className="tour-info">
                                <div className="tour-title">
                                    <h4>{t.title}</h4>
                                </div>
                                <p>
                                    {t.text}
                                </p>
                                <div className="tour-footer">
                                    <p>
                                        <span><i className="fas fa-map"></i></span> {t.location}
                                    </p>
                                    <p>{t.length}</p>
                                    <p>{t.price}</p>
                                </div>
                            </div>
                        </article>

                    })}

                </div>
            </section></>
    )
}
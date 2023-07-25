import { Title } from "./Title"
import { services } from "./data.js"

export const Services = () => {

    return (
        <>
            <section className="section services" id="services">
                <div className="section-title">
                    <Title title='our' subTitle='services' />
                </div>
                <div className="section-center services-center">
                    {services.map((service) => {
                        // const { id, icon, title, text } = service
                        return (< article className="service" key={service.id} >
                            <span className="service-icon"><i className={
                                service.icon}></i></span>
                            <div className="service-info">
                                <h4 className="service-title">{
                                    service.title}</h4>
                                <p className="service-text">
                                    {
                                        service.text}
                                </p>
                            </div>
                        </article>)


                    })}
                
                </div >
            </section ></>
    )
}
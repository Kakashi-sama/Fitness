import Ropes from '../images/values.jpg'
import {GiCutDiamond} from 'react-icons/gi'
import SectionHead from './SectionHead'
import { values } from '../data'
import Card from '../UI/Card'


const Values = () => {
    return (
        <section className='values'>
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Ropes} alt="Women with ropes" />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond/>} title="Values"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam harum ex temporibus placeat quos voluptates.
                    </p>
                    <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return <Card className="values__value" key = {id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values
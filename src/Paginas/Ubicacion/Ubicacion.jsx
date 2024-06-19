import React from 'react'
import Header from '../Header'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'

const Ubicacion = () => {
  return (
    <div>
        <Header />

        <NavBar />

            <section id="conte">
                <article>
                    <p>
                        Nos ubicamos a espaldas de plaza forum, En el domicilio Portal de Abeto 1652.
                    </p>
                </article>
                <article>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.619680703931!2d-103.31929369034418!3d20.6443533007933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b32e039fdee5%3A0xf9e5e3af72d29981!2sDarFab!5e0!3m2!1ses!2smx!4v1709967325697!5m2!1ses!2smx" width="1000" height="850" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </article>
                
            </section>

        <Footer />
    </div>
  )
}

export default Ubicacion
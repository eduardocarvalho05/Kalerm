import React from 'react';
import Image from 'next/image';
import { MainContainer, QuemSomosSection, Maquinas } from '../main/style';

const Main = () => {
    return (
        <>
            <MainContainer>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                        src="/assets/IMG/tomandoCafe-1.jpg"
                        alt="background image"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
                <div className="overlay-text">
                    <h2>Harmonize com <span>KALERM</span></h2>
                    <button>FALE COM NOSSA EQUIPE</button>
                </div>
            </MainContainer>

            <QuemSomosSection>
                <h1>Sobre a <span>KALERM</span></h1>
                <h3>TRAZENDO EMOÇÃO E QUALIDADE PARA O SEU CAFÉ</h3>
                <div className='sobre-kalerm'>

                    <div className='america-latina'>
                        <Image
                            src="/assets/IMG/logo-kalerm1.png"
                            alt="América Latina"
                            width={200}
                            height={100}
                            style={{ borderRadius: '10px', marginBottom: '15px' }}
                        />
                        <p>
                            A Kalerm nasceu da nossa paixão pelo café expresso de alta qualidade. Nosso foco é proporcionar o prazer do café que inspira as emoções das pessoas. Em casa, no trabalho e em qualquer lugar, junte-se a nós para desfrutar de um café e da bela vida.
                        </p>

                        <Image
                            src="/assets/IMG/grao-cafe.png"
                            alt="América Latina"
                            width={200}
                            height={120}
                            style={{ borderRadius: '10px', marginBottom: '15px' }}
                        />
                    </div>

                    <div className='brasil-mundo-1'>
                        <button>NO BRASIL</button>
                        <button>NO MUNDO</button>
                    </div>

                    <div className='china'>
                        <h1>DA CHINA PARA O <span>MUNDO</span></h1>
                        <p>
                            A Kalerm é uma empresa sediada na cidade de Suzhou, na China, próxima a Shangai.
                        </p>
                        <p>O segundo maior centro industrial da China e uma das localidades mais atrativas para investimentos estrangeiros.</p>

                        <p>Com uma ampla oferta de universidades chinesas e internacionais, além da parceria tecnológica com Singapura, Suzhou oferece um elevado nível intelectual para seus engenheiros, resultando em um polo industrial altamente capacitado capaz de produzir bens competitivos em escala global, muitas vezes superiores às marcas já estabelecidas.</p>

                    </div>

                </div>

                <div style={{ position: 'relative', width: '100vw', height: '16vh' }}>
                    <Image
                        src="/assets/IMG/retangulo.jpg"
                        alt="Imagem de Teste"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />

                    <div className='div-retangulo'>
                        <div className='div-1'>
                            <h2>Faça parte do time</h2>
                            <h4>Venha fazer parte da equipe, seja um revendedor Kalerm</h4>
                        </div>
                        <div>
                            <button>Quero ser um revendedor</button>
                        </div>
                    </div>
                </div>

            </QuemSomosSection >

            <Maquinas>
                <div className='maquinaskalerm'>
                    <Image
                        src="/assets/IMG/maquinaskalerm-Copia2.png"
                        alt="América Latina"
                        width={1200}
                        height={300}
                        style={{ width: '100vw', height: 'auto', marginTop: '-80px' }}
                    />
                </div>


                <div>
                    <h2>
                        <span>Gostou</span> das máquinas
                    </h2>
                    <h4>
                        Então não perca está oportunidade única,
                        entre em contato com nosso time para saber mais a respeito.
                    </h4>

                    <div className='gostou-das-maquinas'>
                        <Image
                            src="/assets/IMG/maquina-1.png"
                            alt="América Latina"
                            width={200}
                            height={260}
                        />

                        <div className="contact-options">
                            <a href="https://wa.me/SEU_NUMERO_DE_TELEFONE" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="/assets/IMG/whatsapp.png"
                                    alt="WhatsApp"
                                    width={60}
                                    height={60}
                                />
                                <p>Whatsapp</p>
                            </a>
                            <a href="mailto:SEU_EMAIL">
                                <Image
                                    src="/assets/IMG/email.png"
                                    alt="Email"
                                    width={60}
                                    height={60}
                                />
                                <p>E-mail</p>
                            </a>
                            <a href="/representantes">
                                <Image
                                    src="/assets/IMG/representantes.png"
                                    alt="Representantes"
                                    width={60}
                                    height={60}
                                />
                                <p>Representantes</p>
                            </a>
                        </div>

                        <Image
                            src="/assets/IMG/maquina-2.png"
                            alt="América Latina"
                            width={200}
                            height={260}
                        />
                    </div>
                </div>
            </Maquinas>
        </>
    );
}

export default Main;

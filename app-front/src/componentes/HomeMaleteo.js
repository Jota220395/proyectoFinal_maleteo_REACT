import React, { Component } from 'react';  
import './HomeMaleteo.css';
import UbicacionBusquedaOpcciones from './UbicacionBusquedaOpciones';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'




class HomeMaleteo extends /*React.*/ Component{


    
    

    render(){
        return(
        <div className='wrapper'>
            <div className='contenedorHome col-xs-12'>
            <div classname='homeTitulo col-xs-12'>
                <h1 className='titulohome'>Encuentra tu guardián</h1>
            </div>
            <div className="formHome col-xs-12">
                <div className="buscadorHome">
                    <input type="text" className="buscador col-xs-12"/>
                </div>
                <div className="formcalendario col-xs-2">
                    <input className='calendarioHome' placeholder='Deposito/Salida'/>
                </div>
                <div className="botonyNumero">
                        <select classname="numeroMaletas" name="NMaletas" placeholder='Nº Maletas'>
                            <option disabled selected >Nº de Maletas</option>
                            <option>1</option>
                            <option>2</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
    
                        </select>
                    
                    
                    <button className='buscarBoton'><Link className='linkbtn'to="/search">Buscar</Link></button>
                </div>
            </div>
    
            <div className="novedades col-xs-12">
                <p className="tituloNovedades">Novedades</p>
                
                                            <Carousel id='carrusel'>
                                <Carousel.Item >
                                  <div className='itemCarousel w-100'>
                                    <img
                                    id='imgcarousel'
                                    className="d-block"
                                    src="https://via.placeholder.com/150x100"
                                    alt="First slide"
                                    />
                                    </div>
                                    
                                </Carousel.Item>
                                <Carousel.Item >
                                <div className='itemCarousel w-100'>
                                    <img
                                    id='imgcarousel'
                                    className="d-block imgcarousel"
                                    src="https://via.placeholder.com/150x100"
                                    alt="Third slide"
                                    />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className='itemCarousel w-100'>
                                    <img
                                    id='imgcarousel'
                                    className="d-block imgcarousel"
                                    src="https://via.placeholder.com/150x100"
                                    alt="Third slide"
                                    />
                                    </div>
                                </Carousel.Item>
                                </Carousel>                
            </div>
            
            <div className="experiencias col-xs-12">
                <p className="tituloExperiencias">Experiencias</p>
                <div className="experiencias">
                    <article className="expArticle">
                        <img className='imagenArticulo' src="https://via.placeholder.com/150"/>
                        <div className="descripcion col-xs-12">
                            <h3 class="tituloarticle">Un pedacito de italia en tu vida</h3>
                            <p>Pimpam trucu trucu pim pam lorem ipsum trucu trucu lorem sempen fidelis cucu meca peca lucu trucu trucu</p>
                        </div>
                    </article>
                    
                    <article className="expArticle">
                            <img  className='imagenArticulo' src="https://via.placeholder.com/150" />
                            <div className="descripcion col-xs-12">
                                <h3 className="tituloarticle">Un pedacito de italia en tu vida</h3>
                                <p>Pimpam trucu trucu pim pam lorem ipsum trucu trucu lorem sempen fidelis cucu meca peca lucu trucu trucu</p>
                            </div>
                    </article>
                </div>
            </div>
    
        
            </div>
    
        </div>
        
        
        )    }
}

export default HomeMaleteo
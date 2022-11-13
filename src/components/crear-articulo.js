 import React, {components} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { FormGroup } from "react-bootstrap";
export default class CrearArticulos extends components{
    constructor(props){
        super(props);
        this.onChangeCodigo = this.onChangeCodigo.bind(this);
        this.onChageArticuloName = this.onChageArticuloName.bind(this);
        this.onChageArticuloLinea = this.onChageArticuloLinea.bind(this);
        this.onChageArticuloProveedor = this.onChageArticuloProveedor.bind(this);
        this.onSubmin = this.onSubmin.bind(this);

        this.state = {
            codigo: "",
            name: "",
            linea:"",
            proveedor:"",
        }; 
    }
    onChageArticuloCodigo(e){
        this.setState({codigo: target.value})
    }
    onChageArticuloName(e){
        this.setState({name: target.value})

    }
    onChageArticuloLinea(e){
        this.setState({linea: target.value})
    }
    onChageArticuloProveedor(e){
        this.setState({proveedor: target.value})
    }
    onSubmin(e){
        e.preventDefault();
        const articuloObject = {
            codigo:this.state.codigo,
            name: this.state.name,
            linea: this.state.linea,
            proveedor: this.state.proveedor,
        };
        axios
            .post("http://localhost:4000/articulo/create-articulo",articuloObject)
            .then((respuesta)=>console.log(respuesta.datos));
        this.setState({codigo:"", name:""});    
    }
    render(){
        return <div class = 'form-wrapper'>crear-articulo.components
            <form>
                <Form.Group controlId ="codigo">
                    <Form.label>Codigo del Articulo</Form.label>
                    <Form.Control 
                        type = "text"
                        value = {this.state.codigo}
                        onChange = {this.onChageArticuloCodigo}
                    />
                </Form.Group>

                <Form.Group controlId ="name">
                    <Form.label>Nombre del Articulo</Form.label>
                    <Form.Control 
                        type = "text"
                        value = {this.state.name}
                        onChange = {this.onChageArticuloName}
                    />
                </Form.Group>

                <Form.Group controlId ="linea">
                    <Form.label>Linea del Articulo</Form.label>
                    <Form.Control 
                        type = "text"
                        value = {this.state.linea}
                        onChange = {this.onChageArticuloLinea}
                    />
                </Form.Group>

                <Form.Group controlId ="proveedor">
                    <Form.label>proveedor del Articulo</Form.label>
                    <Form.Control 
                        type = "text"
                        value = {this.state.proveedor}
                        onChange = {this.onChageArticuloProveedor}
                    />
                </Form.Group>

                <Button variant = "danger" size = "lg" block = "block" type = "submit" classname = "mt-4">
                    Crecion de articulo
                </Button>
            </form>
        </div>
    }
}

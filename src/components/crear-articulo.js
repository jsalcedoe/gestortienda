import React, {components} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
export default class CrearArticulos extends components{
    constructor(props){
        super(props);
        this.onChangeCodigo = this.onChangeCodigo.bind(this);
        this.onChageArticuloName = this.onChageArticuloName.bind(this);
        this.onSubmin = this.onSubmin.bind(this);

        this.state = {
            codigo: "",
            name: "",
        }; 
    }
    onChageArticuloCodigo(e){
        this.setState({codigo: target.value})
    }
    onChageArticuloName(e){
        this.setState({name: target.value})

    }
    onSubmin(e){
        e.preventDefault();
        const articuloObject = {
            codigo:this.state.codigo,
            name: this.state.name,
        };
        axios
            .post("http://localhost:4000/articulo/create-articulo",articuloObject)
            .then((respuesta)=>console.log(respuesta.datos));
        this.setState({codigo:"", name:""});    
    }
    render(){
        return <div class = 'form-wrapper'>crear-articulo.components</div>
    }
}

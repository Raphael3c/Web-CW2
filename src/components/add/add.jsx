import React, {Component} from 'react';
import axios from 'axios';
import './add.css';

const baseURL = 'http://localhost:3000/rotas'

const initialState = {
    rotas: {id: '', nome_rota: '', horario: ''},
    list: []
}

export default class Add extends Component{

    state = { ...initialState }

    componentDidMount(){
        axios(baseURL).then(resp =>{
            this.setState({list: resp.data})
        })
    }

    getList(route){
        const list = this.state.list;
        list.unshift(route); 
        return list;
    }

    adiciona(){
        const rota = this.state.rotas
        axios['post'](baseURL, rota).then(resp => {
            const list = this.getList(resp.data)
            this.setState({rotas: initialState.rotas, list})
        })
    } 

    updateField(event){
        const rotas = {...this.state.rotas}
        rotas[event.target.name] = event.target.value;
        this.setState({ rotas })
    }
 
   renderForm(){
        return(
            <div id="form">
                <label>Nome: </label>
                <input type="text" name="nome_rota" value={this.state.rotas.nome_rota} onChange={e => this.updateField(e)}/>
                <label> Horário: </label>
                <input type="text" name="horario" value={this.state.rotas.horario} onChange={e => this.updateField(e)}/>
                <button className="btn" onClick={e => this.adiciona(e)}>Salvar</button>
            </div>
        );
    }
    
    render(){
        return (
            this.renderForm()
        )
    }
}